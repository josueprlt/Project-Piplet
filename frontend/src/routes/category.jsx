import React from "react";
import { Outlet } from "react-router-dom";
import NavBarRetour from "../ui/NavBarRetour/index";
import MoviesCatList from "../ui/MoviesCatList";


export default function Category() {

  return (
    <>
      <section className="bg-colorBgBody relative h-auto">
        <NavBarRetour/>
        <MoviesCatList/>
        <Outlet/>
      </section>
    </>
  );
}