import { useState, useEffect } from 'react';
import axios from 'axios';
import ProgressBar from "../ProgressBar/index";
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

import LottieConfettis from '../Lottie';


let CheckVisibility = [
    {
        label: "Afficher mon genre"
    },
    {
        label: "Afficher mon âge"
    }
];

let RadioVisibility = [
    {
        label: "Mes contenus sont visibles à tous",
        value: "public"
    },
    {
        label: "Mes contenus sont privés et je choisi à qui les montrer",
        value: "private"
    }
];

let RadioPublic = [
    {
        label: "Afficher uniquement mon Prénom",
        value: "Firstname"
    },
    {
        label: "Afficher mon Prénom ET mon Nom",
        value: "Firstname/Name"
    },
    {
        label: "Afficher uniquement mon Pseudonyme",
        value: "Pseudonyme"
    },
    {
        label: "Afficher Prénom/Nom ET Pseudonyme",
        value: "Firstname/Name/Pseudonyme"
    },
    {
        label: "Ne rien afficher et rester anonyme",
        value: "Nothing"
    }
];

function ProgressBarAnim({ ProgressBar }) {

    return (
        <>
            <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <p className='text-uppercase m-0'>Discret</p>
                <LinearProgress variant="determinate" value={ProgressBar} sx={{
                    width: '100%', height: '10px', borderRadius: '22rem', backgroundColor: '#EFEFEF', '& .MuiLinearProgress-bar': {
                        backgroundColor: '#FF205B'
                    },
                }} />
                <p className='text-uppercase text-secondary fw-bold m-0'>Star</p>
            </Box>
        </>
    );
}


function RenderChoices({ handProgBar, ...props }) {

    const handleChangeContent = (ev) => {
        props.setCVisible(ev.target.value);
    };

    const handleChangeProfil = (ev) => {
        props.setProfilVisible(ev.target.value);
    };

    const handleChangePersonnel = (index) => {
        const updatedChecked = [...props.persoVisible];
        updatedChecked[index] = !updatedChecked[index];
        props.setPersoVisible(updatedChecked);
        // Mettre à jour formData.PersoVisible ici
        props.setFormData({ ...props.formData, PersoVisible: updatedChecked });
    };

    if (props.formData.PersoVisible === undefined) {
        props.formData.PersoVisible = [false, false];
    }

    handProgBar(); // Appel à la fonction handlerProgressBar
    return (
        <>
            <div className="row text-start py-4 px-0">

                <div className='col-12 col-md-6'>
                    <FormControl component="fieldset">
                        <FormGroup
                            aria-label="position"
                            col="true"
                        >

                            {CheckVisibility.map((check, index) => (

                                <FormControlLabel
                                    value="end"
                                    control={<Checkbox
                                        sx={{
                                            color: '#FF205B',
                                            '&.Mui-checked': {
                                                color: '#FF205B',
                                            },
                                        }}
                                        onClick={() => handleChangePersonnel(index)}
                                    />}
                                    label={check.label}
                                    labelPlacement="end"
                                    checked={props.formData.PersoVisible[index] === true ? true : false}
                                />
                            ))}
                        </FormGroup>
                    </FormControl>
                </div>
                <div className='col-12 col-md-6 pt-3 pb-3 pt-md-0 pb-md-0'>
                    <p className='fw-bold text-uppercase'>Quelle visibilité je souhaite ?</p>
                    <FormControl>
                        <RadioGroup
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            defaultValue="first"
                            value={props.contentVisible}
                            onChange={handleChangeContent}
                        >
                            <div className="d-flex flex-wrap row">

                                {RadioVisibility.map((radVis) => (

                                    <FormControlLabel className='col-auto me-0' value={radVis.value} control={<Radio sx={{
                                        color: '#FF205B',
                                        '&.Mui-checked': {
                                            color: '#FF205B',
                                        },
                                    }} />}
                                        label={radVis.label} />
                                ))}

                            </div>
                        </RadioGroup>
                    </FormControl>
                </div>
                <div className="col-12 col-md-6">
                    <p className='fw-bold text-uppercase'>Comment doit-on t'appeler publiquement ?</p>
                    <FormControl>
                        <RadioGroup
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            defaultValue="first"
                            value={props.profilVisible}
                            onChange={handleChangeProfil}
                        >
                            <div className="d-flex flex-wrap row">

                                {RadioPublic.map((radPub) => (

                                    <FormControlLabel className='col-auto me-0' value={radPub.value} control={<Radio sx={{
                                        color: '#FF205B',
                                        '&.Mui-checked': {
                                            color: '#FF205B',
                                        },
                                    }} />}
                                        label={radPub.label} />
                                ))}
                            </div>
                        </RadioGroup>
                    </FormControl>
                </div>
            </div>
        </>
    );
}

