interface MainCardProps{
  data:{
    id: number;
    nom:string;
    imgSrc:string;
    poids:string;
    taille:string;
  }
}








function MainCard({data}: MainCardProps) {

    return (
        <div className="maincard">
         <img src={data.imgSrc} alt="" />
         <p>{data.nom}</p>
         <p>{data.poids}</p>
         <p>{data.taille}</p>
        </div>
    )
}

export default MainCard