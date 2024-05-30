import { Outlet } from "react-router-dom";
import RegisterPage2 from "../ui/InscriptionPage";


export default function RegisterConfirm() {

  return (
    <>
      <RegisterPage2 />
      <Outlet />
    </>
  );
}