import React, { useState } from 'react';
import { Outlet } from "react-router-dom";
import { Logo } from "../../components/icons";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { Link } from "react-router-dom";
import axios from 'axios';
/* import { GoogleLogin } from 'react-google-login'; */

/* const responseGoogle = (response) => {
    if (response && response.accessToken) {
        // L'utilisateur est connecté avec succès, vous pouvez utiliser response.accessToken pour effectuer des opérations supplémentaires, comme authentifier l'utilisateur sur votre backend
        console.log("Connexion réussie :", response);
    } else {
        // La connexion a échoué
        console.error("La connexion a échoué :", response);
    }
}

function GoogleLoginButton() {
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
} */

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
                {showPassword ? <BsEye style={{color: '#104547', fontSize: '25px'}} /> : <BsEyeSlash style={{color: '#104547', fontSize: '25px'}} />}
            </div>
        </div>
    );
}

export default function LoginPage() {
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
        <>
            <section className="login__section">
                <div className="container-fluid mx-auto mx-md-0 h-100">
                    <div className="row h-100">
                        <div className="login__section_col1 col-6 d-none d-md-block">
                        </div>

                        <div className="col-12 col-md-6 py-0 text-center text-md-start">

                            <div className="row h-100 justify-content-center align-items-center">
                                <div className="col-8 p-0 p-md-auto">

                                    <Logo className="login__section_logo" />
                                    <p className="login__section_col2_para fs-5 fs-sm-3 my-0">Le réseau social <b>favoris de Molière</b></p>

                                    {/* <GoogleLoginButton /> */}

                                    <div className="text-start">

                                        <ul className="px-0">
                                            <li className="mt-5">
                                                <label for="formGroupExampleInput" class="form-label">Adresse e-mail ou numéro de tél</label>
                                                <input type="text" class="form-control" id="formGroupExampleInput" value={userMail} onChange={handleInputMail} placeholder="moliereftw@mailing.com"></input>
                                            </li>
                                            <li className="mt-3">
                                                <label for="formGroupExampleInput" class="form-label">Mot de passe</label>
                                                <PasswordField value={userPassword} change={handleInputPassword} />
                                            </li>

                                            <li>
                                                <p className='text-danger'>{ErrorLogin}</p>
                                                <button class="btn btn-lg btn-primary w-100 mt-4" type="submit" onClick={handlerDataLogin}>
                                                    <span id='loader' class="spinner-border spinner-border-sm me-3 visually-hidden" aria-hidden="true"></span>
                                                    <span class="status" role="status">Se Connecter</span>
                                                </button>
                                            </li>
                                        </ul>

                                        <div className="text-center mt-2 mb-4">
                                            <Link href="#">Mot de passe oublié ?</Link>
                                        </div>
                                        <Link className="btn btn-lg btn-outline-primary w-100 mt-3" to="/register">Créer un compte</Link>

                                        <div className="d-none d-md-block mt-4">
                                            <p className="mb-1 fw-bold">Juste de passage ?</p>
                                            <Link className="btn btn-dark w-100 py-3" to="/">Continuer en mode invité</Link>
                                            <p className='fst-italic fw-light'>Fonctionnalités limitées</p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <Link className='login__section_btn btn btn-dark w-100 py-3 d-block d-md-none' to="/" >Continuer en mode invité</Link>

                <Outlet />
            </section>
        </>
    );
}