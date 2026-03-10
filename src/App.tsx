import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, ArrowDown, Menu, X, Globe, Plane } from 'lucide-react';
import DiscoveryWidget from './components/DiscoveryWidget';
import PackageGrid from './components/PackageGrid';
import Testimonials from './components/Testimonials';
import LiveHelpFAB from './components/LiveHelpFAB';
import { Language, translations } from './translations';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = translations[lang];

  const scrollToWidget = () => {
    document.getElementById('discovery-widget')?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const toggleLang = (newLang: Language) => {
    setLang(newLang);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex flex-col items-start leading-none">
              <span className="text-2xl font-black tracking-[0.1em] text-gold-accent uppercase">Marhaba</span>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-[10px] font-bold tracking-[0.25em] text-gold-accent uppercase opacity-90">Travel</span>
                <Plane className="w-3 h-3 text-gold-accent fill-gold-accent" />
              </div>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-4 mr-4 border-r border-slate-200 pr-4">
              <button onClick={() => setLang('en')} className={`text-xs font-bold ${lang === 'en' ? 'text-emerald-primary' : 'text-slate-400'}`}>EN</button>
              <button onClick={() => setLang('uz')} className={`text-xs font-bold ${lang === 'uz' ? 'text-emerald-primary' : 'text-slate-400'}`}>UZ</button>
              <button onClick={() => setLang('ru')} className={`text-xs font-bold ${lang === 'ru' ? 'text-emerald-primary' : 'text-slate-400'}`}>RU</button>
            </div>
            <a href="#" className="text-sm font-semibold text-emerald-primary/60 hover:text-emerald-primary transition-colors">{t.nav.destinations}</a>
            <a href="#" className="text-sm font-semibold text-emerald-primary/60 hover:text-emerald-primary transition-colors">{t.nav.experiences}</a>
            <a href="#" className="text-sm font-semibold text-emerald-primary/60 hover:text-emerald-primary transition-colors">{t.nav.about}</a>
            <button 
              onClick={scrollToWidget}
              className="bg-emerald-primary text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-emerald-primary/90 transition-all shadow-lg shadow-emerald-primary/20"
            >
              {t.nav.planTrip}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-emerald-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
            >
              <div className="px-6 py-8 flex flex-col gap-6">
                <div className="flex items-center gap-6 pb-6 border-b border-slate-100">
                  <button onClick={() => toggleLang('en')} className={`text-sm font-bold ${lang === 'en' ? 'text-emerald-primary' : 'text-slate-400'}`}>ENGLISH</button>
                  <button onClick={() => toggleLang('uz')} className={`text-sm font-bold ${lang === 'uz' ? 'text-emerald-primary' : 'text-slate-400'}`}>O'ZBEK</button>
                  <button onClick={() => toggleLang('ru')} className={`text-sm font-bold ${lang === 'ru' ? 'text-emerald-primary' : 'text-slate-400'}`}>РУССКИЙ</button>
                </div>
                <a href="#" className="text-lg font-bold text-emerald-primary">{t.nav.destinations}</a>
                <a href="#" className="text-lg font-bold text-emerald-primary">{t.nav.experiences}</a>
                <a href="#" className="text-lg font-bold text-emerald-primary">{t.nav.about}</a>
                <button 
                  onClick={scrollToWidget}
                  className="w-full bg-emerald-primary text-white py-4 rounded-2xl font-bold shadow-xl shadow-emerald-primary/20"
                >
                  {t.nav.planTrip}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-emerald-primary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-emerald-primary/5 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            key={lang}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-emerald-primary/10 text-emerald-primary text-xs font-bold tracking-widest uppercase rounded-full mb-6">
              {t.hero.badge}
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-charcoal leading-[1.1] mb-8 max-w-4xl mx-auto">
              {t.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={scrollToWidget}
                className="w-full sm:w-auto px-10 py-5 bg-emerald-primary text-white rounded-2xl font-bold text-lg hover:bg-emerald-900 transition-all shadow-2xl shadow-emerald-primary/30 flex items-center justify-center gap-3 group"
              >
                {t.hero.ctaPrimary}
                <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto px-10 py-5 bg-white text-emerald-primary border border-emerald-primary/20 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all">
                {t.hero.ctaSecondary}
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Banner */}
      <div className="bg-emerald-primary py-6 px-6 text-center shadow-inner">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map((i) => (
              <img
                key={i}
                className="w-10 h-10 rounded-full border-2 border-emerald-primary"
                src={`https://i.pravatar.cc/100?img=${i + 10}`}
                alt="User"
                referrerPolicy="no-referrer"
              />
            ))}
          </div>
          <p className="text-white font-medium tracking-wide text-lg">
            {t.trust.banner}
          </p>
        </div>
      </div>

      {/* Discovery Widget Section */}
      <section className="bg-slate-bg py-12">
        <DiscoveryWidget lang={lang} />
      </section>

      {/* Package Grid Section */}
      <PackageGrid lang={lang} />

      {/* Testimonials Section */}
      <Testimonials lang={lang} />

      {/* Footer */}
      <footer className="bg-emerald-primary text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="flex flex-col items-start leading-none">
                <span className="text-2xl font-black tracking-[0.1em] text-white uppercase">Marhaba</span>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-[10px] font-bold tracking-[0.25em] text-white/90 uppercase">Travel</span>
                  <Plane className="w-3 h-3 text-white fill-white" />
                </div>
              </div>
            </div>
            <p className="text-white/60 max-w-md leading-relaxed">
              {t.footer.desc}
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6">{t.footer.quickLinks}</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">{t.nav.destinations}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t.nav.experiences}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t.nav.about}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t.nav.planTrip}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">{t.footer.connect}</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="https://t.me/travel_agency_uzbot" className="hover:text-white transition-colors">Telegram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">WhatsApp</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-20 mt-20 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 text-xs">
          <p>© 2026 Marhaba Travel. {t.footer.rights}</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">{t.footer.privacy}</a>
            <a href="#" className="hover:text-white transition-colors">{t.footer.terms}</a>
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <LiveHelpFAB lang={lang} />
    </div>
  );
}
