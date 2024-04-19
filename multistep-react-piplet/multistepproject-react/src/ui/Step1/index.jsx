import { useState, useEffect } from 'react';
import ProgressBar from "../ProgressBar/index";

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

function RenderProfil({ onSelectProfil, formData }) {
    const [selectedProfil, setSelectedProfil] = useState(null);

    useEffect(() => {
        // Définir le premier profil par défaut
        if (!selectedProfil && profils.length > 0) {
            setSelectedProfil(profils[0]);
            onSelectProfil(profils[0]);
        }
    }, []);

    const handleSelectProfil = (profil) => {
        // Mettre à jour le profil sélectionné
        setSelectedProfil(profil);
        // Appeler onSelectProfil avec le profil sélectionné
        onSelectProfil(profil);
    };

    return (
        <>
            <div className="row text-center py-4">

                {profils.map((profil) => (
                    <div className="col-12 col-md-6 col-lg-4">
                        <div
                            className={`border border-primary pt-4 pb-2 px-4 text-start cursor-pointer ${selectedProfil && selectedProfil.id === profil.id ? 'border-secondary bg-success' : ''}`}
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
                            <label htmlFor={`plan_${profil.id}`} className="text-uppercase user-select-none">{profil.title}</label>
                            <p className='pt-2 user-select-none'>{profil.description}</p>
                        </div>

                    </div>
                ))}
            </div>
        </>
    );
}

export default function FormStep1({ step, formData, setFormData, setStep }) {

    useEffect(() => {
        // Mettre à jour formData avec le premier profil par défaut
        if (!formData && profils.length > 0) {
            setFormData(profils[0].title);
        }
    }, []);

    const handleNextStep = () => {
        // Vous pouvez utiliser formData pour passer les données à l'étape suivante ou effectuer d'autres opérations nécessaires.
        console.log(formData);
        setStep(step + 1);
    };

    const handleSelectProfil = (profil) => {
        // Mettre à jour formData avec le profil sélectionné
        setFormData(profil.title);
    };

    console.log(formData);
    return (
        <>
            <div className='row'>
                <h3 className='col-12 section__content_title'>Pour Commencer</h3>
                <p className='col-12 section__content_sous_title'>Quel est votre profil ?</p>
            </div>

            <RenderProfil onSelectProfil={handleSelectProfil} formData={formData} />

            <ProgressBar step={step} handlenextstep={handleNextStep} />

        </>
    );
}