export default function FormStep3({ step, formData, setFormData, setStep }) {
    const [progressBarValue, setProgressBarValue] = useState(0);
    const [personnelVisibility, setPersonnelVisibility] = useState([false, false]);
    const [contentVisibility, setContentVisibility] = useState('public');
    const [profilVisibility, setProfilVisibility] = useState('Firstname');
    const [final, setFinal] = useState(false);

    let props = {
        formData: formData,
        setFormData: setFormData,
        persoVisible: personnelVisibility,
        setPersoVisible: setPersonnelVisibility,
        contentVisible: contentVisibility,
        setCVisible: setContentVisibility,
        profilVisible: profilVisibility,
        setProfilVisible: setProfilVisibility,
    }


    const handleNextStepFinal = () => {
        setFormData(updatedFormData => ({ 
            ...updatedFormData, 
            ContentVisible: props.contentVisible, 
            ProfilVisible: props.profilVisible, 
            PersoVisible: props.persoVisible 
        }));
        setFinal(true);

        axios.post('http://localhost:8000/api/secondregister', {
            ...formData,
            ContentVisible: props.contentVisible,
            ProfilVisible: props.profilVisible,
            PersoVisible: props.persoVisible
        })
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.error(error);
        });

        setTimeout(() => {
            window.location.href = 'http://localhost:5173/login';
        }, 2000);
    };


    const handleBackStep = () => {
        setFormData({ ...formData, ContentVisible: props.contentVisible, ProfilVisible: props.profilVisible, PersoVisible: props.persoVisible });

        setStep(step - 1);
    };

    const handlerProgressBar = () => {
        let scoreContent = 0;
        let scorePerso = 0;
        let scoreProfil = 0;

        if (props.contentVisible === "public") {
            scoreContent = 30;
        }
        else {
            scoreContent = 0
        }

        if ((props.persoVisible[0]) && (props.persoVisible[1])) {
            scorePerso = 40;
        }
        else if ((!(props.persoVisible[0]) && (props.persoVisible[1])) || ((props.persoVisible[0]) && !(props.persoVisible[1]))) {
            scorePerso = 20;
        }
        else {
            scorePerso = 0;
        }

        if (props.profilVisible === "Firstname") {
            scoreProfil = 10;
        }
        else if (props.profilVisible === "Firstname/Name") {
            scoreProfil = 20;
        }
        else if (props.profilVisible === "Pseudonyme") {
            scoreProfil = 5;
        }
        else if (props.profilVisible === "Firstname/Name/Pseudonyme") {
            scoreProfil = 30;
        }
        else {
            scoreProfil = 0;
        }

        let scoreTotaux = scoreContent + scorePerso + scoreProfil;

        setProgressBarValue(scoreTotaux);
    };

    useEffect(() => {

        if (formData.ContentVisible !== 'public') {
            setContentVisibility(formData.ContentVisible || 'public');
        }

        if (formData.ProfilVisible !== 'Firstname') {
            setProfilVisibility(formData.ProfilVisible || 'Firstname');
        }

        if (formData.PersoVisible !== undefined) {
            props.setPersoVisible(formData.PersoVisible);
        }

    }, [formData]);

    return (
        <>
            <div>
                <h3 className='fs-5 text-uppercase'>Plutôt star ou discret ?</h3>
                <p>Choisis les informations publiques</p>
            </div>
            <ProgressBarAnim ProgressBar={progressBarValue} />
            <RenderChoices {...props} handProgBar={handlerProgressBar} />

            {final === true && (
                <div className='position-absolute top-0 start-0 bottom-0 end-0'>
                    <LottieConfettis />
                </div>
            )}

            <ProgressBar step={step} handlenextstepfinal={handleNextStepFinal} handlebackstep={handleBackStep} />
        </>
    );
}