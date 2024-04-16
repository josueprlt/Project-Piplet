import { Link } from "react-router-dom";
import { ArrowLeft } from "../../components/icons";


export default function NavBarRetour() {

  return (
    <>
      <nav className="flex-no-wrap shadow-dark-mild border-colorBorderBlue from-colorBgBody fixed top-0 z-50 flex w-full items-center justify-left border-t-8 bg-gradient-to-b px-2 py-1.5">
        
        <Link to="/">
          <ArrowLeft className="w-14 hover:bg-colorBorderBlue fill-colorWhite" />
        </Link>

      </nav>
    </>
  );
}
