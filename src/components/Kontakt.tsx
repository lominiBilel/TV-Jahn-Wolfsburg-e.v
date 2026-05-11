import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';

export default function Kontakt() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="kontakt" className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-oswald font-bold text-brand-navy mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Kontakt & Anfahrt
          </motion.h2>
          <div className="h-1 w-24 bg-brand-red mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hast du Fragen zu unserem Angebot oder zur Mitgliedschaft? Schreib uns oder ruf an.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 shadow-md rounded-sm"
          >
            <h3 className="text-2xl font-oswald font-bold text-brand-navy mb-6">Schreib uns eine Nachricht</h3>
            
            {formSubmitted ? (
              <div className="bg-green-50 border border-green-200 text-green-800 p-8 rounded-sm text-center flex flex-col items-center">
                <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                <h4 className="text-2xl font-oswald font-bold mb-2">Vielen Dank!</h4>
                <p>Deine Nachricht wurde erfolgreich gesendet. Wir melden uns in Kürze bei dir.</p>
                <button 
                  onClick={() => setFormSubmitted(false)}
                  className="mt-6 text-brand-navy font-bold hover:underline"
                >
                  Weitere Nachricht senden
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-1">Name <span className="text-brand-red">*</span></label>
                  <input type="text" id="name" required className="w-full border border-gray-300 px-4 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-navy focus:border-transparent transition-shadow" placeholder="Max Mustermann" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-1">E-Mail <span className="text-brand-red">*</span></label>
                    <input type="email" id="email" required className="w-full border border-gray-300 px-4 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-navy focus:border-transparent transition-shadow" placeholder="max@beispiel.de" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-1">Telefon (optional)</label>
                    <input type="tel" id="phone" className="w-full border border-gray-300 px-4 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-navy focus:border-transparent transition-shadow" placeholder="0123 / 4567890" />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-1">Nachricht <span className="text-brand-red">*</span></label>
                  <textarea id="message" rows={4} required className="w-full border border-gray-300 px-4 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-navy focus:border-transparent transition-shadow resize-none" placeholder="Wie können wir dir helfen?"></textarea>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="dsgvo" type="checkbox" required className="w-4 h-4 text-brand-navy bg-gray-100 border-gray-300 rounded focus:ring-brand-navy" />
                  </div>
                  <label htmlFor="dsgvo" className="ml-2 text-sm text-gray-600">
                    Ich stimme zu, dass meine Angaben aus dem Kontaktformular zur Beantwortung meiner Anfrage erhoben und verarbeitet werden. Details findest du in der Datenschutzerklärung. <span className="text-brand-red">*</span>
                  </label>
                </div>

                <button type="submit" className="w-full bg-brand-red text-white py-4 font-oswald text-lg tracking-wider hover:bg-red-700 transition-colors uppercase font-bold mt-4 shadow-md">
                  Nachricht senden
                </button>
              </form>
            )}
          </motion.div>

          {/* Right - Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            {/* Info Card */}
            <div className="bg-brand-navy text-white p-8 shadow-md rounded-sm flex-grow">
              <h3 className="text-2xl font-oswald font-bold mb-6">Geschäftsstelle</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-brand-red mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold">TV Jahn Wolfsburg e.V.</p>
                    <p className="text-gray-300">Sportstraße 1</p>
                    <p className="text-gray-300">38440 Wolfsburg</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-brand-red mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold">Telefon</p>
                    <p className="text-gray-300">+49 (0) 5361 / 12345 67</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-brand-red mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold">E-Mail</p>
                    <p className="text-gray-300">info@tvjahn-wob.de</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-brand-red mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold">Öffnungszeiten Büro</p>
                    <p className="text-gray-300">Mo, Mi: 09:00 - 12:00 Uhr</p>
                    <p className="text-gray-300">Di, Do: 15:00 - 18:00 Uhr</p>
                    <p className="text-gray-300">Fr: Geschlossen</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="h-64 bg-gray-200 border border-gray-300 relative overflow-hidden rounded-sm shadow-inner group">
              {/* Fake Map Grid Pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
              
              {/* Map UI Elements */}
              <div className="absolute bottom-2 left-2 bg-white/80 px-2 py-1 text-[10px] text-gray-500 rounded">Google Maps Plugin</div>
              
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <MapPin className="w-12 h-12 text-brand-red group-hover:-translate-y-2 group-hover:scale-110 transition-all duration-300 filter drop-shadow-md" />
                <div className="bg-white px-3 py-1 mt-2 text-sm font-bold text-brand-navy shadow-md rounded">Sportanlage TV Jahn</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
