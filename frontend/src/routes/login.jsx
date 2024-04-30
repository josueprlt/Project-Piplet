import React, { useState } from 'react';
import { Outlet } from "react-router-dom";
import { Logo, Eye, EyeSlash } from "../components/icons";
import { GoogleLogin } from 'react-google-login';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

const responseGoogle = (response) => {
  if (response && response.accessToken) {
    // L'utilisateur est connecté avec succès, vous pouvez utiliser response.accessToken pour effectuer des opérations supplémentaires, comme authentifier l'utilisateur sur votre backend
    console.log("Connexion réussie :", response);
  } else {
    // La connexion a échoué
    console.error("La connexion a échoué :", response);
  }
}

const GoogleLoginButton = () => {
  return (
    <GoogleLogin
      clientId="779471472643-8p67tqespgteble6pqql3g25t93qf0m6.apps.googleusercontent.com"
      buttonText="Se connecter avec Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
      className='w-100 d-flex mt-2'
    />
  );
}

function PasswordField() {
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
      />
      <div className='div__svg' onClick={handleTogglePasswordVisibility}>
        {showPassword ? <Eye /> : <EyeSlash />}
      </div>
    </div>
  );
}

export default function Root() {

  return (
    <>
      <section className="login__section">
        <div className="container-fluid mx-auto mx-md-0 h-100">
          <div className="row h-100">
            <div className="login__section_col1 col-6 d-none d-md-block">
              {/* <img className="img-fluid" src="../../public/piplet-moliere.jpg" alt="Image de Molière" /> */}
            </div>

            <div className="col-12 col-md-6 py-0 text-center text-md-start">

              <div className="row justify-content-center">
                <div className="col-8">

                  <Logo className="login__section_logo" />
                  <p className="login__section_col2_para my-0">Le réseau social <b>favoris de Molière</b></p>

                  {/* <GoogleLoginButton /> */}

                  <form className="text-start" action="" method="">

                    <ul className="px-0">
                      <li className="mt-5">
                        <label for="formGroupExampleInput" class="form-label">Adresse e-mail ou numéro de tél</label>
                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="moliereftw@mailing.com"></input>
                      </li>
                      <li className="mt-3">
                        <label for="formGroupExampleInput" class="form-label">Mot de passe</label>
                        <PasswordField />
                      </li>

                      <li>
                        <button className="btn btn-lg btn-primary w-100 mt-4" type="submit">Se Connecter</button>
                      </li>
                    </ul>

                    <div className="text-center mt-2 mb-4">
                      <a href="#">Mot de passe oublié ?</a>
                    </div>
                    <button className="btn btn-lg btn-outline-primary w-100 mt-3">Créer un compte</button>

                    <div className="d-none d-md-block mt-4">
                      <p className="mb-1 fw-bold">Juste de passage ?</p>
                      <button className="btn btn-dark w-100 py-3">Continuer en mode invité</button>
                      <p className='fst-italic fw-light'>Fonctionnalités limitées</p>
                    </div>
                  </form>

                </div>
              </div>

            </div>
          </div>
        </div>

        <button className="login__section_btn btn btn-dark w-100 py-3 d-block d-md-none">Continuer en mode invité</button>

        <Outlet />
      </section>
    </>
  );
}