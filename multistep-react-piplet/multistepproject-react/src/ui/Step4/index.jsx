
export default function FormStep4({ onNextStep, onBackStep, formData, setFormData }) {

    const handleNextStep = () => {
        onNextStep();
    };

    const handleBackStep = () => {
        onBackStep();
    };

    const handleToggleChange = () => {
        setFormData({
            ...formData,
            toggle: !formData.toggle
        });
    };

    function calcul() {
        let addonsTotal = 0;
        let total = 0;

        if (formData.toggle === false) {
            formData.selectedAddons.forEach((addon) => {
                addonsTotal += addon.month;
            });
    
            let planTotal = formData.selectedPlan.priceMonth.month;
            total = addonsTotal + planTotal;
        }
        else {
            formData.selectedAddons.forEach((addon) => {
                addonsTotal += addon.year;
            });
    
            let planTotal = formData.selectedPlan.priceYear.year;
            total = addonsTotal + planTotal;
        }


        return total;
    }

    const total = calcul();

    return (
        <>
            <div>
                <h3 className='section__content_title'>Finishing up</h3>
                <p className='section__content_sous_title'>Double check everything looks OK before confirming.</p>
            </div>

            <section className="section__summary">
                <div className="div__summary">
                    <div className="div__title_summary">
                        {formData.toggle === false ? (
                            <p className="p__title_summary">{formData.selectedPlan.name} (Monthly)</p>
                        ) : (
                            <p className="p__title_summary">{formData.selectedPlan.name} (Yearly)</p>
                        )}
                        <a className='a__change_summary' onClick={handleToggleChange}>Change</a>
                    </div>

                    {formData.toggle === false ? (
                        <p className="p__title_summary">${formData.selectedPlan.priceMonth.month}/mo</p>
                    ) : (
                        <p className="p__title_summary">${formData.selectedPlan.priceYear.year}/yr</p>
                    )}
                </div>

                <ul className='ul__summary'>
                    {formData.selectedAddons.map((addon) => (
                        <li className='li__summary'>
                            <p className='p__resume_summary'>{addon.name}</p>
                            {formData.toggle === false ? (
                                <p className='price__addon_summary'>+${addon.month}/mo</p>
                            ) : (
                                <p className='price__addon_summary'>+${addon.year}/yr</p>
                            )}
                        </li>
                    ))}
                </ul>

                {formData.toggle === false ? (
                    <div className='div__resume_summary'>
                        <p className="p__resume_summary">Total (per month)</p>
                        <p className="price__resume_summary">${total}/mo</p>
                    </div>
                ) : (
                    <div className='div__resume_summary'>
                        <p className="p__resume_summary">Total (per year)</p>
                        <p className="price__resume_summary">${total}/yr</p>
                    </div>
                )}
            </section>

            <div className='div__btn step2'>
                <button className='btn back' onClick={handleBackStep}>Back</button>
                <button className='btn next' onClick={handleNextStep}>Finish</button>
            </div>
        </>
    );
}