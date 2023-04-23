//Dépendances
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const UserInfos = () => {
  const [name, setName] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  //Redirection
  const navigate = useNavigate();

  //Appel d'action
  const dispatch = useDispatch();

  //State de gestion d'état de désactivation du formulaire
  const [disable, setDisable] = useState(true);

  //Constante des données issues du state global
  const { idUser } = useSelector((state) => state);

  //Récupération de l'utilisateur côté serveur
  useEffect(() => {
    fetch("/api/getUser/" + idUser)
      .then((response) => response.json())
      .then((response) => {
        setName(response.name);
        setFirstname(response.firstname);
        setEmail(response.email);
      });
  }, [idUser]);

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

  //Envoi des modifications des données user
  const edit = () => {
    setDisable(!disable);

    if (disable === false) {
      //Valeurs à modifier dans la BDD
      let datas = {
        name: name,
        firstname: firstname,
        email: email,
        password: password,
        id: idUser,
      };
      // Gestion de la requête
      let req = new Request("/userUpdate", {
        method: "post",
        body: JSON.stringify(datas),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      fetch(req)
        .then((response) => response.json())
        .then((response) => {
          setMessage("Les modifications ont bien été mises à jour");
        });
    }
  };

  //Envoi des données utilisateur à vide
  const UserDelete = (idUser) => {
    let datas = {
      name: "",
      firstname: "",
      email: "",
      password: "",
      id: "",
    };

    // Gestion de la requête
    let req = new Request(`http://localhost:9000/UserDelete/${idUser}`, {
      method: "post",
      body: JSON.stringify(datas),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    fetch(req)
      .then((response) => response.json())
      .then((response) => {
        dispatch({});

        navigate("/");
      }, []);
  };

  return (
    <form>
      <div>
        <label htmlFor="name">Nom</label>
        <input
          type="text"
          id="name"
          value={name}
          disabled={disable}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="firstname">Prénom</label>
        <input
          type="text"
          id="fistname"
          value={firstname}
          disabled={disable}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          disabled={disable}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="password">Votre mot de passe</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handleChange}
        />
      </div>

      {/* En cas de message => affichage*/}
      {message !== "" && <p>{message}</p>}
      <button className="link" type="button" onClick={edit}>
        {disable === true ? "Modifier" : "Valider les modifications"}
      </button>

      <button
        className="link"
        type="button"
        onClick={() => {
          UserDelete(idUser);
        }}
      >
        Supprimer
      </button>
    </form>
  );
};

export default UserInfos;
