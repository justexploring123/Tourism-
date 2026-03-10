import React from 'react';
import { Hotel, Utensils, Car, Clock, Tag } from 'lucide-react';
import { Language, translations } from '../translations';

interface PackageGridProps {
  lang: Language;
}

export default function PackageGrid({ lang }: PackageGridProps) {
  const t = translations[lang].packages;
  const widgetT = translations[lang].widget;

  const experiences = [
    {
      title: widgetT.destinations.dubai,
      duration: `7 ${t.days} / 6 ${t.nights}`,
      price: "1,150",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
      tags: [widgetT.destinations.dubai, widgetT.vibes.luxury]
    },
    {
      title: widgetT.destinations.antalya,
      duration: `10 ${t.days} / 9 ${t.nights}`,
      price: "1,450",
      image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=800&q=80",
      tags: [widgetT.destinations.antalya, widgetT.vibes.relaxed]
    },
    {
      title: widgetT.destinations.sharm,
      duration: `8 ${t.days} / 7 ${t.nights}`,
      price: "980",
      image: "https://images.unsplash.com/photo-1510009489794-352fba39a0b8?auto=format&fit=crop&w=800&q=80",
      tags: [widgetT.destinations.sharm, widgetT.vibes.adventure]
    }
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">{t.title}</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="group bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={exp.image} 
                  alt={exp.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-navy px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-2 shadow-sm">
                    <Clock className="w-3 h-3" /> {exp.duration}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {exp.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-wider font-bold text-slate-400 border border-slate-200 px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-2xl font-bold text-navy mb-2">{exp.title}</h3>
                
                <div className="flex items-center gap-1 text-navy mb-6">
                  <span className="text-sm font-medium opacity-60">{t.startingFrom}</span>
                  <span className="text-2xl font-bold">${exp.price}</span>
                </div>

                <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
                  <div className="flex gap-4">
                    <div className="group/icon relative">
                      <Hotel className="w-5 h-5 text-slate-400 group-hover:text-navy transition-colors" />
                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-navy text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap">{t.hotel}</span>
                    </div>
                    <div className="group/icon relative">
                      <Utensils className="w-5 h-5 text-slate-400 group-hover:text-navy transition-colors" />
                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-navy text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap">{t.meals}</span>
                    </div>
                    <div className="group/icon relative">
                      <Car className="w-5 h-5 text-slate-400 group-hover:text-navy transition-colors" />
                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-navy text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap">{t.transport}</span>
                    </div>
                  </div>
                  <button className="text-navy font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                    {t.details} <Tag className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
