import pool from "../database/db.js";
import bcrypt from "bcrypt";

// pour gérer les tours d'itération afin d'avoir un fort cryptage du mdp
const saltRounds = 10;

//Création utilisateur
const UserRegister = (req, res) => {
  bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
    pool.query(
      "INSERT INTO users (name, firstname, email, password) VALUES (?, ?, ?, ?)",
      [req.body.name, req.body.firstname, req.body.email, hash],
      function (error, result, fields) {
        res.json(result);
      }
    );
  });
};

//Connexion utilisateur
const UserLog = (req, res) => {
  pool.query(
    "SELECT * FROM users WHERE email = ?",
    [req.body.email],
    function (error, result, fields) {
      if (result.length === 0) {
        res.json({ reponse: false, message: "L'identifiant est inconnu" });
      } else {
        bcrypt.compare(
          req.body.password,
          result[0].password,
          function (err, result2) {
            if (!result2) {
              res.json({
                reponse: false,
                message: "Le mot de passe est incorrect",
              });
            } else {
              res.json({
                reponse: true,
                id: result[0].id,
              });
            }
          }
        );
      }
    }
  );
};

//Récuperation utilisateur via son ID
const UserById = (req, res) => {
  let id = req.params.id;
  console.log(id);
  pool.query(
    "SELECT * FROM users WHERE id = ?",
    [id],
    function (error, user, fields) {
      res.json(user[0]);
    }
  );
};

//Modification utilisateur
const UserUpdate = (req, res) => {
  bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
    pool.query(
      "UPDATE users SET name = ?, firstname = ?, email = ?, password = ? WHERE id = ?",
      [req.body.name, req.body.firstname, req.body.email, hash, req.body.id],
      function (error, result, fields) {
        res.json(result);
      }
    );
  });
};

//Suppression utilisation
const UserDelete = (req, res) => {
  let id = req.params.id;
  console.log(id);
  pool.query(
    "DELETE users FROM users WHERE id = ?",
    [id],
    function (error, user, fields) {
      res.json(user[0]);
    }
  );
};
export { UserRegister, UserLog, UserById, UserUpdate, UserDelete };
