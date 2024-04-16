import { PatchQuestion } from "../components/icons";

export default function Root() {

  return (
    <>
      <div className="container flex-column">
        <div>
          <PatchQuestion className="w-50"/>
        </div>

        <div>
          <img src="" alt="Logo" />
          <h1>Le réseau social <span className="fw-bold">favoris de Molière</span></h1>
        </div>

        <div className="d-inline-flex flex-column">
          <label>Vous venez d’arriver ?</label>
          <button className="text-uppercase btn btn-outline-primary">INSCRIPTION</button>
          <span>C'est rapide et gratuit</span>
        </div>

        <div className="d-inline-flex flex-column">
          <label>Ou si tu as déjà un compte</label>
          <button className="btn btn-primary">CONNEXION</button>
          <a>Je ne me rappelle pas</a>
        </div>

        <div className="btn">MODE INVITÉ</div>
      </div>
    </>
  );
}