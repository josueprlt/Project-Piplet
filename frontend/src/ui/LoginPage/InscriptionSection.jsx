import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { Tooltip } from "bootstrap";
import logo from '../../../public/LoginPage/logo_vf.svg';
import avatarMoliere from '../../../public/LoginPage/avatar-moliere.png';
import bulle from '../../../public/LoginPage/bulle.svg';
import casquette from '../../../public/LoginPage/casquette.png';
import crown from '../../../public/LoginPage/crown.png';
import glasses from '../../../public/LoginPage/glasses.png';
import moliereStylish from '../../../public/LoginPage/moliere-stylish.png';
import mustache from '../../../public/LoginPage/mustache.png';
import starGlasses from '../../../public/LoginPage/star-glasses.png';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function InscriptionSection() {
  const inscriptionSectionRef = useRef(null);
  const imgWrapperRef = useRef(null);
  const btnInscRef = useRef(null);
  const btnLogInRef = useRef(null);
  const btnVisitRef = useRef(null);
  const glassesRef = useRef(null);

  useEffect(() => {
    // Avatar cursor tracker
    const slowDownFactor = 0.0111;
    const updatePosition = (event) => {
      const x = event.clientX;
      const y = event.clientY;
      const containerX = x * slowDownFactor;
      const containerY = y * slowDownFactor;
      gsap.to(imgWrapperRef.current, { x: containerX, y: containerY, duration: 0.1 });
    };
    document.addEventListener('mousemove', updatePosition);

    // Animate background position
    const animateBackgroundPositionY = () => {
      gsap.to(inscriptionSectionRef.current, {
        backgroundPositionY: 'bottom',
        duration: 0.25,
        ease: 'power2.out',
      });
    };
    animateBackgroundPositionY();

    // GSAP Timelines
    const tl4 = gsap.timeline({ defaults: { duration: 1 } }).pause();
    const tl5 = gsap.timeline({ defaults: { duration: 1 } }).pause();
    const tl3 = gsap.timeline({ defaults: { duration: 1 } }).pause();
    const tl2 = gsap.timeline({ defaults: { duration: 1 } }).pause();

    tl4.to("#star-glasses", { y: 88, opacity: 1, visibility: "visible", duration: 0.25 });
    tl4.to("#crown", { opacity: 1, visibility: "visible", y: 0, rotationZ: 0, duration: 0.35 });
    tl4.to("#star-glasses", { scale: 1.13, duration: 0.25 }, "-=0.35");

    tl5.to("#bulle", { opacity: 1, visibility: "visible", x: 0, duration: 1.45 });

    tl3.to("#glasses", { rotationZ: "-35deg", transformOrigin: "left top", duration: 1 });

    tl2.to('#casquette', { y: '-200', rotationZ: '-200', autoAlpha: 0, duration: 0.18, ease: "flip.easeOut" });
    tl2.to('#glasses', { x: '111', autoAlpha: 0, duration: 0.15, ease: "Power4.easeOut" });
    tl2.to('#mustache', { x: '-108', SlideZ: '32', autoAlpha: 0, duration: 0.25 });

    // Event Listeners
    const handleMouseOverInsc = () => { tl2.play(); tl4.play(); };
    const handleMouseOutInsc = () => { tl2.reverse(); tl4.reverse("-=0.45"); };
    const handleMouseOverLogIn = () => { tl2.play(); tl5.play(); };
    const handleMouseOutLogIn = () => { tl2.reverse(); tl5.reverse("-=1.25"); };
    const handleMouseOverVisit = () => { tl3.play(); glassesRef.current.style.animation = "none"; };
    const handleMouseOutVisit = () => { tl3.reverse("-=0.45"); glassesRef.current.style.animation = "glassesMove"; };

    const btnInsc = btnInscRef.current;
    const btnLogIn = btnLogInRef.current;
    const btnVisit = btnVisitRef.current;

    btnInsc.addEventListener("mouseover", handleMouseOverInsc);
    btnInsc.addEventListener("mouseout", handleMouseOutInsc);
    btnLogIn.addEventListener("mouseover", handleMouseOverLogIn);
    btnLogIn.addEventListener("mouseout", handleMouseOutLogIn);
    btnVisit.addEventListener("mouseover", handleMouseOverVisit);
    btnVisit.addEventListener("mouseout", handleMouseOutVisit);

    // Activate Bootstrap tooltips
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipTriggerList.forEach(tooltipTriggerEl => new Tooltip(tooltipTriggerEl));

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      btnInsc.removeEventListener("mouseover", handleMouseOverInsc);
      btnInsc.removeEventListener("mouseout", handleMouseOutInsc);
      btnLogIn.removeEventListener("mouseover", handleMouseOverLogIn);
      btnLogIn.removeEventListener("mouseout", handleMouseOutLogIn);
      btnVisit.removeEventListener("mouseover", handleMouseOverVisit);
      btnVisit.removeEventListener("mouseout", handleMouseOutVisit);
    };
  }, []);

  return (
    <motion.section className="pt-sm-0 pt-lg-4" id="inscription-section" ref={inscriptionSectionRef}>
      <div className="container-lg">
        <div id="inscription-section-div" className="row flex-column-reverse flex-lg-row justify-content-lg-between align-items-lg-center justify-content-xl-around">

          <motion.div layoutId="test" className="col-12 col-lg-6 col-xl-5 bg-white p-lg-5" id="inscription-form">
            <div className="logo-wrapper text-center">
              <img id="logo" src={logo} alt="Logo Piplet" className="ps-4 ps-lg-3 img-fluid" />
              <p id="slogan" className="fs-5 fs-sm-3 mt-2 pt-2"><a id="slogan-link" href="#"
                data-bs-placement="bottom" data-bs-toggle="tooltip" data-bs-title="Another tooltip"
                data-bs-custom-class="custom-tooltip" data-bs-template="<div className='tooltip' role='tooltip'><div id='home-tooltip-list'>
                                    <ul>
                                        <li>
                                            Rejoins une grande <strong>communauté de passionnés</strong> de langue française. 
                                        </li>
                                        <li>
                                            <strong>Participe et encourage</strong> le talent des créateurs de lettre d’aujourd’hui et de demain. 
                                        </li>
                                        <li>
                                            <strong>Gagne des récompenses</strong> et fais toi connaître si tu le souhaite. 
                                        </li>
                                        <li>
                                            Si ton talent est reconnu, <strong>gagne le droit d’être édité</strong> au format print et <strong>illustré</strong>. 
                                        </li>
                                        <li>
                                            <strong>Personnalise</strong> ton univers, <strong>démarque</strong> toi. 
                                        </li>
                                        <li>
                                            Ton <strong>droit d’auteur</strong> est <strong>protégé</strong>, grâce à notre technologie innovante et vérifiée.
                                        </li>
                                        </ul>
                                        </div></div>" className="fst-italic">Le réseau social<span className="fw-bold ps-1"> favoris de
                  Molière</span>
              </a>
              </p>
              <Link id="insc-btn" to="/register2" className="mt-4 btn btn-primary btn-lg" ref={btnInscRef}>Inscription</Link>
              <small className="d-block fst-italic pt-1">C'est rapide et gratuit</small>
              <Link id="login-btn" to="/login2" className="mt-3 btn btn-outline-primary btn-lg" ref={btnLogInRef}>Connexion</Link>
              <small className="d-block fst-italic pt-1">Reprend où tu en étais <span className="fst-normal fs-6">😎</span> </small>
              <Link id="visit-btn" to="/" className="mt-5 btn btn-dark" ref={btnVisitRef}>Continuer en Mode Invité</Link>
              <small className="d-block fst-italic pt-1 pb-5 pb-md-0">(Fonctionnalités limitées)</small>
            </div>
          </motion.div>

          <motion.div className="col-12 col-lg-5 d-flex justify-content-center align-items-center d-lg-block" initial={{ opacity: 0, x: 500 }} animate={{ opacity: 1, x: 0 }} transition={{ ease: [.12, .54, .31, 1.2], duration: .75 }}>
            <img src={moliereStylish} alt="Molière pimped" id="mobile-avatar" className="d-lg-none img-fluid mt-4 text-center" />
            <div className="avatar-wrapper d-none d-lg-block">
              <div className="avatar-trip-wrapper me-auto" id="img-wrapper" ref={imgWrapperRef}>
                <img className="img-trip" id="casquette" src={casquette} alt="casquette" />
                <img className="img-trip" id="glasses" src={glasses} alt="lunettes" ref={glassesRef} />
                <img className="img-trip" id="mustache" src={mustache} alt="moustache" />
                <img className="img-trip" id="avatar" src={avatarMoliere} alt="Molière" />
                <img id="star-glasses" src={starGlasses} alt="Lunettes de star" className="img-trip" />
                <img src={crown} alt="Couronne" className="img-trip" id="crown" />
                <img src={bulle} alt="Bulle" id="bulle" className="img-trip" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
