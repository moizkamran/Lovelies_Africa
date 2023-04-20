//Dépendances
import { useNavigate } from "react-router-dom";
import { useState } from "react";

//Variables
const NewAccountPage = () => {
  const [name, setName] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  //Redirection
  const navigate = useNavigate();

  //Gestion de la mise à jour des valeurs par l'event
  const handleChange = (e) => {
    switch (e.target.id) {
      case "name":
        setName(e.target.value);
        break;
      case "firstname":
        setFirstname(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      default:
    }
  };

  // utilisateur envoi au formulaire (composant react) -> renvoi au controller (create account)
  // -> qui renvoi dans l'insert into dans le userController (pour la BDD)

  //Insertion des informations dans la BDD
  const submit = () => {
    //Ou on va chopper les valeurs à inserer dans la BDD
    let datas = {
      name: name,
      firstname: firstname,
      email: email,
      password: password,
    };

    // gestion de la requête: je passe les infos au controller.users qui les renvoi à la BDD
    let req = new Request("http://localhost:9000/newAccountPage", {
      method: "post",
      //body natif à l'objet request
      body: JSON.stringify(datas),

      //Gestion des renvois des informations sous format json avec la propriété accept
      //headers permet d'indiquer sous quel format la requête sera renvoyé avec la propriété accept sous format json
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    // renvoi des valeurs sous la variable req pour le retour à vide
    fetch(req)
      .then((response) => response.json())
      .then((response) => {
        if (response.message === "") {
          setName("");
          setFirstname("");
          setEmail("");
          setPassword("");
          //Redirection à la page de connexion
          navigate("/account");
        } else {
          //Message d'erreur d'insertion dans la BDD
          setMessage(response.message);
        }
      });
  };

  return (
    <>
      <h1>Créer un compte</h1>
      {/* si mon message est différent d'une chaine de caractère vide alors j'affiche un message sinon on affiche rien*/}
      {message !== "" && <p>{message}</p>}
      <form>
        <label htmlFor="name">Entrez votre nom</label>
        <input type="text" id="name" value={name} onChange={handleChange} />
        <label htmlFor="firstname">Entrez votre prénom</label>{" "}
        <input
          type="text"
          id="firstname"
          value={firstname}
          onChange={handleChange}
        />
        <label htmlFor="email">Entrez votre email</label>{" "}
        <input type="email" id="email" value={email} onChange={handleChange} />
        <label htmlFor="password">Créez un mot de passe</label>{" "}
        <input
          type="password"
          id="password"
          value={password}
          onChange={handleChange}
        />
        {/* Pour envoyer les infos dans la BDD, on appellera la méthode submit pour gérer toute la requête */}
        <button className="btn" type="button" onClick={submit}>
          Créer un compte
        </button>
      </form>
      <p>
        {/* Redirection si j'ai déja un compte */}
        <a href="/connect">J'ai déjà un compte</a>
      </p>
    </>
  );
};

export default NewAccountPage;
