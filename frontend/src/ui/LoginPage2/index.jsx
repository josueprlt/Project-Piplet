import { useState, useRef, useEffect } from 'react';
import Loader from './Loader';
import Header from './Header';
import AboutSection from './AboutSection';
import InscriptionSection from './InscriptionSection';
import Footer from './Footer';
import gsap from 'gsap';

const App = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const openAboutBtnRef = useRef(null);
  const aboutSectionRef = useRef(null);

  const aboutTl = useRef(gsap.timeline({ paused: true }));

  useEffect(() => {
    aboutTl.current = gsap.timeline({ paused: true })
      .to(aboutSectionRef.current, { duration: 0.35, autoAlpha: 1, display: 'block' })
      .from(aboutSectionRef.current, { duration: 0.5, y: 0 });
  }, []);

  // const toggleAbout = () => {
  //   setIsAboutOpen((prev) => {
  //     const newState = !prev;
  //     if (newState) {
  //       openAboutBtnRef.current.classList.add("toggled");
  //       aboutTl.current.play();
  //     } else {
  //       openAboutBtnRef.current.classList.remove("toggled");
  //       aboutTl.current.reverse();
  //       console.log('test');
  //     }
  //     return newState;
  //   });
  // };

  const toggleAbout = () => {
    if(isAboutOpen){
      openAboutBtnRef.current.classList.remove("toggled");
        aboutTl.current.reverse();
        setIsAboutOpen(false)
      }else {
        openAboutBtnRef.current.classList.add("toggled");
        aboutTl.current.play();
        setIsAboutOpen(true)
    }
  }

  return (
    <>
      {/* <Loader /> */}
      <AboutSection isOpen={isAboutOpen} toggleAbout={toggleAbout} aboutSectionRef={aboutSectionRef} />
      <Header isAboutOpen={isAboutOpen} toggleAbout={toggleAbout} openAboutBtnRef={openAboutBtnRef} />
      <main>
        <InscriptionSection />
      </main>
      <Footer />
    </>
  );
};

export default App;
