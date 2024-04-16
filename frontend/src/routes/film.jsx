import { useState, useEffect } from "react";
import { useParams, Outlet, Link } from "react-router-dom";
import NavbarRetour from "../ui/NavBarRetour";
import { fetchByMovie, fetchUser } from "../lib/loaders";

function FilmAffichage() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetchUser()
            .then((data) => {
                setUser(data);
            })
            .catch((error) =>
                console.error("Erreur lors de la récupération du cookie:", error)
            );

        fetchByMovie(movieId)
            .then((data) => {
                setMovie(data);
            })
            .catch((error) =>
                console.error("Erreur lors de la récupération de l'utilisateur:", error)
            );
    });


    if (!movie) {
        return (
            <>
                <div className="text-white w-screen h-screen pt-20 text-center">Loading...</div>
            </>
        );
    } else {

        if (user == "Not Logged") {
            
            return (
                <>
                    <section className="h-screen flex justify-center items-center flex-col gap-5 p-24 text-colorWhite">
                        <p>Veillez vous connectez pour regarder les films</p>
                        <Link className="hover:underline" to="http://localhost:8080/login">Se Connecter</Link>
                    </section>
                </>
            );
        } else {

            return (
                <>
                    <section className="py-24 md:p-24 text-colorWhite">
                        <iframe className="w-full aspect-video" src={movie.linkYt}
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen
                        >
                        </iframe>

                        <section className="px-12 md:p-0">

                            <article className="flex items-center flex-col gap-5 py-10 md:flex-row">
                                <div className="w-28 h-28 overflow-hidden">
                                    <img className="w-full h-full object-cover" src={movie.img} alt={"image du film " + movie.name} />
                                </div>

                                <section className="flex flex-col h-full justify-between gap-4">
                                    <h2 className="text-2xl font-bold">{movie.name}</h2>
                                    <div className="flex flex-wrap gap-2 text-lg">
                                        <p>{movie.dateDeb}</p>
                                        <p>-</p>
                                        <p>{movie.realisateur}</p>
                                        <p>-</p>
                                        <ul className="flex gap-1">
                                            {movie.category.map(cat => (
                                                <li className="p-2 bg-colorBgGray text-colorBgBody uppercase text-xs font-bold rounded">{cat.name}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </section>

                            </article>
                            <section className="flex justify-between flex-col gap-10 md:flex-row">
                                <p className="max-w-96">{movie.description}</p>
                                <p>Vidéo disponible jusqu'au : {movie.dateFin}</p>
                            </section>
                        </section>
                    </section>
                </>
            );
        }
    }
}



export default function Film() {

    return (
        <>
            <section className="bg-colorBgBody relative h-auto overflow-hidden">
                <NavbarRetour />
                <FilmAffichage />
                <Outlet />
            </section>
        </>
    );
}