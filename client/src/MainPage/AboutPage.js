const AboutPage = () => {
  return (
    <>
      <div>
        <h1>À propos de Lovelies Africa</h1>
        <p>
          Lovelies Africa Business est la marque B to B de Lovelies Premium
          Brand, entreprise passionnée e-commerce engagée dans les actions
          humanitaires et caritatives.
        </p>
      </div>

      <section id="descriptif_business">
        <article>
          <img
            className="photos"
            src="../img/conception/case1.jpg"
            alt="case africaine"
          />
        </article>
        <article>
          <h2>So French</h2>
          <p>
            Nous sommes une jeune entreprise française dynamique. Nous prônons
            dans tout ce que nous réalisons des valeurs d'amour et d'humanité.
            Nos créations sont confectionnées avec soin et réalisés dans un
            environnement de travail sain. Notre entrepôt de confection est
            situé à Dakar au Sénégal et notre entrepôt de finition et
            d'expédition est situé à Villeneuve saint Georges en France
          </p>
        </article>

        <article>
          <img
            className="photos"
            src="../img/conception/solidarite.png"
            alt="solidaire ensemble"
          />
        </article>
        <article>
          <h2>
            <span>Lorsque commerce rime avec communauté et humanité</span>
          </h2>
          <p>
            Contribuons à un monde meilleur. Nous mettons un point d’honneur
            grâce à chaque achat client de redistribuer aux plus nécessiteux.
            Faites-vous plaisir tout en faisant une bonne action.
          </p>
          <button>
            <a href="/association">Je découvre l'association Lovelies People</a>
          </button>
        </article>
      </section>
    </>
  );
};

export default AboutPage;
