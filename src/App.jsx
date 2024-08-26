import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import './App.css';
import PageOne from './pages/Main/PageOne';
import PageTwo from './pages/Main/PageTwo';
import PageThree from './pages/Main/PageThree';
import './index.css';
import Header from './components/Navbar';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Cek apakah layar lebih besar dari 768px (desktop)
    if (window.innerWidth > 768) {
      const panels = gsap.utils.toArray('.panel');

      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          end: () => "+=" + containerRef.current.offsetWidth,
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className='container' ref={containerRef}>
      <Header />
      <section className='panel'><PageOne /></section>
      <section className='panel'><PageTwo /></section>
      <section className='panel'><PageThree /></section>
    </div>
  );
}

export default App;
