import React, { useEffect, useState } from 'react';
import { Outlet } from "react-router-dom";
import { Logo, Eye, EyeSlash, CheckCircle } from "../../components/icons";
import { Link } from "react-router-dom";
import { useUserContext } from '../UserContext';
import axios from 'axios';

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
                {showPassword ? <Eye /> : <EyeSlash />}
            </div>
        </div>
    );
}

function FormRegistration({ ...propsUser }) {

    const handleInputMail = (event) => {
        propsUser.setUserMail(event.target.value);
    };

    const handleInputPassword = (event) => {
        let pwdData = event.target.value;
        propsUser.setUserPassword(pwdData);

        let pwdLenght = pwdData.length;


        if (pwdLenght > 0 && pwdLenght < 6) {
            propsUser.setStrength(1);
        } else if (pwdLenght >= 6 && pwdLenght < 12) {
            propsUser.setStrength(2);
        } else if (pwdLenght >= 12) {
            propsUser.setStrength(3);
        } else {
            propsUser.setStrength(0);
        }
    };

    const handleInputPasswordConfirm = (event) => {
        propsUser.setUserPasswordConfirm(event.target.value);
    };

    return (
        <ul className="px-0">
            <li className="">
                <label for="formGroupExampleInput" class="form-label">Adresse e-mail</label>
                <input type="text" class="form-control" id="formGroupExampleInput" value={propsUser.userMail} onChange={handleInputMail} placeholder="moliereftw@mailing.com"></input>
            </li>
            <li className="mt-3">
                <label for="formGroupExampleInput" class="form-label">Choisir un mot de passe</label>
                <PasswordField value={propsUser.userPassword} change={handleInputPassword} />

                <div className='d-flex mt-1 flex-nowrap gap-1'>

                    {propsUser.strength === 1 &&
                        <div className="w-100 text-center border-top border-5 border-danger">
                            <p className='fst-italic text text-danger-emphasis m-0'>Facile</p>
                        </div>
                    }
                    {propsUser.strength === 2 &&
                        <div className="w-100 text-center border-top border-5 border-warning">
                            <p className='fst-italic text-warning-emphasis m-0'>Moyen</p>
                        </div>
                    }
                    {propsUser.strength === 3 &&
                        <div className="w-100 text-center border-top border-5 border-success">
                            <p className='fst-italic text-success-emphasis m-0'>Fort</p>
                        </div>
                    }
                </div>
            </li>
            <li className="mt-3">
                <label for="formGroupExampleInput" class="form-label">Confirmer le mot de passe</label>
                <PasswordField value={propsUser.userPasswordConfirm} change={handleInputPasswordConfirm} />
            </li>

            <li>
                <p className='text-danger'>{propsUser.ErrorRegister}</p>
            </li>
        </ul>
    );
}

function FormCheckbox({ ...propsUser }) {

    const handleCheckPolitique = (event) => {
        propsUser.setUserCheckPolitique(event.target.checked);
    };

    const handleCheckNewsletter = (event) => {
        propsUser.setUserCheckLetter(event.target.checked);
    };

    return (
        <>
            <div className='d-flex align-items-start flex-row-reverse gap-2'>
                <label className='fw-normal' htmlFor="check_reglement" id='label_check_reglement'>J’ai lu et j’accepte la <Link className='text-primary text-underline text-underline-primary fst-italic'>politique de confidentialité</Link> et les <Link className='text-primary text-underline text-underline-primary fst-italic'>conditions générales d’utilisation</Link>.</label>
                <input type="checkbox" name="checkbox_reglement" id="check_reglement" checked={propsUser.userCheckPolitique} onChange={handleCheckPolitique} />
            </div>

            <div className='d-flex align-items-start flex-row-reverse gap-2 pt-4'>
                <label htmlFor="check_newsletter" id='label_check_newsletter'>J’accepte que Piplet me tienne informé des dernières nouveautés et offres promotionnelles (environ une fois par mois, nous ne spammons pas)</label>
                <input type="checkbox" name="checkbox_reglement" id="check_newsletter" checked={propsUser.userCheckLetter} onChange={handleCheckNewsletter} />
            </div>
        </>
    );
}

