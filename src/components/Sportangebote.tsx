import { motion } from 'motion/react';
import { Dumbbell, Activity, Goal, Waves, Dribbble, Target, Play, ShieldAlert, HeartPulse } from 'lucide-react';

const sports = [
  { name: 'Fußball', desc: 'Von den Bambinis bis zu den Alten Herren – der Ball rollt auf unserem Grün.', icon: Goal },
  { name: 'Turnen', desc: 'Körperbeherrschung, Kraft und Flexibilität für ein gesundes Leben.', icon: Activity },
  { name: 'Leichtathletik', desc: 'Laufen, Springen, Werfen. Höher, schneller, weiter.', icon: Play },
  { name: 'Basketball', desc: 'Tempo, Teamgeist und Treffsicherheit unterm Korb.', icon: Dribbble },
  { name: 'Volleyball', desc: 'Ein starkes Team auf beiden Seiten des Netzes.', icon: ShieldAlert },
  { name: 'Schwimmen', desc: 'Gleiten, Kraulen und Tauchen für Jung und Alt.', icon: Waves },
  { name: 'Badminton', desc: 'Schnelle Reflexe und Präzision auf dem Court.', icon: Target },
  { name: 'Tennis', desc: 'Spiel, Satz und Sieg auf unserer gepflegten Anlage.', icon: Activity }, // Fallback icon
  { name: 'Fitness & Gesundheit', desc: 'Prävention, Reha-Sport und Kurse für dein Wohlbefinden.', icon: HeartPulse },
];

export default function Sportangebote() {
  return (
    <section id="sportangebote" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-oswald font-bold text-brand-navy mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Unser Sportangebot
          </motion.h2>
          <div className="h-1 w-24 bg-brand-red mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Finde die Sportart, die zu dir passt. Wir bieten ein breites Spektrum für alle Alters- und Leistungsklassen.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sports.map((sport, index) => {
            const Icon = sport.icon;
            return (
              <motion.div
                key={sport.name}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-sm shadow-md border-t-4 border-transparent hover:border-brand-red hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full"
              >
                <div className="bg-blue-50 text-brand-navy p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-oswald font-bold text-brand-navy mb-3">{sport.name}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{sport.desc}</p>
                <a href="#kontakt" className="text-brand-red font-semibold uppercase tracking-wider text-sm hover:underline flex items-center mt-auto">
                  Mehr erfahren <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
