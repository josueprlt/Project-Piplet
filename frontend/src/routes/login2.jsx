import React from 'react';
import { Outlet } from "react-router-dom";
import LoginPage2 from "../ui/LoginPage2";


export default function Login2() {

  return (
    <>
        <LoginPage2 />
        <Outlet />
    </>
  );
}