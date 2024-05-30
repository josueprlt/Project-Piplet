import { useState } from 'react';
import ProgressBar from "../ProgressBar";
import { useParams } from 'react-router-dom';

let profils = [
    {
        id: 1,
        title: "Lecteur",
        description: "J’utilise Piplet principalement pour me divertir."
    },
    {
        id: 2,
        title: "Contributeur",
        description: "J’utilise Piplet principalement pour diffuser mon contenu."
    },
    {
        id: 3,
        title: "Social",
        description: "J’utilise Piplet principalement pour échanger avec la communauté."
    },
]

function RenderProfil({ onSelectProfil, formData, setSelectProfil, userdomaine }) {
    
    const handleSelectProfil = (profil) => {
        // Mettre à jour le profil sélectionné
        setSelectProfil(profil);
        // Appeler onSelectProfil avec le profil sélectionné
        onSelectProfil(profil);
    };
    
    if (userdomaine === undefined) {
        userdomaine = 'Lecteur';
    }

    return (
        <>
            <div className="row text-center py-4">

                {profils.map((profil) => (
                    <div className="col-12 col-md-12 col-lg-4 pt-2 pb-2 pt-lg-0 pb-lg-0">
                        <div
                            className={`border pt-4 pb-2 px-4 text-start cursor-pointer h-100 ${userdomaine === profil.title ? 'border-secondary bg-info' : 'border-dark'}`}
                            key={profil.id}
                            onClick={() => handleSelectProfil(profil)}
                            >
                            <input
                                type="radio"
                                id={`plan_${profil.id}`}
                                name="profil"
                                checked={formData && formData.id === profil.id}
                                readOnly
                                style={{ display: 'none' }} // Masquer l'input radio
                                />
                            <label htmlFor={`plan_${profil.id}`} className="text-uppercase user-select-none fw-bold">{profil.title}</label>
                            <p className='pt-2 user-select-none'>{profil.description}</p>
                        </div>

                    </div>
                ))}
            </div>
        </>
    );
}

export default function FormStep1({ step, formData, setFormData, setStep }) {
    const { UserMail, UserReglement, UserNewsletter } = useParams();
    const [selectedProfil, setSelectedProfil] = useState('Lecteur');
    
    
    const handleNextStep = () => {
        setStep(step + 1);
        setSelectedProfil(profils[0]);
        
        if (selectedProfil.title === undefined) {
            setFormData({
                ...formData,
                userDomaine: 'Lecteur',
                userMail: UserMail,
                userReglement: UserReglement,
                userNewsletter: UserNewsletter
            });
        } else {
            setFormData({
                ...formData,
                userDomaine: selectedProfil.title
            });
        }
    };

    console.log(formData);

    const handleBackStep = () => {
        setStep(step - 1);

    };

    const handleSelectProfil = (profil) => {
        setFormData({
            ...formData,
            userDomaine: profil.title
        });
        setSelectedProfil(profil);
    };

    return (
        <>
            <div className='row'>
                <h3 className='fs-5 text-uppercase'>Pour Commencer</h3>
                <p>Quel est votre profil ?</p>
            </div>

            <RenderProfil onSelectProfil={handleSelectProfil} formData={formData} setSelectProfil={setSelectedProfil} userdomaine={formData.userDomaine} />
            <ProgressBar step={step} handlenextstep={handleNextStep} handlebackstep={handleBackStep} />

        </>
    );
}