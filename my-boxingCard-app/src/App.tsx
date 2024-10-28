import { useState } from 'react'
import NavBar from './components/NavBar'
import './App.css'
import Header from './components/Header';
import MainCard from './components/MainCard';


const fightersList = [
  {
    id: 1,
    nom:"TYSON mike",
    imgSrc:"images/TYSON.png",
    poids:"99kg",
    taille:"178cm"
  },
  {
    id: 2,
    nom:"ALI muhammad",
    imgSrc:"images/ALI.png",
    poids:"97kg",
    taille:"191cm"
  },
  {
    id: 3,
    nom:"LEE bruce",
    imgSrc:"images/LEE.png",
    poids:"61kg",
    taille:"172cm"
  },
  {
    id: 4,
    nom:"VAN DAMME jean-claude",
    imgSrc:"images/VAN-DAMME.png",
    poids:"84kg",
    taille:"177cm"
  },
  {
    id: 5,
    nom:"BERGER marc-antoine",
    imgSrc:"",
    poids:"100kg(de muscles)",
    taille:"200cm"
  },
  {
    id: 6,
    nom:"LOPEZ matthieu",
    imgSrc:"images/croissant.png",
    poids:"100kg",
    taille:"195cm"
  },
]

function App() {

  return (
    <div className="document">
    <NavBar />
    <Header />
    {fightersList.map((fighter) =>(
      <MainCard data={fighter}/>
    ))}
    </div>
  )
}


export default App;
