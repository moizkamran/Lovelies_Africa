//Dépendances
import pool from "../database/db.js";

//Récupération BDD de la catégorie d'éventail
const category = (req, res) => {
  pool.query(`SELECT * FROM category`, function (error, category, fields) {
    res.json(category);
  });
};
// Récupération BDD de tous les éventails
const fans = (req, res) => {
  pool.query(
    `SELECT category.name as Categname, fans.image, fans.name, fans.id, fans.category_id 
    FROM fans 
    INNER JOIN category ON category.id = fans.category_id`,
    function (error, fans, fields) {
      res.json(fans);
    }
  );
};

// Récupération BDD d'un éventail
const fanbyId = (req, res) => {
  let id = req.params.id;
  
  pool.query(
    `SELECT * FROM fans WHERE id = ?`,
    [id],
    function (error, fans, fields) {
      res.json(fans[0]);
    }
  );
};
export { category, fans, fanbyId };
