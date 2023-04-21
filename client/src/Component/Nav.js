// import { useSelector } from "react-redux";

const Nav = () => {
  // //récupération de l'idUser du state global pour savoir s'il est connecté
  // const { idUser } = useSelector((state) => state);
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Accueil</a>
        </li>
        <li>
          <a href="/collection">Collection éventails la Dakaroise</a>
        </li>
        <li>
          <a href="/about">À propos</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <a href="/association">Association Lovelies People</a>
        </li>
        
        <li>
            <a href="/connectPage">Connexion</a>
      </li>
    
          <li>
            <a href="/disconnectPage">Deconnexion</a>
          </li>
        
           
      </ul>
    </nav>
  );
};

export default Nav;
