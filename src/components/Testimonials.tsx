import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Language, translations } from '../translations';

interface TestimonialsProps {
  lang: Language;
}

export default function Testimonials({ lang }: TestimonialsProps) {
  const t = translations[lang].testimonials;

  const reviews = [
    {
      name: lang === 'uz' ? 'Azizbek Karimov' : lang === 'ru' ? 'Азизбек Каримов' : 'Azizbek Karimov',
      location: lang === 'uz' ? 'Toshkent' : lang === 'ru' ? 'Ташкент' : 'Tashkent',
      text: lang === 'uz' 
        ? 'Umra sayohatimiz Marhaba bilan juda go\'zal o\'tdi. Hamma narsa yuqori darajada tashkil etilgan, ayniqsa mehmonxonalar juda yaqin.' 
        : lang === 'ru' 
        ? 'Наша поездка на Умру с Marhaba прошла великолепно. Все организовано на высшем уровне, особенно отели — очень близко.' 
        : 'Our Umrah trip with Marhaba was beautiful. Everything was organized at a high level, especially the hotels being so close.',
      rating: 5
    },
    {
      name: lang === 'uz' ? 'Madina Saidova' : lang === 'ru' ? 'Мадина Саидова' : 'Madina Saidova',
      location: lang === 'uz' ? 'Samarqand' : lang === 'ru' ? 'Самарканд' : 'Samarkand',
      text: lang === 'uz' 
        ? 'Dubay uchun eng yaxshi narxlarni shu yerdan topdik. Oila bilan hordiq chiqarish uchun Marhaba eng yaxshi tanlov.' 
        : lang === 'ru' 
        ? 'Нашли здесь лучшие цены на Дубай. Для семейного отдыха Marhaba — лучший выбор.' 
        : 'We found the best prices for Dubai here. Marhaba is the best choice for a family vacation.',
      rating: 5
    },
    {
      name: lang === 'uz' ? 'Farrux Olimov' : lang === 'ru' ? 'Фаррух Олимов' : 'Farrux Olimov',
      location: lang === 'uz' ? 'Buxoro' : lang === 'ru' ? 'Бухара' : 'Bukhara',
      text: lang === 'uz' 
        ? 'Yevropa bo\'ylab guruhli turimiz unutilmas bo\'ldi. Marhaba jamoasiga katta rahmat!' 
        : lang === 'ru' 
        ? 'Наш групповой тур по Европе был незабываемым. Большое спасибо команде Marhaba!' 
        : 'Our group tour across Europe was unforgettable. Big thanks to the Marhaba team!',
      rating: 5
    }
  ];

  return (
    <section className="py-24 px-4 bg-slate-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-primary mb-4">{t.title}</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative group hover:shadow-md transition-shadow">
              <div className="absolute -top-4 left-8 p-3 bg-emerald-primary text-white rounded-2xl shadow-lg">
                <Quote className="w-5 h-5" />
              </div>
              
              <div className="flex gap-1 mb-6 mt-2">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-slate-600 italic mb-8 leading-relaxed">
                "{review.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-primary/5 rounded-full flex items-center justify-center text-emerald-primary font-bold text-lg">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-emerald-primary">{review.name}</h4>
                  <p className="text-xs text-slate-400">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
