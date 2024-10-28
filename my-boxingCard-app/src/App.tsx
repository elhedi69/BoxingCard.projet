import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const fighterslist = [
  {
    id: 1,
    nom:"TYSON mike",
    imgSrc:"",
    poids:"",
    taille:""
  },
  {
    id: 1,
    nom:"ALI muhammad",
    imgSrc:"",
    poids:"",
    taille:""
  },
  {
    id: 1,
    nom:"LEE bruce",
    imgSrc:"",
    poids:"",
    taille:""
  },
  {
    id: 1,
    nom:"VAN DAMME jean-claude",
    imgSrc:"",
    poids:"",
    taille:""
  },
  {
    id: 1,
    nom:"BERGER marc-antoine",
    imgSrc:"",
    poids:"",
    taille:""
  },
  {
    id: 1,
    nom:"LOPEZ matthieu",
    imgSrc:"",
    poids:"",
    taille:""
  },
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>BoxingCard</div>
    </>
  )
}

export default App
