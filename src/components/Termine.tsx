import { motion } from 'motion/react';
import { Calendar, MapPin, Clock } from 'lucide-react';

const events = [
  {
    id: 1,
    title: 'Sommerfest 2025',
    date: '19. Juli 2025',
    time: '14:00 Uhr',
    location: 'Sportgelände Wolfsburg',
    desc: 'Unser großes Familienfest mit Spielen, Grillen und Live-Musik.'
  },
  {
    id: 2,
    title: 'Stadtmeisterschaft Fußball',
    date: '26. Juli 2025',
    time: '10:00 Uhr',
    location: 'Wolfsburg Arena',
    desc: 'Spitzensport live: Unsere 1. Herren kämpft um den Titel.'
  },
  {
    id: 3,
    title: 'Fitness-Schnupperkurs',
    date: '5. August 2025',
    time: '18:30 Uhr',
    location: 'Vereinshalle',
    desc: 'Lerne unser neues Functional Training Programm kennen. Kostenlos!'
  },
  {
    id: 4,
    title: 'Jahreshauptversammlung',
    date: '15. September 2025',
    time: '19:00 Uhr',
    location: 'Clubheim',
    desc: 'Wichtige Wahlen und Berichte für alle Mitglieder. Um Erscheinen wird gebeten.'
  }
];

export default function Termine() {
  return (
    <section id="termine" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-oswald font-bold text-brand-navy mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Aktuelle Termine & Events
          </motion.h2>
          <div className="h-1 w-24 bg-brand-red mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Verpasse keine wichtigen Spiele, Feste oder Versammlungen. Wir freuen uns auf dich!
          </p>
        </div>

        <div className="flex flex-col gap-6 max-w-4xl mx-auto">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-gray-50 border border-gray-100 rounded-sm shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row overflow-hidden"
            >
              {/* Date Badge */}
              <div className="bg-brand-navy text-white p-6 flex flex-col items-center justify-center min-w-[160px] group-hover:bg-brand-red transition-colors duration-300">
                <Calendar className="w-8 h-8 mb-2 opacity-80" />
                <span className="font-oswald font-bold text-xl text-center leading-tight">
                  {event.date.split(' ')[0]}<br/>
                  {event.date.split(' ')[1]}
                </span>
                <span className="text-sm opacity-80 mt-1">{event.date.split(' ')[2]}</span>
              </div>
              
              {/* Content */}
              <div className="p-6 md:p-8 flex-grow flex flex-col justify-center">
                <h3 className="text-2xl font-oswald font-bold text-brand-navy mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.desc}</p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500 font-medium">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1.5 text-brand-red" />
                    {event.time}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1.5 text-brand-red" />
                    {event.location}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="p-6 md:p-8 bg-gray-100/50 flex items-center justify-center border-t md:border-t-0 md:border-l border-gray-200">
                <button className="text-brand-navy font-bold uppercase tracking-wider text-sm border-2 border-brand-navy px-6 py-2 hover:bg-brand-navy hover:text-white transition-colors duration-200 whitespace-nowrap">
                  Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
