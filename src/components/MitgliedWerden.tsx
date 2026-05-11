import { motion } from 'motion/react';
import { Check, UserPlus, CreditCard, PlayCircle } from 'lucide-react';

export default function MitgliedWerden() {
  const tiers = [
    {
      name: 'Kinder & Jugendliche',
      age: 'Unter 18 Jahren',
      price: '8',
      features: [
        'Zugang zu allen Jugendkadern',
        'Betreuung durch lizensierte Trainer',
        'Versicherungsschutz inklusive',
        'Kostenlose Vereinsveranstaltungen',
        'Ermäßigung bei Ferien-Camps'
      ],
      highlight: false
    },
    {
      name: 'Erwachsene',
      age: '18–65 Jahre',
      price: '15',
      features: [
        'Voller Zugang zu allen Sparten',
        'Nutzung der Fitnessanlage',
        'Vergünstigte Kursgebühren',
        'Stimmrecht bei der JHV',
        'Freier Eintritt zu Heimspielen'
      ],
      highlight: true // Most popular
    },
    {
      name: 'Senioren',
      age: 'Ab 65 Jahren',
      price: '10',
      features: [
        'Spezielle Seniorensportgruppen',
        'Gesundheits- & Präventionskurse',
        'Gemeinsame gesellige Ausflüge',
        'Volles Stimmrecht im Verein',
        'Ermäßigter Beitrag'
      ],
      highlight: false
    }
  ];

  return (
    <section id="mitglied" className="py-24 bg-brand-navy text-white relative">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-oswald font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Werde Teil unserer Gemeinschaft
          </motion.h2>
          <div className="h-1 w-24 bg-brand-red mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
            Egal ob ambitionierter Leistungssportler oder begeisterter Freizeitsportler – bei uns findet jeder seinen Platz.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative bg-white text-brand-navy rounded-sm p-8 flex flex-col ${
                tier.highlight 
                  ? 'border-4 border-brand-red transform md:-translate-y-4 shadow-2xl shadow-red-900/20' 
                  : 'shadow-xl'
              }`}
            >
              {tier.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-red text-white py-1 px-4 font-bold uppercase tracking-wider text-sm rounded-full shadow-md">
                  Beliebt
                </div>
              )}
              
              <div className="text-center mb-8 border-b border-gray-200 pb-8">
                <h3 className="text-2xl font-oswald font-bold mb-1">{tier.name}</h3>
                <p className="text-gray-500 text-sm mb-6 uppercase tracking-widest">{tier.age}</p>
                <div className="flex items-end justify-center justify-center font-oswald">
                  <span className="text-3xl font-bold text-gray-400 mr-1">€</span>
                  <span className="text-6xl font-extrabold leading-none">{tier.price}</span>
                  <span className="text-xl text-gray-500 ml-1">/Monat</span>
                </div>
              </div>

              <ul className="flex-grow space-y-4 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 text-center font-oswald font-bold uppercase tracking-widest text-lg transition-all duration-200 ${
                tier.highlight 
                  ? 'bg-brand-red text-white hover:bg-red-700 hover:shadow-lg' 
                  : 'bg-brand-navy text-white hover:bg-blue-900 hover:shadow-lg'
              }`}>
                Jetzt beitreten
              </button>
            </motion.div>
          ))}
        </div>

        {/* 3 Step Process */}
        <div className="mt-20 border-t border-blue-900/50 pt-16">
          <h3 className="text-center font-oswald text-2xl font-bold mb-12 text-white">In 3 einfachen Schritten zum Mitglied</h3>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
            <div className="flex flex-col items-center text-center max-w-xs group">
              <div className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform bg-opacity-50">
                <UserPlus className="w-10 h-10 text-brand-red" />
              </div>
              <h4 className="font-oswald text-xl font-bold mb-2">1. Formular ausfüllen</h4>
              <p className="text-gray-400 text-sm">Lade den Antrag herunter oder fülle ihn direkt online aus.</p>
            </div>

            <div className="hidden md:block w-8 border-t-2 border-dashed border-gray-600"></div>

            <div className="flex flex-col items-center text-center max-w-xs group">
              <div className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform bg-opacity-50">
                <CreditCard className="w-10 h-10 text-brand-red" />
              </div>
              <h4 className="font-oswald text-xl font-bold mb-2">2. Beitrag wählen</h4>
              <p className="text-gray-400 text-sm">Entscheide dich für den passenden Tarif und die Zahlungsart.</p>
            </div>

            <div className="hidden md:block w-8 border-t-2 border-dashed border-gray-600"></div>

            <div className="flex flex-col items-center text-center max-w-xs group">
              <div className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform bg-opacity-50">
                <PlayCircle className="w-10 h-10 text-brand-red" />
              </div>
              <h4 className="font-oswald text-xl font-bold mb-2">3. Loslegen!</h4>
              <p className="text-gray-400 text-sm">Komm zum Training und werde Teil unseres starken Teams.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
