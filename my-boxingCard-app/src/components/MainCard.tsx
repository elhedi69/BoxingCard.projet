interface MainCardProps {
  data: {
    id: number;
    combattant1: string;
    imgSrc1: string;
    poids1: string;
    taille1: string;
    combattant2: string;
    imgSrc2: string;
    poids2: string;
    taille2: string;
  };
}

function MainCard({ data }: MainCardProps) {
  return (
    <div className="carte">
      <div>
        <img src={data.imgSrc1} alt="combattant 1" />
        <p>{data.combattant1}</p>
        <p>{data.poids1}</p>
        <p>{data.taille1}</p>
      </div>

      <div>
        <img src={data.imgSrc2} alt="combattant 2" />
        <p>{data.combattant2}</p>
        <p>{data.poids2}</p>
        <p>{data.taille2}</p>
      </div>
    </div>
  );
}

export default MainCard;
