import { PatchQuestion, LogoPiplet } from "../components/icons";

export default function Root() {

  return (
    <>
      <section className="position-relative h-full d-flex flex-column justify-content-between ff-inter">
        <div className="position-absolute d-flex justify-content-center align-items-center bg-primary rounded-circle w-8 h-8 l-negative t-negative">
          <PatchQuestion className="w-3 position-absolute t-45 l-45" />
        </div>


        <section className="container d-md-flex gap-3 pad-t-5 justify-content-center justify-content-md-between">

          <div className="text-center text-md-start pad-l-3 pad-l-md-3 pad-r-md-0 pad-r-3 pad-t-3 col-md-6">

            <div className="d-flex flex-column align-items-center align-items-md-start gap-3">
              <LogoPiplet />
              <p className="ff-roboto fw-lighter fs-6">Le réseau social <span className="fw-bold">favoris de Molière</span></p>
            </div>

            <div className="d-flex flex-column gap-1">
              <label className="fs-6 pad-bt-1 pad-t-1">Vous venez d’arriver ?</label>
              <button className="btn btn-primary pad-t-undemi pad-bt-undemi">INSCRIPTION</button>
              <span className="ff-roboto fs-6 fst-italic">C'est rapide et gratuit</span>
            </div>

            <div className="d-grid flex-column">
              <label className="fs-6 pad-bt-1 pad-t-2">Ou si tu as déjà un compte</label>
              <button className="btn btn-outline-primary pad-t-undemi pad-bt-undemi">CONNEXION</button>
              <a href="#!" className="text-primary link-offset-1">Je ne me rappelle pas</a>
            </div>


          </div>
          <div className="avatar-trip-wrapper d-none d-md-block col-md-6">
            <img className="img-trip w-full" id="avatar" src="/avatar-moliere/avatar-moliere.png" alt="Image de molière" />
            <img className="img-trip" id="casquette" src="/avatar-moliere/casquette.png" alt="Casquette de molière" />
            <img className="img-trip" id="glasses" src="/avatar-moliere/glasses.png" alt="Lunnette de molière" />
            <img className="img-trip" id="mustache" src="/avatar-moliere/mustache.png" alt="Moustache de molière" />
          </div>
        </section>

        <a href="#!" className="bg-secondary text-white text-center pad-t-2 pad-bt-2 link-underline link-underline-opacity-75 pe-auto">MODE INVITÉ</a>
      </section>
    </>
  );
}