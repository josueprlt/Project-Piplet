import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function AboutSection({ aboutSectionRef, isOpen, toggleAbout }) {
  const clipPathRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.to(clipPathRef.current, { scale: 1, duration: 1.25 });
    } else {
      gsap.to(clipPathRef.current, { scale: 0.007, duration: 1 });
    }
  }, [isOpen]);

  return (
    <section id="about-section" ref={aboutSectionRef}>
      <svg id="bg-about">
        <defs>
          <clipPath id="clipPath" ref={clipPathRef}>
            <circle className="one" cx="300" cy="300" r="369000" transform="scale(0.007)" />
          </clipPath>
        </defs>
      </svg>
      <div id="wrapper">
        <div className="container px-5">
          <button id="back-btn" onClick={toggleAbout}><i className="bi-arrow-left"></i></button>
          <div className="row pt-5 pt-lg-4 pt-xxl-3 content-about justify-content-center">
            <div className="col-12 col-md-8 col-lg-6">
              <h1 className="text-uppercase fw-bold mb-4 mb-md-5">👋 Bienvenue</h1>
              <p>Ce projet est en version “Bêta”, c’est à dire qu’il est amené à évoluer suivant son succès.</p>
              <p>Certaines fonctionnalités prévues dans la version finale ne sont pas encore implémentées.</p>
              <p>Revenez plus tard pour profiter de la plateforme complète et découvrir tout un tas de surprises que l’on vous réserve !</p>
              <p>Cependant, vous pouvez dès à présent découvrir Piplet en vous inscrivant, ou en naviguant en mode invité.</p>
              <strong className="d-inline-flex pt-3">Amusez-vous bien !</strong>
              <footer className="mt-4 blockquote-footer text-light d-flex justify-content-end">
                <cite>L'équipe Piplet</cite>
              </footer>
              <div className="row mt-5">
                <div className="col-12 text-end cta-desktop">
                  <button className="btn btn-secondary close-about" onClick={toggleAbout}>Fermer</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
