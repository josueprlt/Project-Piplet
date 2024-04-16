import Navbar from "../ui/NavBar";
import { Outlet } from "react-router-dom";

export default function Root() {

  return (
    <>
      <section className="bg-colorBgBody relative h-auto overflow-hidden">
        <Navbar />
        
        <Outlet />
      </section>
    </>
  );
}