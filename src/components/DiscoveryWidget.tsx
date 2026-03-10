import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Palmtree, 
  Sun, 
  Waves, 
  Map, 
  Users, 
  User, 
  Zap, 
  Coffee, 
  Crown, 
  ArrowRight, 
  ChevronLeft,
  Plus,
  Minus,
  Send
} from 'lucide-react';
import { Language, translations } from '../translations';

type Step = 1 | 2 | 3;

interface Selection {
  destination: string;
  adults: number;
  children: number;
  vibe: string;
}

interface DiscoveryWidgetProps {
  lang: Language;
}

export default function DiscoveryWidget({ lang }: DiscoveryWidgetProps) {
  const t = translations[lang].widget;
  const [step, setStep] = useState<Step>(1);
  const [selection, setSelection] = useState<Selection>({
    destination: '',
    adults: 2,
    children: 0,
    vibe: ''
  });

  const nextStep = () => setStep((prev) => (prev < 3 ? (prev + 1) as Step : prev));
  const prevStep = () => setStep((prev) => (prev > 1 ? (prev - 1) as Step : prev));

  const handleFinish = () => {
    const text = `Hi! I'm interested in a trip to ${selection.destination}. We are ${selection.adults} adults and ${selection.children} children. We're looking for a ${selection.vibe} vibe. (Language: ${lang})`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://t.me/travel_agency_uzbot?start=${encodedText}`, '_blank');
  };

  const destinations = [
    { id: 'dubai', label: t.destinations.dubai, icon: Building2 },
    { id: 'antalya', label: t.destinations.antalya, icon: Sun },
    { id: 'sharm', label: t.destinations.sharm, icon: Waves },
    { id: 'custom', label: t.destinations.custom, icon: Map },
  ];

  const vibes = [
    { id: 'adventure', label: t.vibes.adventure, icon: Zap },
    { id: 'relaxed', label: t.vibes.relaxed, icon: Coffee },
    { id: 'luxury', label: t.vibes.luxury, icon: Crown },
  ];

  return (
    <div id="discovery-widget" className="max-w-2xl mx-auto px-4 py-12">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
        {/* Progress Bar */}
        <div className="h-1.5 w-full bg-slate-100 flex">
          <motion.div 
            className="h-full bg-navy"
            initial={{ width: '33.33%' }}
            animate={{ width: `${(step / 3) * 100}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </div>

        <div className="p-8 md:p-12">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-navy mb-2">{t.step1Title}</h3>
                  <p className="text-slate-500">{t.step1Sub}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {destinations.map((dest) => (
                    <button
                      key={dest.id}
                      onClick={() => {
                        setSelection({ ...selection, destination: dest.label });
                        nextStep();
                      }}
                      className={`p-6 rounded-2xl border-2 transition-all flex flex-col items-center gap-3 group ${
                        selection.destination === dest.label 
                        ? 'border-navy bg-navy text-white' 
                        : 'border-slate-100 hover:border-navy/30 bg-slate-50 text-navy'
                      }`}
                    >
                      <dest.icon className={`w-8 h-8 ${selection.destination === dest.label ? 'text-white' : 'text-navy group-hover:scale-110 transition-transform'}`} />
                      <span className="font-semibold">{dest.label}</span>
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
                className="space-y-10"
              >
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-navy mb-2">{t.step2Title}</h3>
                  <p className="text-slate-500">{t.step2Sub}</p>
                </div>
                
                <div className="space-y-8">
                  <div className="flex items-center justify-between bg-slate-50 p-6 rounded-2xl">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-white rounded-xl shadow-sm">
                        <User className="w-6 h-6 text-navy" />
                      </div>
                      <div>
                        <p className="font-bold text-navy">{t.adults}</p>
                        <p className="text-xs text-slate-400">{t.ages13}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <button 
                        onClick={() => setSelection({...selection, adults: Math.max(1, selection.adults - 1)})}
                        className="p-2 rounded-full border border-slate-200 hover:bg-white transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="text-xl font-bold w-6 text-center">{selection.adults}</span>
                      <button 
                        onClick={() => setSelection({...selection, adults: selection.adults + 1})}
                        className="p-2 rounded-full border border-slate-200 hover:bg-white transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between bg-slate-50 p-6 rounded-2xl">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-white rounded-xl shadow-sm">
                        <Users className="w-6 h-6 text-navy" />
                      </div>
                      <div>
                        <p className="font-bold text-navy">{t.children}</p>
                        <p className="text-xs text-slate-400">{t.ages2}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <button 
                        onClick={() => setSelection({...selection, children: Math.max(0, selection.children - 1)})}
                        className="p-2 rounded-full border border-slate-200 hover:bg-white transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="text-xl font-bold w-6 text-center">{selection.children}</span>
                      <button 
                        onClick={() => setSelection({...selection, children: selection.children + 1})}
                        className="p-2 rounded-full border border-slate-200 hover:bg-white transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <button onClick={prevStep} className="flex-1 py-4 px-6 rounded-xl border border-slate-200 font-semibold text-navy hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
                    <ChevronLeft className="w-4 h-4" /> {t.back}
                  </button>
                  <button onClick={nextStep} className="flex-[2] py-4 px-6 rounded-xl bg-navy text-white font-semibold hover:bg-navy/90 transition-colors flex items-center justify-center gap-2">
                    {t.next} <ArrowRight className="w-4 h-4" />
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
                className="space-y-8"
              >
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-navy mb-2">{t.step3Title}</h3>
                  <p className="text-slate-500">{t.step3Sub}</p>
                </div>

                <div className="space-y-3">
                  {vibes.map((v) => (
                    <button
                      key={v.id}
                      onClick={() => setSelection({ ...selection, vibe: v.label })}
                      className={`w-full p-5 rounded-2xl border-2 transition-all flex items-center gap-4 ${
                        selection.vibe === v.label 
                        ? 'border-navy bg-navy/5 text-navy' 
                        : 'border-slate-100 hover:border-navy/20 bg-slate-50 text-slate-600'
                      }`}
                    >
                      <div className={`p-3 rounded-xl ${selection.vibe === v.label ? 'bg-navy text-white' : 'bg-white text-navy'}`}>
                        <v.icon className="w-6 h-6" />
                      </div>
                      <span className="font-bold text-lg">{v.label}</span>
                      {selection.vibe === v.label && (
                        <div className="ml-auto w-6 h-6 bg-navy rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  <button onClick={prevStep} className="flex-1 py-4 px-6 rounded-xl border border-slate-200 font-semibold text-navy hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
                    <ChevronLeft className="w-4 h-4" /> {t.back}
                  </button>
                  <button 
                    disabled={!selection.vibe}
                    onClick={handleFinish} 
                    className="flex-[2] py-4 px-6 rounded-xl bg-navy text-white font-semibold hover:bg-navy/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 shadow-lg shadow-navy/20"
                  >
                    {t.connect} <Send className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

// Helper to keep icons working
function Building2(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
      <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
      <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
      <path d="M10 6h4" />
      <path d="M10 10h4" />
      <path d="M10 14h4" />
      <path d="M10 18h4" />
    </svg>
  );
}

