import { useState } from 'react';
import { Logo, PatchQuestion } from "./components/icons";
import FormStep1 from "./ui/Step1";
import FormStep2 from "./ui/Step2";
import "../sass/css/style.css";


function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState([]);

  return (
    <>
      <header class="shadow-sm py-2">
        <div class="container">
          <div class="row position-relative">
            <div class="position-absolute">
              <PatchQuestion className="img-fluid" />
            </div>

            <div class="col-12 text-center">
              <Logo className="cursor-pointer" />
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id='firstStepSection' className='container py-5 w-100 h-auto'>
          {step === 1 && <FormStep1 step={step} formData={formData} setFormData={setFormData} setStep={setStep} />}
          {step === 2 && <FormStep2 step={step} formData={formData} setFormData={setFormData} setStep={setStep} />}
        </section>
      </main>
    </>
  )
}

export default App;
