import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user already accepted
    const accepted = localStorage.getItem('tvjahn_cookie_consent');
    if (!accepted) {
      // Small delay to allow page rendering before showing banner
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('tvjahn_cookie_consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-900 border-t border-gray-800 text-white p-4 sm:p-6 z-[100] shadow-[0_-10px_40px_rgba(0,0,0,0.3)] animate-[slideUp_0.5s_ease-out]">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <h4 className="font-oswald font-bold text-lg mb-1">Wir verwenden Cookies</h4>
          <p className="text-gray-400 text-sm">
            Um unsere Webseite für dich optimal zu gestalten und fortlaufend verbessern zu können, verwenden wir Cookies. Weitere Informationen erhältst du in unserer <a href="#" className="text-brand-red hover:underline">Datenschutzerklärung</a>.
          </p>
        </div>
        <div className="flex gap-4 w-full sm:w-auto">
          <button 
            onClick={handleAccept}
            className="flex-1 sm:flex-none border border-gray-600 hover:bg-gray-800 px-6 py-2 text-sm font-bold uppercase tracking-wider transition-colors"
          >
            Ablehnen
          </button>
          <button 
            onClick={handleAccept}
            className="flex-1 sm:flex-none bg-brand-red hover:bg-red-700 px-6 py-2 text-sm font-bold uppercase tracking-wider transition-colors shadow-md"
          >
            Verstanden
          </button>
        </div>
      </div>
    </div>
  );
}
