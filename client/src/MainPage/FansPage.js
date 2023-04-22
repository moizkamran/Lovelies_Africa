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
      {category.map((category, i) => (
        <section className="category" key={i}>
          <img
            className="photos"
            src={"/img/" + category.image}
            alt={category.name}
          />
          <h2>{category.name}</h2>
          <p>{category.description}</p>

          <section className="fans">
            {fans.map(
              (fans, i) =>
                fans.category_id === category.id && (
                  <article>
                    <h3>{fans.name}</h3>
                    <div>
                      <img
                        className="photos"
                        src={"/img/" + fans.image}
                        alt={fans.name}
                      />
                    </div>
                    <div>
                      <button>
                        <a className="btn" href={"/fans/" + fans.id}>
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
