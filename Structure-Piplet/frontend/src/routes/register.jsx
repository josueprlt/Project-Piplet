import { Outlet } from "react-router-dom";
import RegisterPage from "../ui/RegisterPage";
/* import RegisterPage2 from "../ui/RegisterPage2"; */


export default function Register() {

  return (
    <>
      <section className='login__section'>
        <RegisterPage />
        <Outlet />
      </section>
    </>
  );
}