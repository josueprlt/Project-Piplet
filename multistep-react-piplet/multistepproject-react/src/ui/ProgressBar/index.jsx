import { ArrowRight } from "../../components/icons";

export default function ProgressBar({ step, handlenextstep }) {

    return (
        <>
            <div className='text-end'>

                <div>
                    <ArrowRight className='cursor-pointer' onClick={handlenextstep} />
                </div>

                <div className='w-100 h-8 border border-light mt-4'>
                    <div className="row">
                        <div className="col-12">
                            {step === 1 &&
                                <div className='row'>
                                    <div className='col-4 h-8 bg-secondary'></div>
                                    <div className='col-4 h-8 bg-none'></div>
                                    <div className='col-4 h-8 bg-none'></div>
                                </div>
                            }
                            {step === 2 &&
                                <div className='row'>
                                    <div className='col-4 h-8 bg-secondary m-0 p-0'></div>
                                    <div className='col-4 h-8 bg-secondary m-0 p-0'></div>
                                    <div className='col-4 h-8 bg-none m-0 p-0'></div>
                                </div>
                            }
                            {step === 3 &&
                                <div className='row'>
                                    <div className='col-4 h-8 bg-secondary m-0 p-0'></div>
                                    <div className='col-4 h-8 bg-secondary m-0 p-0'></div>
                                    <div className='col-4 h-8 bg-secondary m-0 p-0'></div>
                                </div>
                            }
                        </div>
                    </div>

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