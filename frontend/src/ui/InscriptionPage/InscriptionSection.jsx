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
import { useUserContext } from '../UserContext';


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
        className="form-control"
        id="formGroupExampleInput"
        value={value}
        onChange={change}
      />
      <div className='div__svg' onClick={handleTogglePasswordVisibility}>
        {showPassword ? <BsEye style={{ color: '#104547', fontSize: '25px' }} /> : <BsEyeSlash style={{ color: '#104547', fontSize: '25px' }} />}
      </div>
    </div>
  );
}


function FormCheckbox({ userCheckPolitique, setUserCheckPolitique, userCheckLetter, setUserCheckLetter }) {

  const handleCheckPolitique = (event) => {
    setUserCheckPolitique(event.target.checked);
  };

  const handleCheckNewsletter = (event) => {
    setUserCheckLetter(event.target.checked);
  };

  return (
    <>
      <div className='d-flex align-items-start flex-row-reverse gap-2'>
        <label className='fw-normal' htmlFor="check_reglement" id='label_check_reglement'>
          J’ai lu et j’accepte la <Link className='text-primary text-underline text-underline-primary fst-italic'>politique de confidentialité</Link> et les <Link className='text-primary text-underline text-underline-primary fst-italic'>conditions générales d’utilisation</Link>.
        </label>
        <input type="checkbox" name="checkbox_reglement" id="check_reglement" checked={userCheckPolitique} onChange={handleCheckPolitique} />
      </div>

      <div className='d-flex align-items-start flex-row-reverse gap-2 pt-4'>
        <label htmlFor="check_newsletter" id='label_check_newsletter'>
          J’accepte que Piplet me tienne informé des dernières nouveautés et offres promotionnelles (environ une fois par mois, nous ne spammons pas)
        </label>
        <input type="checkbox" name="checkbox_reglement" id="check_newsletter" checked={userCheckLetter} onChange={handleCheckNewsletter} />
      </div>
    </>
  );
}


const InscriptionSection = ({ userMail, setUserMail, userPassword, setUserPassword, userPasswordConfirm, setUserPasswordConfirm, userCheckPolitique, setUserCheckPolitique, userCheckLetter, setUserCheckLetter, strength, handleConfirmFirstRegister }) => {

  const handleInputMail = (event) => {
    setUserMail(event.target.value);
  };

  const handleInputPassword = (event) => {
    setUserPassword(event.target.value);
  };

  const handleInputPasswordConfirm = (event) => {
    setUserPasswordConfirm(event.target.value);
  };

  return (
    <div className="row logo-wrapper align-items-center">
      <div className="col-2">
        <Link to='/login'><BsArrowLeft style={{ fontSize: '2rem' }} /></Link>
      </div>
      <div className="col-10 d-flex align-items-center">
        <h2 className="fs-5 ps-2 text-uppercase m-0">Inscription</h2>
      </div>
      <div className="mt-3">
        <label htmlFor="formGroupExampleInput" className="form-label">Adresse e-mail</label>
        <input type="text" className="form-control" id="formGroupExampleInput" value={userMail} onChange={handleInputMail} placeholder="moliereftw@mailing.com" />
      </div>
      <div className="mt-3">
        <label htmlFor="formGroupExampleInput" className="form-label">Choisir un mot de passe</label>
        <PasswordField value={userPassword} change={handleInputPassword} />
        <div className='d-flex mt-1 flex-nowrap gap-1'>
          {strength === 1 &&
            <div className="w-100 text-center border-top border-5 border-danger">
              <p className='fst-italic text text-danger-emphasis m-0'>Facile</p>
            </div>
          }
          {strength === 2 &&
            <div className="w-100 text-center border-top border-5 border-warning">
              <p className='fst-italic text-warning-emphasis m-0'>Moyen</p>
            </div>
          }
          {strength === 3 &&
            <div className="w-100 text-center border-top border-5 border-success">
              <p className='fst-italic text-success-emphasis m-0'>Fort</p>
            </div>
          }
        </div>
      </div>
      <div className="mt-3">
        <label htmlFor="formGroupExampleInput" className="form-label">Confirmer le mot de passe</label>
        <PasswordField value={userPasswordConfirm} change={handleInputPasswordConfirm} />
      </div>
      <div className="text-center mt-2">
        <FormCheckbox userCheckPolitique={userCheckPolitique} setUserCheckPolitique={setUserCheckPolitique} userCheckLetter={userCheckLetter} setUserCheckLetter={setUserCheckLetter} />
      </div>
      <div>
        <button class="btn btn-lg btn-primary w-100 mt-3 px-2" onClick={handleConfirmFirstRegister}>
          <span id='loader' class="spinner-border spinner-border-sm me-3 visually-hidden" aria-hidden="true"></span>
          <span class="status" role="status">Créer mon compte {userCheckPolitique ? "😎" : ""}</span>
        </button>
      </div>
    </div>
  );
}


