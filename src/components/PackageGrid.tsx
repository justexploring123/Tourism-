import React from 'react';
import { motion } from 'motion/react';
import { Clock, Users, Star, ArrowRight } from 'lucide-react';
import { Language, translations } from '../translations';

interface PackageGridProps {
  lang: Language;
}

const PackageGrid: React.FC<PackageGridProps> = ({ lang }) => {
  const t = translations[lang].packages;

  const experiences = [
    {
      id: 1,
      title: lang === 'en' ? 'Premium Umrah Experience' : lang === 'uz' ? 'Premium Umra tajribasi' : 'Премиум Умра опыт',
      location: lang === 'en' ? 'Saudi Arabia' : lang === 'uz' ? 'Saudiya Arabistoni' : 'Саудовская Аравия',
      duration: `14 ${t.days}`,
      price: '$1,250',
      rating: 4.9,
      reviews: 128,
      image: 'https://images.unsplash.com/photo-1565031491910-e57fac031c41?auto=format&fit=crop&q=80&w=800',
      badge: t.umrahBadge,
      tags: [t.hotel, t.meals, t.transport]
    },
    {
      id: 2,
      title: lang === 'en' ? 'Dubai City & Desert Escape' : lang === 'uz' ? 'Dubay shahar va sahro sarguzashti' : 'Дубай: Город и Пустыня',
      location: lang === 'en' ? 'United Arab Emirates' : lang === 'uz' ? 'BAA' : 'ОАЭ',
      duration: `7 ${t.days}`,
      price: '$850',
      rating: 4.8,
      reviews: 95,
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800',
      badge: t.dubaiBadge,
      tags: [t.hotel, t.transport]
    },
    {
      id: 3,
      title: lang === 'en' ? 'Grand Europe Discovery' : lang === 'uz' ? 'Buyuk Yevropa kashfiyoti' : 'Великое открытие Европы',
      location: lang === 'en' ? 'Europe' : lang === 'uz' ? 'Yevropa' : 'Европа',
      duration: `12 ${t.days}`,
      price: '$1,850',
      rating: 4.7,
      reviews: 64,
      image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=800',
      badge: t.europeBadge,
      tags: [t.hotel, t.meals, t.transport]
    }
  ];

  return (
    <section className="py-20 bg-slate-bg" id="experiences">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-slate-charcoal">{t.title}</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={exp.image} 
                  alt={exp.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 bg-emerald-primary text-white text-xs font-bold rounded-full shadow-lg">
                    {exp.badge}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                    <Star className="w-4 h-4 text-gold-accent fill-gold-accent" />
                    <span className="text-sm font-bold text-slate-charcoal">{exp.rating}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-emerald-primary uppercase tracking-wider">{exp.location}</p>
                  <h3 className="text-xl font-bold text-slate-charcoal group-hover:text-emerald-primary transition-colors">
                    {exp.title}
                  </h3>
                </div>

                <div className="flex items-center gap-4 text-sm text-slate-500">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {exp.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {exp.reviews} {lang === 'en' ? 'reviews' : lang === 'uz' ? 'fikrlar' : 'отзывов'}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-slate-50 text-slate-500 text-xs font-medium rounded-full border border-slate-100">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4 flex items-center justify-between border-t border-slate-50">
                  <div>
                    <p className="text-xs text-slate-400">{t.startingFrom}</p>
                    <p className="text-2xl font-bold text-emerald-primary">{exp.price}</p>
                  </div>
                  <button className="p-3 rounded-xl bg-slate-50 text-emerald-primary hover:bg-emerald-primary hover:text-white transition-all group/btn">
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackageGrid;
