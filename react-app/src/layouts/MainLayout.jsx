import { useState } from 'react';
import Masthead from '../components/Masthead/Masthead';
import SlideMenu from '../components/SlideMenu/SlideMenu';
import Newsletter from '../components/Newsletter/Newsletter';
import Footer from '../components/Footer/Footer';

export default function MainLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Masthead onMenuOpen={() => setMenuOpen(true)} />
      <SlideMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <main>{children}</main>
      <Newsletter />
      <Footer />
    </>
  );
}
