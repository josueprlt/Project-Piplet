
export default function Footer() {

    return (
        <>
            <footer className="flex items-center flex-col gap-10 px-20 py-10 bg-colorBgBtnCate text-colorWhite font-medium">
                <ul className="w-9/12 flex justify-center gap-10 flex-wrap">
                    <li className="flex flex-col justify-center items-center gap-2">
                        <img className="w-16 rounded-full cursor-pointer" src="https://accounts.ard.de/static/media/appIcon.mt.4dc72f09dcb07167239c.jpg" alt="image Médiathèques ARD"/>
                        <p className="text-xs">Médiathèques ARD</p>
                    </li>
                    <li className="flex flex-col justify-center items-center gap-2">
                        <img className="w-16 rounded-full cursor-pointer" src="https://accounts.ard.de/static/media/appIcon.ts.b846aebc4c4b299d0fbd.jpg" alt="image Nouvelles quotidiennes"/>
                        <p className="text-xs">Nouvelles quotidiennes</p>
                    </li>
                    <li className="flex flex-col justify-center items-center gap-2">
                        <img className="w-16 rounded-full cursor-pointer" src="https://accounts.ard.de/static/media/appIcon.sp.6a915067607728ce7e4b.jpg" alt="image Spectacle sportfif"/>
                        <p className="text-xs">Spectacle sportfif</p>
                    </li>
                    <li className="flex flex-col justify-center items-center gap-2">
                        <img className="w-16 rounded-full cursor-pointer" src="https://accounts.ard.de/static/media/appIcon.at.5ad8a80bfefa187b427e.jpg" alt="image Bibliothèque audio ARD"/>
                        <p className="text-xs">Bibliothèque audio ARD</p>
                    </li>
                    <li className="flex flex-col justify-center items-center gap-2">
                        <img className="w-16 rounded-full cursor-pointer" src="https://accounts.ard.de/static/media/appIcon.kika.e978e746a014129d950e.jpg" alt="image Kika"/>
                        <p className="text-xs">Kika</p>
                    </li>
                </ul>

                <button className="text-black bg-colorWhite py-2 px-4 rounded-full hover:bg-colorBorderBlue hover:text-colorWhite">Toutes les offres avec connexion ARD</button>

                <ul className="flex justify-center gap-5 flex-wrap">
                    <li><a href="/" className="hover:underline">ARD.de</a></li>
                    <li><a href="#" className="hover:underline">Imprimer</a></li>
                    <li><a href="#" className="hover:underline">Protection des données</a></li>
                    <li><a href="#" className="hover:underline">Conditions d'utilisation</a></li>
                </ul>
            </footer>
        </>
    );
}

