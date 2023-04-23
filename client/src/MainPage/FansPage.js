//Dépendance
import { useState, useEffect } from "react";

const FansPage = () => {
  const [fans, setFans] = useState([]);
  const [category, setCategory] = useState([]);

  //Recupération de la route côté serveur
  useEffect(() => {
    fetch("/category")
      .then((response) => response.json())
      .then((res) => {
        setCategory(res);
      });

    fetch("/fans")
      .then((response) => response.json())
      .then((res) => {
        setFans(res);
      });
  }, []);

  return (
    <>
      <img
        className="bandeau"
        src="../img/conception/bandeau.jpg"
        alt="bandeau"
      />
      {category.map((category, i) => (
        <section className="terms" key={i}>
          <h1>{category.name}</h1>
          <p className="pitch">{category.description}</p>
          <img
            className="photos description article"
            src={"/img/" + category.image}
            alt={category.name}
          />
          <section className="description article">
            {fans.map(
              (fans, i) =>
                fans.category_id === category.id && (
                  <article>
                    <h2>{fans.name}</h2>
                    <div>
                      <img
                        className="photos"
                        src={"/img/" + fans.image}
                        alt={fans.name}
                      />
                    </div>
                    <div>
                      <button>
                        <a className="link" href={"/fans/" + fans.id}>
                          Je découvre ce produit
                        </a>
                      </button>
                    </div>
                  </article>
                )
            )}
          </section>
        </section>
      ))}
    </>
  );
};

export default FansPage;
