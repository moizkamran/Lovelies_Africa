//Dépendances
import express from "express";
import { fans, category, fanbyId } from "../controller/Fans.js";
import {
  UserRegister,
  UserLog,
  UserById,
  UserUpdate,
} from "../controller/Users.js";

// Constante
const router = express.Router();


//Éventails
router.get("/fans/", fans);
router.get("/category", category);
router.get("/fans/:id", fanbyId);

// Utilisateurs
router.post("/newAccountPage", UserRegister);
router.post("/connect", UserLog);
router.post("/api/connect", UserLog);
router.get("/api/getuser/:id", UserById);
router.post("/UserUpdate", UserUpdate);

export default router;
