//Dépendences
import mysql from "mysql";

//BDD
let pool = mysql.createPool({
  connectionLimit: 10000,
  host: "db.3wa.io",
  user: "nakanatraore",
  password: "fb9c911bd87e445842b7d19686bfd80e",
  database: "nakanatraore_lovelies_africa",
});

//Connexion
pool.getConnection((err, connection) => {
  console.log("Connectée à la base de donnée");
  if (err) throw err;
});

export default pool;
