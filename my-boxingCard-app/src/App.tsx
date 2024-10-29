import "./App.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import MainCard from "./components/MainCard";
import Footer from "./components/Footer";

const fightersList = [
  {
    id: 1,
    combattant1: "TYSON Mike",
    imgSrc1: "images/TYSON.png",
    poids1: "99kg",
    taille1: "178cm",
    combattant2: "ALI Muhammad",
    imgSrc2: "images/ALI.png",
    poids2: "97kg",
    taille2: "191cm",
  },
  {
    id: 2,
    combattant1: "LEE Bruce",
    imgSrc1: "images/LEE.png",
    poids1: "61kg",
    taille1: "172cm",
    combattant2: "VAN DAMME Jean-claude",
    imgSrc2: "images/VAN-DAMME.png",
    poids2: "84kg",
    taille2: "177cm",
  },
  {
    id: 3,
    combattant1: "BERGER Marc-Antoine",
    imgSrc1: "images/marco.png",
    poids1: "100kg (de muscles)",
    taille1: "200cm",
    combattant2: "LOPEZ Matthieu",
    imgSrc2: "images/matthieu.png",
    poids2: "100kg",
    taille2: "195cm",
  },
];

function App() {
  return (
    <div className="document">
      <NavBar />
      <Header />
      <div className="maincard">
        {fightersList.map((fighter, index) => (
          <MainCard key={index} data={fighter} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
