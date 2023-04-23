//Dépendances
import { useNavigate } from "react-router-dom";
import { useState } from "react";

//Constantes
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

  //Insertion des informations dans la BDD
  const submit = () => {
    //Valeurs à inserer dans la BDD
    let datas = {
      name: name,
      firstname: firstname,
      email: email,
      password: password,
    };

    // Gestion de la requête
    let req = new Request("http://localhost:9000/newAccountPage", {
      method: "post",
      //body natif à l'objet request
      body: JSON.stringify(datas),

      //Gestion des renvois des informations sous format json avec la propriété accept
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    //Renvoi des valeurs sous la variable req pour le retour à vide
    fetch(req)
      .then((response) => response.json())
      .then((response) => {
        if (response.message === "") {
          setName("");
          setFirstname("");
          setEmail("");
          setPassword("");
          //Redirection
          navigate("/connectPage");
        } else {
          //Message d'erreur d'insertion dans la BDD
          setMessage(response.message);
        }
      });
  };

  return (
    <>
      <div className="terms">
      <img
          className="bandeau"
          src="../img/conception/bandeau.jpg"
          alt="bandeau"
        />
        <h1>Créer un compte</h1>
        {/* si mon message est différent d'une chaine de caractère vide alors on affiche un message sinon on affiche rien*/}
        {message !== "" && <p>{message}</p>}
      </div>

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
        <button className="link" type="button" onClick={submit}>
          Créer un compte
        </button>
      </form>

      <div>
        <p>
          {/* Redirection si j'ai déja un compte */}
          <a href="/connectPage">J'ai déjà un compte</a>
        </p>
      </div>
    </>
  );
};

export default NewAccountPage;
