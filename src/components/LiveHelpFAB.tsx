import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Send, X, MessageSquare } from 'lucide-react';
import { Language, translations } from '../translations';

interface LiveHelpFABProps {
  lang: Language;
}

export default function LiveHelpFAB({ lang }: LiveHelpFABProps) {
  const t = translations[lang].fab;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="flex flex-col gap-3 mb-2"
          >
            <a
              href="https://wa.me/yournumber"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white text-navy px-6 py-3 rounded-2xl shadow-xl border border-slate-100 hover:bg-slate-50 transition-colors group"
            >
              <span className="font-bold text-sm">{t.whatsapp}</span>
              <div className="p-2 bg-emerald-500 text-white rounded-xl group-hover:scale-110 transition-transform">
                <MessageCircle className="w-5 h-5" />
              </div>
            </a>
            <a
              href="https://t.me/travel_agency_uzbot"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white text-navy px-6 py-3 rounded-2xl shadow-xl border border-slate-100 hover:bg-slate-50 transition-colors group"
            >
              <span className="font-bold text-sm">{t.telegram}</span>
              <div className="p-2 bg-sky-500 text-white rounded-xl group-hover:scale-110 transition-transform">
                <Send className="w-5 h-5" />
              </div>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ${
          isOpen ? 'bg-white text-navy rotate-90' : 'bg-navy text-white hover:scale-110'
        }`}
      >
        {isOpen ? <X className="w-8 h-8" /> : <MessageSquare className="w-8 h-8" />}
      </button>
    </div>
  );
}
