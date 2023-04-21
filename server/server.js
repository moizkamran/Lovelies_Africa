//Dépendences
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./routes/router.js";

//Constantes
const app = express();
const hostname = "localhost";
const port = 9000;
const BASE_URL = `http://${hostname}:${port}`;

//Fichiers statiques
app.use(express.static("public"));

//Autorisation des requêtes (react -> serveur)
app.use(cors());

//Récuperation des informations json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Routes
app.use("/", router);

//Connexion serveur
app.listen(port, () => {
  console.log(`App listening at ${BASE_URL}`);
});
