import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';

function Counter({ end, suffix = '' }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const duration = 2000; // 2 seconds

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing out function
      const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < duration) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [end]);

  return (
    <span className="font-oswald text-4xl md:text-5xl font-bold text-white">
      {count.toLocaleString('de-DE')}{suffix}
    </span>
  );
}

export default function Hero() {
  return (
    <section id="start" className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-brand-navy pt-20">
      {/* Background Gradient & Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-[#002244] to-black opacity-90"></div>
      
      {/* Abstract Grid / Silhouette Placeholder */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent bg-[length:20px_20px]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center h-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight uppercase shadow-sm">
            <span className="block text-brand-red">Dein Sport.</span> 
            Deine Gemeinschaft.<br /> 
            Dein Verein.
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto font-light">
            TV Jahn Wolfsburg e.V. &mdash; Seit 1889 verbindet uns die Freude an Bewegung, Sport und Gemeinschaft.
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <a
            href="#mitglied"
            className="w-full sm:w-auto bg-brand-red text-white px-8 py-4 font-oswald text-xl tracking-wider hover:bg-red-700 hover:scale-105 transition-all duration-200 shadow-lg shadow-red-900/50"
          >
            Jetzt Mitglied werden &rarr;
          </a>
          <a
            href="#sportangebote"
            className="w-full sm:w-auto border-2 border-white text-white px-8 py-4 font-oswald text-xl tracking-wider hover:bg-white hover:text-brand-navy hover:scale-105 transition-all duration-200"
          >
            Unser Sportangebot entdecken
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className="flex flex-col items-center">
            <Counter end={2000} suffix="+" />
            <span className="text-gray-300 uppercase tracking-widest text-sm mt-2 font-medium">Mitglieder</span>
          </div>
          <div className="flex flex-col items-center">
            <Counter end={20} suffix="+" />
            <span className="text-gray-300 uppercase tracking-widest text-sm mt-2 font-medium">Sportarten</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-oswald text-4xl md:text-5xl font-bold text-white">1889</span>
            <span className="text-gray-300 uppercase tracking-widest text-sm mt-2 font-medium">Gegründet</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white opacity-70"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        <a href="#sportangebote" aria-label="Nach unten scrollen">
          <ChevronDown className="w-10 h-10" />
        </a>
      </motion.div>
    </section>
  );
}