export default function RegisterPage() {
    const [userMail, setUserMail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userPasswordConfirm, setUserPasswordConfirm] = useState("");
    const [strength, setStrength] = useState(0);
    const [ErrorRegister, setErrorRegister] = useState("");
    const [userCheckPolitique, setUserCheckPolitique] = useState(false);
    const [userCheckLetter, setUserCheckLetter] = useState(false);
    const [stepRegister, setStepRegister] = useState(0);
    const { user, setUser } = useUserContext();

    useEffect(() => {
        let newUser = {
            "mail": userMail,
            "password": userPassword,
            "password_confirm": userPasswordConfirm,
            "reglement": userCheckPolitique,
            "newsletter": userCheckLetter
        };
        setUser(newUser);
    }, [userMail, userPassword, userPasswordConfirm, userCheckPolitique, userCheckLetter]);


    const handleConfirmFirstRegister = async () => {
        let idLoader = document.querySelector("#loader");

        if (userMail == "" || userPassword == "" || userPasswordConfirm == "") {
            setErrorRegister("Veuillez remplir tous les champs.");

        }
        else {

            if (!(userPassword == userPasswordConfirm)) {
                setErrorRegister("La confirmation du mot de passe est incorrecte.");
            }
            else {

                if (userCheckPolitique == false) {
                    setErrorRegister("Veuillez accepter la politique de confidentialité de Piplet.");
                }
                else {

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
        setUserMail: setUserMail,
        setUserPassword: setUserPassword,
        setUserPasswordConfirm: setUserPasswordConfirm,
        setUserCheckPolitique: setUserCheckPolitique,
        setUserCheckLetter: setUserCheckLetter,
        setStrength: setStrength,
        userMail: userMail,
        userPassword: userPassword,
        userPasswordConfirm: userPasswordConfirm,
        userCheckPolitique: userCheckPolitique,
        userCheckLetter: userCheckLetter,
        ErrorRegister: ErrorRegister,
        strength: strength
    }

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
                idLoader.classList.add('visually-hidden');
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

                                    {stepRegister == 0 ? (
                                        <>
                                            {/* <GoogleLoginButton /> */}

                                            <div className="text-start">

                                                <h5 className='py-4 fw-bold text-uppercase'>Créer un compte</h5>

                                                <FormRegistration {...propsUser} />

                                                <FormCheckbox {...propsUser} />

                                                <button class="btn btn-lg btn-primary w-100 mt-3" onClick={handleConfirmFirstRegister}>
                                                    <span id='loader' class="spinner-border spinner-border-sm me-3 visually-hidden" aria-hidden="true"></span>
                                                    <span class="status" role="status">Créer mon compte {userCheckPolitique ? "😎" : ""}</span>
                                                </button>

                                                {/* <button className="btn btn-lg btn-primary w-100 mt-3" onClick={handleConfirmFirstRegister}>Créer mon compte {userCheckPolitique ? "😎" : ""}</button> */}
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className='text-center text-md-start'>
                                                <h5 className='mt-5 fw-bold text-uppercase'>Confirmer mon adresse email</h5>

                                                <p>Nous vous envoyons un e-mail de confirmation</p>
                                                <div className='row align-items-center mt-5 justify-content-center justify-content-md-start'>
                                                    <CheckCircle className='col-auto' />
                                                    <p className='col-auto m-0 text-success-emphasis'>Mail de récupération envoyé</p>
                                                </div>

                                                <div className='mt-5'>
                                                    <h5 className='py-4 fw-bold'>Vérifiez votre boite mail</h5>
                                                    <Link onClick={handlerSendMail}>Renvoyer un email</Link>
                                                </div>
                                            </div>
                                        </>
                                    )}


                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <Outlet />
            </section>
        </>
    );
}