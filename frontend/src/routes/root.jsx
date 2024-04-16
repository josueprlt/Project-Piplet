import { PatchQuestion, LogoPiplet } from "../components/icons";

export default function Root() {

  return (
    <>
      <section className="position-relative h-full d-flex flex-column justify-content-between ff-inter">
        <div className="position-absolute d-flex justify-content-center align-items-center bg-primary rounded-circle w-8 h-8 l-negative t-negative">
            <PatchQuestion className="w-3 position-absolute t-45 l-45" />
        </div>

        <div className="text-center pad-l-3 pad-r-3 pad-t-3">

          <div className="d-flex flex-column align-items-center gap-3">
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
            <a className="text-primary link-offset-1">Je ne me rappelle pas</a>
          </div>

        </div>
          <div className="bg-secondary text-white text-center pad-t-2 pad-bt-2">MODE INVITÉ</div>
      </section>
    </>
  );
}