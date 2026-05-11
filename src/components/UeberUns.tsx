import { motion } from 'motion/react';
import { Users, TrendingUp, Smile } from 'lucide-react';

export default function UeberUns() {
  const milestones = [
    { year: '1889', title: 'Gründung', desc: 'Der TV Jahn wird von sportbegeisterten Bürgern ins Leben gerufen.' },
    { year: '1950', title: 'Erweiterung', desc: 'Neubau der Sportanlagen nach dem Krieg. Neue Sparten entstehen.' },
    { year: '1990', title: 'Modernisierung', desc: 'Einweihung des neuen Clubhauses und der großen Halle.' },
    { year: '2024', title: 'Heute', desc: 'Über 2.000 Mitglieder und modernste Trainingsbedingungen.' },
  ];

  return (
    <section id="ueber-uns" className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-oswald font-bold text-brand-navy mb-6">Über TV Jahn Wolfsburg</h2>
            <div className="h-1 w-24 bg-brand-red mb-8"></div>
            
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Seit über 130 Jahren ist der TV Jahn Wolfsburg e.V. mehr als nur ein Sportverein. Wir sind eine feste Institution in der Region, ein Ort der Begegnung und ein sportliches Zuhause für Generationen.
            </p>
            
            <blockquote className="border-l-4 border-brand-red pl-6 py-2 my-8 bg-white/50 italic text-xl text-brand-navy font-medium shadow-sm">
              "Wir fördern Sport, Gesundheit und Gemeinschaft für alle Menschen in Wolfsburg. Sport verbindet!"
            </blockquote>

            <p className="text-gray-700 text-lg mb-10 leading-relaxed">
              Unsere engagierten Trainer und ehrenamtlichen Helfer setzen sich täglich dafür ein, dass vom Kleinkind bis zum Senior jeder Spaß an der Bewegung findet und seine sportlichen Ziele erreicht.
            </p>

            {/* Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-white shadow-sm rounded-sm">
                <Users className="w-10 h-10 text-brand-red mx-auto mb-3" />
                <h4 className="font-oswald font-bold text-lg text-brand-navy">Gemeinschaft</h4>
              </div>
              <div className="text-center p-4 bg-white shadow-sm rounded-sm">
                <TrendingUp className="w-10 h-10 text-brand-red mx-auto mb-3" />
                <h4 className="font-oswald font-bold text-lg text-brand-navy">Leistung</h4>
              </div>
              <div className="text-center p-4 bg-white shadow-sm rounded-sm">
                <Smile className="w-10 h-10 text-brand-red mx-auto mb-3" />
                <h4 className="font-oswald font-bold text-lg text-brand-navy">Spaß</h4>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 md:p-12 shadow-xl rounded-sm border border-gray-100"
          >
            <h3 className="text-2xl font-oswald font-bold text-brand-navy mb-10">Unsere Meilensteine</h3>
            
            <div className="relative border-l-2 border-gray-200 pb-4">
              {milestones.map((item, index) => (
                <div key={item.year} className="mb-10 last:mb-0 relative pl-8">
                  {/* Timeline Node */}
                  <div className="absolute w-4 h-4 rounded-full bg-brand-red left-[-9px] top-1.5 shadow-[0_0_0_4px_rgba(204,0,0,0.2)]"></div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-baseline mb-1">
                    <span className="font-oswald text-brand-navy text-2xl font-bold mr-4">{item.year}</span>
                    <span className="font-bold text-gray-800 text-lg">{item.title}</span>
                  </div>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
