import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Klaus M.',
      duration: 'Mitglied seit 12 Jahren',
      quote: 'Der TV Jahn ist wie eine zweite Familie für mich. Das Training hält mich fit, und die Geselligkeit danach möchte ich nicht missen.',
      initials: 'KM',
      color: 'bg-blue-600'
    },
    {
      name: 'Sarah L.',
      duration: 'Mitglied seit 3 Jahren',
      quote: 'Ich habe hier mit Volleyball angefangen und wurde direkt super aufgenommen. Tolle Trainer, starkes Teamgefühl!',
      initials: 'SL',
      color: 'bg-red-600'
    },
    {
      name: 'Familie Bergmann',
      duration: 'Mitglied seit 8 Jahren',
      quote: 'Für unsere Kinder das perfekte Umfeld, um spielerisch Sport zu treiben. Wir Erwachsenen nutzen das Fitnessangebot – ideal!',
      initials: 'FB',
      color: 'bg-green-600'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-oswald font-bold text-brand-navy mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Was unsere Mitglieder sagen
          </motion.h2>
          <div className="h-1 w-24 bg-brand-red mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testi, index) => (
            <motion.div
              key={testi.name}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-gray-50 border border-gray-100 p-8 rounded-sm shadow-sm relative pt-12"
            >
              {/* Avatar */}
              <div className={`absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center text-white font-oswald font-bold text-xl border-4 border-white shadow-md ${testi.color}`}>
                {testi.initials}
              </div>

              <div className="flex justify-center mb-4 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 italic text-center mb-6 leading-relaxed">
                "{testi.quote}"
              </p>

              <div className="text-center mt-auto border-t border-gray-200 pt-4">
                <p className="font-bold text-brand-navy font-oswald text-lg">{testi.name}</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider">{testi.duration}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
