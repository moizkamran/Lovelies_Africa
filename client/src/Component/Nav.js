import { useSelector } from "react-redux";

const Nav = () => {
  //récupération de l'idUser du state global pour savoir s'il est connecté
  const { idUser } = useSelector((state) => state);
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
        {/* gestion des onglets en fonction de la connexion ou non d'un utilisateur
			    ainsi que la connexion pour l'espace admin */}
        {/* si ID user = à nul ou indefined alors afficher le lien se connecter  */}
        {idUser == null || idUser === undefined ? (
          <span>
            <a href="/connectPage"> Se connecter</a>
          </span>
        ) : idUser === 3 ? (
          <span>
            <a href="/disconnect">Me deconnecter</a>
          </span>
        ) : (
          // ou alors l'ID user contient quelque chose alors afficher se dec ou son compte
          <span>
            <li>
              <a href="/account">Mon compte</a>
            </li>
          </span>
        )}

        {/* <li>
          <a href="/administrator">Administrateur</a>
        </li> */}
      </ul>
    </nav>
  );
};

export default Nav;
