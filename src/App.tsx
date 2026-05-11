/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sportangebote from './components/Sportangebote';
import MitgliedWerden from './components/MitgliedWerden';
import Termine from './components/Termine';
import UeberUns from './components/UeberUns';
import Testimonials from './components/Testimonials';
import Kontakt from './components/Kontakt';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import FloatingCTA from './components/FloatingCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Sportangebote />
        <MitgliedWerden />
        <Termine />
        <UeberUns />
        <Testimonials />
        <Kontakt />
      </main>
      <Footer />
      <CookieBanner />
      <FloatingCTA />
    </div>
  );
}
