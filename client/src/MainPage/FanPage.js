import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const FanPage = () => {
  const { id } = useParams();
  const [fans, setFans] = useState({});

  //Récupération de la route du serveur
  useEffect(() => {
    fetch("/fans/" + id)
      .then((response) => response.json())
      .then((res) => {
        setFans(res);
      });
  }, [id]);

  return (
    <>
      <section className="container">
        <h1>{fans.name}</h1>

        <section>
          <img className="photos" src={"/img/" + fans.image} alt={fans.name} />
          <div className="price">
            <h3>
              <strong>{fans.price}€ HT</strong>
            </h3>
          </div>
        </section>

        <section>
          <p>{fans.description}</p>{" "}
        </section>
        <section>
          <div>
            <h3>
              <i>&#9734;</i> Caractéristiques
            </h3>
            <p>Éventail à manches pliables</p>
            <p>Motifs à couleurs variés</p>
          </div>
          <div>
            <h3>
              <i>&#10004;</i> Dimensions
            </h3>
            <p>Dimensions éventail : </p>
            <p>Ouvert : 36 cm (L) x 28 cm (l)</p>
            <p>Fermé : 22 cm (L) x 6 cm (l)</p>
            <p>Dimensions pochette :</p>
            <p>25 Cm (L) x 10 cm (l)</p>
            <p>
              Les dimensions peuvent varier légèrement, chaque éventail étant
              une pièce unique fait-main.
            </p>
          </div>
          <div>
            <h3>
              <i>&#9825;</i> Matériaux
            </h3>
            <p>Tissu wax</p>
            <p>Simili cuir</p>
            <p>Bois</p>
            <p>
              Les couleurs réelles peuvent différer de celles affichées selon la
              résolution de votre écran.
            </p>
          </div>
          <div>
            <h3>
              <i>&#9745;</i> Dans le colis
            </h3>
            <p>un éventail</p>
            <p>une pochette protectrice</p>
          </div>
        </section>
        <section>
          <p>
            <strong>
              <i>&#9993;</i> Enregistrez et complétez le formulaire de
              pré-commande afin de procéder à l'achat du produit en l'envoyant à{" "}
              <a href="mailto:contact@lovelies.africa.com">
                contact@loveliesafrica.com
              </a>
            </strong>
          </p>
          <img
            className="photos"
            src="../img/formulaire/form_buyer.jpg"
            alt=" infos acheteur formulaire de précommande"
          />
          <img
            className="photos"
            src="../img/formulaire/form_order.jpg"
            alt=" infos commande formulaire de précommande"
          />
        </section>
      </section>
    </>
  );
};

export default FanPage;
