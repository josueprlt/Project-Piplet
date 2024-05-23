import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Logo } from "../../components/icons";
import { BsPatchQuestion } from "react-icons/bs";
import FormStep1 from "./Step1";
import FormStep2 from "./Step2";
import FormStep3 from "./Step3";


export default function RegisterPage2() {
  const { UserMail, UserPwdHash } = useParams();
  const [step, setStep] = useState(1);
  const [addUserPrimary, setAddUserPrimary] = useState(0);
  const [formData, setFormData] = useState({});
  
  useEffect(() => {
    async function fetchData() {
      try {
        let user = {
          userMail: UserMail,
          userPwd: decodeURIComponent(UserPwdHash)
        };

        await handlerFirstRegister(user);
        setAddUserPrimary(1);
      } catch (error) {
      }
    }

    if (addUserPrimary === 0) {
      fetchData();
    }
  }, [UserMail, UserPwdHash, addUserPrimary]);

  async function handlerFirstRegister(user) {
    try {
      const response = await axios.post('http://localhost:8000/api/firstregister', user);
      console.log(response);
    } catch (error) {
      throw error;
    }
  }

  return (
    <>
      <header class="shadow-sm py-2">
        <div class="container">
          <div class="row position-relative">
            <div class="position-absolute">
              <BsPatchQuestion className="img-fluid" style={{color: '#104547', fontSize: '36px'}} />
            </div>

            <div class="col-12 text-center">
              <Logo className="cursor-pointer" />
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id='firstStepSection' className='container pt-5 w-100 h-auto position-relative'>
          {step === 1 && <FormStep1 step={step} formData={formData} setFormData={setFormData} setStep={setStep} />}
          {step === 2 && <FormStep2 step={step} formData={formData} setFormData={setFormData} setStep={setStep} />}
          {step === 3 && <FormStep3 step={step} formData={formData} setFormData={setFormData} setStep={setStep} />}
        </section>
      </main>
    </>
  )
}