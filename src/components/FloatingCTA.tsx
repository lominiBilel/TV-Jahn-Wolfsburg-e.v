import { useState, useEffect } from 'react';
import { ArrowUp, UserPlus } from 'lucide-react';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero section (approx 500px)
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div 
      className={`fixed bottom-6 right-6 z-50 flex flex-col gap-3 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
    >
      {/* Scroll to top button */}
      <button 
        onClick={scrollToTop}
        className="w-12 h-12 bg-white text-brand-navy rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:scale-110 transition-all self-end"
        aria-label="Nach oben scrollen"
      >
        <ArrowUp className="w-6 h-6" />
      </button>

      {/* Floating CTA Button */}
      <a 
        href="#mitglied"
        className="bg-brand-red text-white px-6 py-3 rounded-full shadow-xl shadow-red-900/30 flex items-center gap-2 hover:bg-red-700 hover:scale-105 transition-all group font-oswald uppercase tracking-wider font-bold"
      >
        <UserPlus className="w-5 h-5 group-hover:rotate-12 transition-transform" />
        <span className="hidden sm:inline">Mitglied werden</span>
      </a>
    </div>
  );
}
