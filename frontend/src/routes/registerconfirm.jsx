import { Outlet } from "react-router-dom";
import RegisterPage2 from "../ui/RegisterPage2";


export default function RegisterConfirm() {

  return (
    <>
      <RegisterPage2 />
      <Outlet />
    </>
  );
}