import { ArrowRight } from "../../../components/icons";

export default function ProgressBar({ step, handlenextstep, handlebackstep, handlenextstepfinal }) {


    return (
        <>
            <div className='text-end'>

                {step === 3 ? (
                    <div className="d-flex justify-content-between">
                        {!(step === 1) ? <ArrowRight id="rotate__element" className='cursor-pointer mb-3' onClick={handlebackstep} /> : ''}
                        <button className="text-uppercase btn btn-primary cursor-pointer mb-4" onClick={handlenextstepfinal} >C'est Parti ! 😎</button>
                    </div>
                ) : (

                    <div>

                        {step === 1 ? (
                            <div className="d-flex justify-content-end">
                                <ArrowRight className='cursor-pointer mb-3' onClick={handlenextstep} />
                            </div>
                        ) : (
                            <div className="d-flex justify-content-between">
                                <ArrowRight id="rotate__element" className='cursor-pointer mb-3' onClick={handlebackstep} />
                                <ArrowRight className='cursor-pointer mb-3' onClick={handlenextstep} />
                            </div>
                        )}
                    </div>
                )}


                <div className="container border">
                    {step === 1 &&
                        <div className="row gap-1 flex-nowrap overflow-hidden">
                            <div className="col-4 p-1 bg-secondary"></div>
                            <div className="col-4 p-1 bg-none"></div>
                            <div className="col-4 p-1 bg-none"></div>
                        </div>
                    }
                    {step === 2 &&
                        <div className="row gap-1 flex-nowrap overflow-hidden">
                            <div className="col-4 p-1 bg-secondary"></div>
                            <div className="col-4 p-1 bg-secondary"></div>
                            <div className="col-4 p-1 bg-none"></div>
                        </div>
                    }
                    {step === 3 &&
                        <div className="row gap-1 flex-nowrap overflow-hidden">
                            <div className="col-4 p-1 bg-secondary"></div>
                            <div className="col-4 p-1 bg-secondary"></div>
                            <div className="col-4 p-1 bg-secondary"></div>
                        </div>
                    }
                </div>

                <p className='pt-2 mb-0'>{step}/3</p>

                <div className='text-center'>
                    {step === 1 && <p className='fst-italic fw-light text-primary'>On commence tous quelque part</p>}
                    {step === 2 && <p className='fst-italic fw-light text-primary'>Ravi de vous connaître</p>}
                    {step === 3 && <p className='fst-italic fw-light text-primary'>On arrête avec les questions, promis</p>}
                </div>
            </div>
        </>
    );
}