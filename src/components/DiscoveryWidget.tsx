import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  ChevronLeft, 
  Users, 
  Briefcase, 
  Globe, 
  Moon,
  Sparkles,
  Coffee,
  Compass,
  Send,
  User,
  Plus,
  Minus
} from 'lucide-react';
import { Language, translations } from '../translations';

interface DiscoveryWidgetProps {
  lang: Language;
}

const DiscoveryWidget: React.FC<DiscoveryWidgetProps> = ({ lang }) => {
  const [step, setStep] = useState(1);
  const [selection, setSelection] = useState({
    type: '',
    adults: 2,
    children: 0,
    vibe: ''
  });

  const t = translations[lang].widget;

  const tripTypes = [
    { id: 'umrah', label: t.destinations.umrah, icon: Moon },
    { id: 'family', label: t.destinations.family, icon: Users },
    { id: 'vip', label: t.destinations.vip, icon: Briefcase },
    { id: 'group', label: t.destinations.group, icon: Globe },
  ];

  const vibes = [
    { id: 'spiritual', label: t.vibes.spiritual, icon: Moon },
    { id: 'adventure', label: t.vibes.adventure, icon: Compass },
    { id: 'relaxed', label: t.vibes.relaxed, icon: Coffee },
    { id: 'luxury', label: t.vibes.luxury, icon: Sparkles },
  ];

  const handleNext = () => setStep(s => Math.min(s + 1, 3));
  const handleBack = () => setStep(s => Math.max(s - 1, 1));

  const handleFinish = () => {
    const message = `Marhaba Travel Inquiry:
Type: ${selection.type}
Group: ${selection.adults} Adults, ${selection.children} Children
Vibe: ${selection.vibe}
Language: ${lang}`;
    
    const encoded = encodeURIComponent(message);
    window.open(`https://t.me/travel_agency_uzbot?text=${encoded}`, '_blank');
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden" id="discovery-widget">
      {/* Progress Bar */}
      <div className="h-1.5 w-full bg-slate-100">
        <motion.div 
          className="h-full bg-emerald-primary"
          initial={{ width: '33.33%' }}
          animate={{ width: `${(step / 3) * 100}%` }}
        />
      </div>

      <div className="p-8 md:p-10">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="text-center space-y-2">
                <h3 className="text-2xl font-bold text-slate-charcoal">{t.step1Title}</h3>
                <p className="text-slate-500">{t.step1Sub}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {tripTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => {
                      setSelection({ ...selection, type: type.label });
                      handleNext();
                    }}
                    className={`p-6 rounded-2xl border-2 transition-all text-center space-y-3 group ${
                      selection.type === type.label 
                        ? 'border-emerald-primary bg-emerald-50' 
                        : 'border-slate-100 hover:border-emerald-200 hover:bg-slate-50'
                    }`}
                  >
                    <type.icon className={`w-8 h-8 mx-auto ${
                      selection.type === type.label ? 'text-emerald-primary' : 'text-slate-400 group-hover:text-emerald-primary'
                    }`} />
                    <span className="block font-medium text-slate-charcoal">{type.label}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div className="text-center space-y-2">
                <h3 className="text-2xl font-bold text-slate-charcoal">{t.step2Title}</h3>
                <p className="text-slate-500">{t.step2Sub}</p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white rounded-xl shadow-sm">
                      <User className="w-6 h-6 text-emerald-primary" />
                    </div>
                    <div>
                      <span className="block font-bold text-slate-charcoal">{t.adults}</span>
                      <span className="text-sm text-slate-500">{t.ages13}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={() => setSelection({...selection, adults: Math.max(1, selection.adults - 1)})}
                      className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-slate-50"
                    ><Minus className="w-4 h-4" /></button>
                    <span className="w-6 text-center font-bold">{selection.adults}</span>
                    <button 
                      onClick={() => setSelection({...selection, adults: selection.adults + 1})}
                      className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-slate-50"
                    ><Plus className="w-4 h-4" /></button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white rounded-xl shadow-sm">
                      <Users className="w-6 h-6 text-emerald-primary" />
                    </div>
                    <div>
                      <span className="block font-bold text-slate-charcoal">{t.children}</span>
                      <span className="text-sm text-slate-500">{t.ages2}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={() => setSelection({...selection, children: Math.max(0, selection.children - 1)})}
                      className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-slate-50"
                    ><Minus className="w-4 h-4" /></button>
                    <span className="w-6 text-center font-bold">{selection.children}</span>
                    <button 
                      onClick={() => setSelection({...selection, children: selection.children + 1})}
                      className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-slate-50"
                    ><Plus className="w-4 h-4" /></button>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button 
                  onClick={handleBack}
                  className="flex-1 py-4 px-6 rounded-2xl border border-slate-200 font-bold text-slate-charcoal hover:bg-slate-50 flex items-center justify-center gap-2"
                >
                  <ChevronLeft className="w-5 h-5" /> {t.back}
                </button>
                <button 
                  onClick={handleNext}
                  className="flex-[2] py-4 px-6 rounded-2xl bg-emerald-primary text-white font-bold hover:bg-emerald-900 transition-colors flex items-center justify-center gap-2"
                >
                  {t.next} <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="text-center space-y-2">
                <h3 className="text-2xl font-bold text-slate-charcoal">{t.step3Title}</h3>
                <p className="text-slate-500">{t.step3Sub}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {vibes.map((vibe) => (
                  <button
                    key={vibe.id}
                    onClick={() => setSelection({ ...selection, vibe: vibe.label })}
                    className={`p-6 rounded-2xl border-2 transition-all text-center space-y-3 group ${
                      selection.vibe === vibe.label 
                        ? 'border-emerald-primary bg-emerald-50' 
                        : 'border-slate-100 hover:border-emerald-200 hover:bg-slate-50'
                    }`}
                  >
                    <vibe.icon className={`w-8 h-8 mx-auto ${
                      selection.vibe === vibe.label ? 'text-emerald-primary' : 'text-slate-400 group-hover:text-emerald-primary'
                    }`} />
                    <span className="block font-medium text-slate-charcoal">{vibe.label}</span>
                  </button>
                ))}
              </div>

              <div className="flex gap-4 pt-4">
                <button 
                  onClick={handleBack}
                  className="flex-1 py-4 px-6 rounded-2xl border border-slate-200 font-bold text-slate-charcoal hover:bg-slate-50 flex items-center justify-center gap-2"
                >
                  <ChevronLeft className="w-5 h-5" /> {t.back}
                </button>
                <button 
                  onClick={handleFinish}
                  disabled={!selection.vibe}
                  className={`flex-[2] py-4 px-6 rounded-2xl font-bold transition-all flex items-center justify-center gap-2 ${
                    selection.vibe 
                      ? 'bg-gold-accent text-slate-charcoal hover:bg-opacity-90 shadow-lg' 
                      : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  {t.connect} <Send className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default DiscoveryWidget;
