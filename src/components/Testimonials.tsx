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
        ? 'Dubayga sayohatimiz ajoyib o\'tdi! AI konsyerj bizga eng yaxshi mehmonxonani tanlashda yordam berdi. Agentlar juda xushmuomala.' 
        : lang === 'ru' 
        ? 'Наша поездка в Дубай была великолепной! ИИ-консьерж помог выбрать лучший отель. Агенты очень вежливы.' 
        : 'Our trip to Dubai was amazing! The AI concierge helped us pick the best hotel. The agents were very polite.',
      rating: 5
    },
    {
      name: lang === 'uz' ? 'Madina Saidova' : lang === 'ru' ? 'Мадина Саидова' : 'Madina Saidova',
      location: lang === 'uz' ? 'Samarqand' : lang === 'ru' ? 'Самарканд' : 'Samarkand',
      text: lang === 'uz' 
        ? 'Antaliya uchun eng yaxshi narxlarni shu yerdan topdik. Oilaviy hordiq uchun hamma narsa yuqori darajada tashkil etilgan.' 
        : lang === 'ru' 
        ? 'Нашли здесь лучшие цены на Анталью. Для семейного отдыха все организовано на высшем уровне.' 
        : 'We found the best prices for Antalya here. Everything was organized at a high level for a family vacation.',
      rating: 5
    },
    {
      name: lang === 'uz' ? 'Farrux Olimov' : lang === 'ru' ? 'Фаррух Олимов' : 'Farrux Olimov',
      location: lang === 'uz' ? 'Buxoro' : lang === 'ru' ? 'Бухара' : 'Bukhara',
      text: lang === 'uz' 
        ? 'Sharm al-Shayxdagi sho\'ng\'ish sayohati unutilmas bo\'ldi. Telegram bot orqali bog\'lanish juda qulay ekan.' 
        : lang === 'ru' 
        ? 'Дайвинг в Шарм-эль-Шейхе был незабываемым. Связываться через Telegram-бота очень удобно.' 
        : 'The diving trip in Sharm El Sheikh was unforgettable. Contacting via the Telegram bot is very convenient.',
      rating: 5
    }
  ];

  return (
    <section className="py-24 px-4 bg-slate-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">{t.title}</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative group hover:shadow-md transition-shadow">
              <div className="absolute -top-4 left-8 p-3 bg-navy text-white rounded-2xl shadow-lg">
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
                <div className="w-12 h-12 bg-navy/5 rounded-full flex items-center justify-center text-navy font-bold text-lg">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-navy">{review.name}</h4>
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
