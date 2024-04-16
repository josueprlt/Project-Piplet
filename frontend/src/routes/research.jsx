import Navbar from "../ui/NavBar";
import ResearchInput from "../ui/ResearchInput";
import { Outlet } from "react-router-dom";


export default function Research() {
  return (
    <>
      <section className="bg-colorBgBody relative h-full">
        <Navbar />
        <ResearchInput />

        <Outlet/>
      </section>
    </>
  );
}