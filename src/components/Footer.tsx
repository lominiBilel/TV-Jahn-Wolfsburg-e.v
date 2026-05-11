import { Facebook, Instagram, Youtube, Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white pt-16 pb-8 border-t-4 border-brand-red">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <a href="#start" className="flex items-center gap-2 text-white mb-6">
              <Shield className="w-8 h-8 text-brand-red" />
              <span className="font-oswald text-2xl font-bold tracking-wider">
                TV JAHN
              </span>
            </a>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Dein Sportverein in Wolfsburg seit 1889. Wir verbinden Menschen durch die Leidenschaft für Bewegung, Leistung und Gemeinschaft.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-red hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-red hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-red hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Col 1 */}
          <div>
            <h4 className="font-oswald font-bold text-lg mb-6 uppercase tracking-wider">Verein</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#ueber-uns" className="hover:text-white transition-colors">Über uns</a></li>
              <li><a href="#start" className="hover:text-white transition-colors">Vorstand</a></li>
              <li><a href="#start" className="hover:text-white transition-colors">Satzung</a></li>
              <li><a href="#start" className="hover:text-white transition-colors">Downloads</a></li>
              <li><a href="#kontakt" className="hover:text-white transition-colors">Kontakt</a></li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h4 className="font-oswald font-bold text-lg mb-6 uppercase tracking-wider">Sport & Mitgliedschaft</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#sportangebote" className="hover:text-white transition-colors">A-Z Sportangebote</a></li>
              <li><a href="#termine" className="hover:text-white transition-colors">Trainingszeiten</a></li>
              <li><a href="#mitglied" className="hover:text-white transition-colors">Mitglied werden</a></li>
              <li><a href="#mitglied" className="hover:text-white transition-colors">Beiträge</a></li>
              <li><a href="#start" className="hover:text-white transition-colors">Probetraining</a></li>
            </ul>
          </div>

          {/* Newsletter Col */}
          <div>
            <h4 className="font-oswald font-bold text-lg mb-6 uppercase tracking-wider">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Bleibe immer auf dem Laufenden über News und Events im Verein.</p>
            <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Deine E-Mail Adresse" 
                className="w-full bg-white/10 border border-white/20 px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-brand-red focus:bg-white/20 transition-all rounded-sm"
              />
              <button 
                type="submit" 
                className="w-full bg-brand-red hover:bg-red-700 text-white font-oswald uppercase tracking-wider py-2 font-bold transition-colors shadow-none rounded-sm"
              >
                Anmelden
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>&copy; {new Date().getFullYear()} TV Jahn Wolfsburg e.V. Alle Rechte vorbehalten.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Impressum</a>
            <a href="#" className="hover:text-white transition-colors">Datenschutz</a>
            <a href="#" className="hover:text-white transition-colors">Cookie-Richtlinie</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
