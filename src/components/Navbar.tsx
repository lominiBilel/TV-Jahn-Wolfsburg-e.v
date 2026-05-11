import { useState, useEffect } from 'react';
import { Menu, X, Shield } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Startseite', href: '#start' },
    { name: 'Sportangebote', href: '#sportangebote' },
    { name: 'Mitglied werden', href: '#mitglied' },
    { name: 'Termine', href: '#termine' },
    { name: 'Über uns', href: '#ueber-uns' },
    { name: 'Kontakt', href: '#kontakt' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-brand-navy shadow-lg py-2' : 'bg-brand-navy/90 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#start" className="flex items-center gap-2 text-white group">
            <Shield className="w-8 h-8 text-brand-red transition-transform group-hover:scale-110" />
            <span className="font-oswald text-2xl font-bold tracking-wider">
              TV JAHN
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-brand-red transition-colors font-medium text-sm lg:text-base"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#mitglied"
              className="bg-brand-red text-white px-5 py-2 font-oswald tracking-wide font-medium hover:bg-red-700 hover:scale-105 transition-all duration-200"
            >
              Jetzt Mitglied werden
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-brand-red transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menü umschalten"
          >
            {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-navy border-t border-blue-900 shadow-xl">
          <nav className="flex flex-col py-4 px-4 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white text-lg font-medium p-2 hover:bg-blue-900 rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#mitglied"
              className="mt-2 bg-brand-red text-white text-center py-3 font-oswald tracking-wide text-lg font-medium hover:bg-red-700 active:scale-95 transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              Jetzt Mitglied werden
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
