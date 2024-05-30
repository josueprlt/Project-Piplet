import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { Tooltip } from "bootstrap";
import logo from '../../../public/LoginPage/logo-piplet.svg';
import avatarMoliere from '../../../public/LoginPage/avatar-moliere.png';
import bulle from '../../../public/LoginPage/bulle.svg';
import casquette from '../../../public/LoginPage/casquette.png';
import crown from '../../../public/LoginPage/crown.png';
import glasses from '../../../public/LoginPage/glasses.png';
import moliereStylish from '../../../public/LoginPage/moliere-stylish.png';
import mustache from '../../../public/LoginPage/mustache.png';
import starGlasses from '../../../public/LoginPage/star-glasses.png';
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { Link } from "react-router-dom";
import axios from 'axios';
import { motion } from "framer-motion";
import { BsArrowLeft } from "react-icons/bs";


function PasswordField({ value, change }) {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  return (
    <div className='position-relative'>
      <input
        type={showPassword ? 'text' : 'password'}
        label="Password"
        class="form-control"
        id="formGroupExampleInput"
        value={value}
        onChange={change}
      />
      <div className='div__svg' onClick={handleTogglePasswordVisibility}>
        {showPassword ? <BsEyeSlash style={{ color: '#104547', fontSize: '25px' }} /> : <BsEye style={{ color: '#104547', fontSize: '25px' }} />}
      </div>
    </div>
  );
}


export default function InscriptionSection() {
  const inscriptionSectionRef = useRef(null);
  const imgWrapperRef = useRef(null);
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
  }, []);

  const [token, setToken] = useState(localStorage.getItem('jwtToken'));

  const [userMail, setUserMail] = useState(null);
  const [userPassword, setUserPassword] = useState(null);
  const [ErrorLogin, setErrorLogin] = useState("");

  let user = {
    "email": userMail,
    "password": userPassword
  }

  const handleInputMail = (event) => {
    setUserMail(event.target.value);
  };

  const handleInputPassword = (event) => {
    setUserPassword(event.target.value);
  };

  async function handlerDataLogin() {
    let idLoader = document.querySelector("#loader");

    try {
      if (user.email === null || user.password === null) {
        setErrorLogin("Veuillez remplir les deux champs.");
        return;
      }

      idLoader.classList.remove('visually-hidden');

      setErrorLogin("");

      const response = await axios.post('http://localhost:8000/api/login_check', user);

      if (response.statusText === "OK") {
        idLoader.classList.add('visually-hidden');
        const token = response.data.token;
        localStorage.setItem('jwtToken', token);
        window.location.href = "/";
      }
    } catch (error) {
      setErrorLogin("L'adresse e-mail ou le mot de passe que vous avez fourni est incorrect.");
      idLoader.classList.add('visually-hidden');
    }
  }

  return (
    <section className="pt-sm-0 pt-lg-4" id="inscription-section" ref={inscriptionSectionRef}>
      <div className="container-lg">
        <div id="inscription-section-div" className="row flex-column-reverse flex-lg-row justify-content-lg-between align-items-lg-center justify-content-xl-around">

          <motion.div layoutId="test" className="col-12 col-lg-6 col-xl-5 bg-white p-lg-5" id="inscription-form">
            <div className="logo-wrapper text-center">
              <ul className="px-0">
                <li className="text-start">
                  <Link to='/login'><BsArrowLeft style={{ fontSize: '2rem' }} /></Link>
                </li>
                <li className="">
                  <img src="./public/LoginPage/logo-piplet.svg" alt="Logo Svg" />
                </li>
                {token && (
                  <li className="mt-3">
                    <p className="fst-italic text-danger">Vous êtes déjà connecté !</p>
                  </li>
                )}
                <li className="mt-2">
                  <label for="formGroupExampleInput" class="form-label">Adresse e-mail</label>
                  <input type="text" class="form-control" id="formGroupExampleInput" value={userMail} onChange={handleInputMail} placeholder="moliereftw@mailing.com"></input>
                </li>
                <li className="mt-3">
                  <label for="formGroupExampleInput" class="form-label">Mot de passe</label>
                  <PasswordField value={userPassword} change={handleInputPassword} />
                </li>

                <li>
                  <p className='text-danger'>{ErrorLogin}</p>
                  <button class="btn btn-lg btn-primary w-100 mt-4" type="submit" onClick={handlerDataLogin}>
                    <div id="loader" class="spinner-border me-3 visually-hidden" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                    <span class="status" role="status">Se Connecter</span>
                  </button>
                </li>
              </ul>

              <div className="text-center mt-2">
                <Link href="#">Mot de passe oublié ?</Link>
              </div>
            </div>
          </motion.div>

          <div className="col-12 col-lg-5 d-flex justify-content-center d-lg-block">
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
          </div>
        </div>
      </div>
    </section>
  );
}
