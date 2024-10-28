import logonav from "../../public/images/Logo boxing.png";

export default function NavBar() {
  return (
    <div className="navbar">
      <nav>
        <img id="logonav" src={logonav} alt="logo nav" />
        <ul>
          <li>Accueil</li>
          <li>Combattants</li>
          <li>Évenements</li>
        </ul>
      </nav>
    </div>
  );
}