export default function InscriptionSectionFinal() {
  const [userMail, setUserMail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userPasswordConfirm, setUserPasswordConfirm] = useState("");
  const [strength, setStrength] = useState(0);
  const [ErrorRegister, setErrorRegister] = useState("");
  const [userCheckPolitique, setUserCheckPolitique] = useState(false);
  const [userCheckLetter, setUserCheckLetter] = useState(false);
  const { user, setUser } = useUserContext();

  useEffect(() => {
    let newUser = {
      mail: userMail,
      password: userPassword,
      password_confirm: userPasswordConfirm,
      reglement: userCheckPolitique,
      newsletter: userCheckLetter
    };
    setUser(newUser);
  }, [userMail, userPassword, userPasswordConfirm, userCheckPolitique, userCheckLetter, setUser]);

  const handleConfirmFirstRegister = async () => {
    let idLoader = document.querySelector("#loader");

    if (userMail === "" || userPassword === "" || userPasswordConfirm === "") {
      setErrorRegister("Veuillez remplir tous les champs.");
    } else {
      if (userPassword !== userPasswordConfirm) {
        setErrorRegister("La confirmation du mot de passe est incorrecte.");
      } else {
        if (!userCheckPolitique) {
          setErrorRegister("Veuillez accepter la politique de confidentialité de Piplet.");
        } else {
          try {
            idLoader.classList.remove('visually-hidden');
            await handlerSameMailOrNot();
            setErrorRegister("");
            setStepRegister(1);
          } catch (error) {
            idLoader.classList.add('visually-hidden');
            console.error(error);
            setStepRegister(0);
          }
        }
      }
    }
  };

  const propsUser = {
    setUserMail,
    setUserPassword,
    setUserPasswordConfirm,
    setUserCheckPolitique,
    setUserCheckLetter,
    setStrength,
    userMail,
    userPassword,
    userPasswordConfirm,
    userCheckPolitique,
    userCheckLetter,
    ErrorRegister,
    strength,
    handleConfirmFirstRegister
  };

  async function handlerSendMail() {
    try {
      const response = await axios.post('http://localhost:8000/api/confirmemail', user);
      console.log(response);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async function handlerSameMailOrNot() {
    try {
      const response = await axios.post('http://localhost:8000/api/sameemail', { email: user.mail });
      console.log(response);
      if (response.data.message.includes("Cet e-mail est disponible.")) {
        await handlerSendMail();
      }
    } catch (error) {
      setErrorRegister(
        <span>
          L'adresse e-mail que vous avez renseignée est déjà utilisée.
          <Link to='/login'>Se Connecter</Link>
        </span>
      );
      throw error;
    }
  }


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

  return (
    <section className="pt-sm-0 pt-lg-3" id="inscription-section">
      <div className="container-lg">
        <div id="inscription-section-div" className="row flex-column-reverse flex-lg-row justify-content-lg-between align-items-lg-center justify-content-xl-around">
          <motion.div layoutId="test" className="col-12 col-lg-6 col-xl-5 bg-white p-lg-5" id="inscription-form">
            <InscriptionSection {...propsUser} />
          </motion.div>
          <div className="col-12 col-lg-5 d-flex justify-content-center d-lg-block">
            <img src={moliereStylish} alt="Molière pimped" id="mobile-avatar" className="d-lg-none img-fluid mt-4 text-center" />
            <div className="avatar-wrapper d-none d-lg-block">
              <div className="avatar-trip-wrapper me-auto" id="img-wrapper" ref={imgWrapperRef}>
                <img className="img-trip" id="casquette" src={casquette} alt="casquette" />
                <img className="img-trip" id="glasses" src={glasses} alt="lunettes" ref={glassesRef}/>
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