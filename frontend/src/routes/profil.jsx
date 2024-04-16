import NavbarRetour from "../ui/NavBarRetour";
import ProfilList from "../ui/ProfilList";
import Footer from "../ui/Footer";
import { Outlet } from "react-router-dom";

export default function Profil() {

  return (
    <>
      <section className="bg-colorBgBody relative h-full overflow-x-hidden">
        <NavbarRetour />
        <ProfilList />

        <Footer />
        <Outlet />
      </section>
    </>
  );
}