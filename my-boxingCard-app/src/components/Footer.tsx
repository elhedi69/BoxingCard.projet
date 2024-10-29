import gants from "../../public/images/icon-gants-de-boxe.png";

export default function Footer() {
  return (
    <footer>
      <div>
        <img id="gants" src={gants} alt="gants" />
      </div>

      <div>
        <p>
          Résultat : Nous pensons que Matthieu va détruire Marco d'ici la fin du
          fight ! Check les avants bras !
        </p>
      </div>
      <div>
        <img id="gants" src={gants} alt="gants" />
      </div>
    </footer>
  );
}
