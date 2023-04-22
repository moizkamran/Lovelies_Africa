const Footer = () => {
  return (
    <footer>
      <section className="nous">
        <h2>Pourquoi nous choisir ?</h2>
        <article>
          <img
            className="picto"
            src="../img/conception/ecolo.png"
            alt="qualité produit"
          ></img>
          <h3>Des produits de qualité</h3>
          <p>
            Nos tissus et matériaux sont sélectionnés avec soin et confectionnés
            par des artisans qualifiés.
          </p>
        </article>
        <article>
          <img
            className="picto"
            src="../img/conception/livraison.png"
            alt="livraison"
          ></img>
          <h3>Livraison offerte</h3>
          <p>
            À partir de 150 euros d'achat en France métropolitaine. Nos produits
            sont expédiés depuis notre entrepôt en France.
          </p>
        </article>
        <article>
          <img
            className="picto"
            src="../img/conception/enfants1.jpg"
            alt="association"
          ></img>
          <h3>Notre impact</h3>
          <p>
            Notre association Lovelies People dépend des ventes que nous
            réalisons afin de pouvoir concrétiser les projets humanitaires et
            caritatifs qui nous tiennent à coeur.
          </p>
        </article>
        <article>
          <img
            className="picto"
            src="../img/conception/qualite.png"
            alt="garantie"
          ></img>
          <h3>Notre garantie</h3>
          <p>Satisfait ou remboursé sous 14 jours</p>
        </article>
      </section>

      <section className="politiques">
        <ul>
          <li>
            <a href="/cgv">Conditions Générales de Vente</a>
          </li>
          <li>
            <a href="/privatepolicy">Politique de confidentialité</a>
          </li>

          <li>
            <a href="/legalnotice">Mention légales</a>
          </li>

          <li>
            <a href="/refundpolicy">Politique de retour et de remboursement</a>
          </li>

          <li>
            <a href="/FAQ">FAQ - Questions fréquentes</a>
          </li>

        </ul>
      </section>

      {/* <section>
        <span className="cb"></span>
        <span className="visa"></span>
        <span className="mastercard"></span>
        <span className="virement"></span>
      </section> */}
    </footer>
  );
};

export default Footer;
