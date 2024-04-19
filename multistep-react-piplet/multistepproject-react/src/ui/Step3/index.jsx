import { useState, useEffect } from 'react';


let addOns = [
    {
        id: 1,
        name: "Online service",
        description: 'Access to multiplayer games',
        month: 1,
        year: 10,
    },
    {
        id: 2,
        name: "Larger storage",
        description: 'Extra 1TB of cloud save',
        month: 2,
        year: 20,
    },
    {
        id: 3,
        name: "Customizable Profile",
        description: 'Custom theme on your profile',
        month: 2,
        year: 20,
    }
];

export default function FormStep3({ onNextStep, onBackStep, formData, setFormData }) {
    const defaultSelectedAddons = []; // Tableau d'addons par défaut
    const [selectedAddons, setSelectedAddons] = useState(formData.selectedAddons || defaultSelectedAddons);

    useEffect(() => {
        // Si formData.selectedAddons est null ou undefined, alors sélectionnez les addons par défaut
        if (!formData.selectedAddons) {
            setFormData({
                ...formData,
                selectedAddons: defaultSelectedAddons
            });
            setSelectedAddons(defaultSelectedAddons);
        }
    }, [formData, setFormData, defaultSelectedAddons]);

    const handleNextStep = () => {
        onNextStep();
    };

    const handleBackStep = () => {
        onBackStep();
    };

    const handleChangeAddon = (id, name, month, year, checked) => {
        let updatedAddons;
        if (checked) {
            updatedAddons = [...selectedAddons, { id, name, month, year }];
        } else {
            updatedAddons = selectedAddons.filter(addon => addon.id !== id);
        }
        setSelectedAddons(updatedAddons);
        setFormData({
            ...formData,
            selectedAddons: updatedAddons
        });
    };

    return (
        <>
            <div>
                <h3 className='section__content_title'>Select your add-ons</h3>
                <p className='section__content_sous_title'>Customize your experience with these optional add-ons.</p>
            </div>

            <form action="">
                <ul className='ul__addon'>

                    {addOns.map((addon) => (
                        <li
                            key={addon.id}
                            className={`li__addon ${selectedAddons.some(a => a.id === addon.id) ? 'check' : ''}`}
                            htmlFor={`addon_${addon.id}`}
                            onClick={() => handleChangeAddon(addon.id, addon.name, addon.month, addon.year, !selectedAddons.some(a => a.id === addon.id))}
                        >
                            <div className='div__addon'>
                                <div className='div__content_addon'>
                                    <input
                                        className='input__checkbox_addon'
                                        type="checkbox"
                                        id={`addon_${addon.id}`}
                                        name='addons'
                                        checked={selectedAddons.some(a => a.id === addon.id)}
                                        onChange={() => handleChangeAddon(addon.id, addon.name, addon.month, addon.year, !selectedAddons.some(a => a.id === addon.id))}
                                    />
                                    <div className='div__text_addon'>
                                        <p className="name__addon">{addon.name}</p>
                                        <p className="description__addon">{addon.description}</p>
                                    </div>
                                </div>
                                {formData.toggle === false ? (
                                    <p className="price__addon">+${addon.month}/mo</p>
                                ) : (
                                    <p className="price__addon">+${addon.year}/yr</p>
                                )}
                            </div>
                        </li>
                    ))}

                </ul>
            </form>

            <div className='div__btn step2'>
                <button className='btn back' onClick={handleBackStep}>Back</button>
                <button className='btn next' onClick={handleNextStep}>Next Step</button>
            </div>
        </>
    );
}