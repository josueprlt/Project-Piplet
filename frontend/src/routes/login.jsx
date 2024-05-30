import React from 'react';
import { Outlet } from "react-router-dom";
import LoginPage from "../ui/LoginPage";


export default function Login() {

  return (
    <>
        <LoginPage />
        <Outlet />
    </>
  );
}