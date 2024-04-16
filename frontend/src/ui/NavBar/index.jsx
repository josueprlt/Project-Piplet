import { Link } from "react-router-dom";
import { Logo, Hamburger, Research, Profil, Cross, Home, Star, Exit } from "../../components/icons";
import { useState, useEffect } from 'react';
import { fetchUser } from "../../lib/loaders";


export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    fetchUser()
      .then((data) => {
        setUser(data);
      })
      .catch((error) =>
        console.error("Erreur lors de la récupération de l'utilisateur:", error)
      );
  });


  if (user) {

    return (
      <>
        <nav className="flex-no-wrap shadow-dark-mild border-colorBorderBlue from-colorBgBody fixed top-0 z-50 flex w-full items-center justify-between border-t-8 bg-gradient-to-b px-2 py-1.5">
          <section>
            <Link to="/">
              <Hamburger className="w-14 fill-white hover:bg-colorBorderBlue" onClick={toggleMenu} />
            </Link>
          </section>

          <Link to="/">
            <Logo className="w-20" />
          </Link>

          <section className="flex">
            <Link to="/research">
              <Research className="w-14 fill-white hover:bg-colorBorderBlue" />
            </Link>

            {user != "Not Logged" ? (
              <Link to="/profil">
                <div className="flex justify-center items-center w-14 h-14 hover:bg-colorBorderBlue overflow-hidden">
                  <img src={user.imgProfile} className="w-10 h-10 object-cover rounded-full" alt="User Profile" />
                </div>
              </Link>
            ) : (
              <Link to="http://localhost:8080/login">
                <Profil className="w-14 fill-white hover:bg-colorBorderBlue" />
              </Link>
            )}
          </section>
        </nav>

        {isMenuOpen && (
          <div className="fixed inset-0 bg-colorBgFondBurger bg-opacity-70 z-50">
            <div className="relative flex justify-start w-80 h-full items-center px-8 bg-colorBgBurger">
              <Cross className="absolute top-5 left-5 w-16 fill-colorWhite hover:fill-colorBorderBlue cursor-pointer" onClick={toggleMenu} />
                {user != "Not Logged" ? (
                <ul className="text-colorWhite">
                  <li className="flex items-center hover:text-colorBorderBlue">
                    <Home className="w-14 fill-white"/>
                    <Link to="/">Accueil</Link>
                  </li>
                  <li className="flex items-center hover:text-colorBorderBlue">
                    <Star className="w-14 fill-white"/>
                    <Link to="/profil">Mon Compte</Link>
                  </li>
                  <li className="flex items-center hover:text-colorBorderBlue">
                    <Exit className="w-14 fill-white"/>
                    <Link to="http://localhost:8080/logout">Se déconnecter</Link>
                  </li>
                </ul>
                ) : (
                  <ul className="text-colorWhite">
                  <li className="flex items-center hover:text-colorBorderBlue">
                    <Home className="w-14 fill-white"/>
                    <Link to="/">Accueil</Link>
                  </li>
                  <li className="flex items-center hover:text-colorBorderBlue">
                    <Star className="w-14 fill-white"/>
                    <Link to="http://localhost:8080/login">Se connecter</Link>
                  </li>
                </ul>
                )}
            </div>
          </div>
        )}
      </>
    );
  }
}
