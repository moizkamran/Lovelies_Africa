//Dépendances
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";

//Variables
const ConnectPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

   //Redirection
  const navigate = useNavigate();

  //Appel d'action 
  const dispatch = useDispatch();

  //Gestion de la mise à jour des valeurs par l'event
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };
 //Envoi des informations dans la BDD
  const submit = () => {
    //Valeurs à recupérer dans la BDD
    let datas = {
      email: email,
      password: password,
    };

  // Gestion de la requête: je passe les infos au controller Users qui les renvoi à la BDD
    let req = new Request("http://localhost:9000/connectPage", {
      method: "post",
      //body natif à l'objet request
      body: JSON.stringify(datas),
      //Gestion des renvois des informations sous format json avec la propriété accept
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    fetch(req)
      .then((response) => response.json())
      .then((response) => {
        //Renvoi des valeurs pour le retour de réponse des identifiants et ID
        if (response.reponse) {
        // Réponse = userLogin = true
          dispatch({
            type: "connect_users",
            id: response.id,
          });
          setMessage("");
          //Puis redirection
          navigate("/account");
        //Ou réponse = userLogin = false: envoi d'un message d'erreur 
        } else {
          setMessage(response.message);
        }
      });
  };

  return (
    <>
      <h1>Se connecter</h1>
      {/* message à afficher en cas d'erreur*/}
      <p style={{ color: "red" }}>{message}</p>
      <form>
        <div>
          <label htmlFor="email">Votre email</label>
          <input type="email" id="email" value={email} onChange={changeEmail} />
        </div>
        <div>
          <label htmlFor="password">Votre mot de passe</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={changePassword}
          />
        </div>
        <button className="btn" type="button" onClick={submit}>
          Se connecter
        </button>
      </form>
      <p>
        <a href="/newAccountPage">Créer un compte</a>
      </p>
    </>
  );
};
export default ConnectPage;

