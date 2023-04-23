const AboutPage = () => {
  return (
    <>
      <section className="title terms">
        <img
          className="bandeau"
          src="../img/conception/bandeau.jpg"
          alt="bandeau"
        />
        <h1>À propos de Lovelies Africa</h1>
        <p className="pitch">
          Lovelies Africa est la marque B to B de Lovelies Premium Brand,
          entreprise passionnée e-commerce engagée dans les actions caritatives
          humanitaires.
        </p>
      </section>

      <section className="description">
        <article className="article">
          <img
            className="photos"
            src="../img/conception/case1.jpg"
            alt="case africaine"
          />
        </article>

        <article className="article">
          <h2>So French</h2>
          <p>
            Nous sommes une jeune entreprise française dynamique. Nous prônons
            dans tout ce que nous réalisons des valeurs d'amour et d'humanité.
            Nos créations sont confectionnées avec soin et réalisés dans un
            environnement de travail sain. Notre entrepôt de confection est
            situé à Dakar au Sénégal et notre entrepôt de finition et
            d'expédition est situé à Villeneuve saint Georges en France.
          </p>
        </article>

        <article className="article">
          <img
            className="photos"
            src="../img/conception/solidarite.png"
            alt="solidaire ensemble"
          />
        </article>

        <article className="article">
          <h2>Lorsque commerce rime avec communauté et humanité</h2>
          <p>
            Contribuons à un monde meilleur. Nous mettons un point d’honneur
            grâce à chaque achat client de redistribuer aux plus nécessiteux.
            Faites-vous plaisir tout en faisant une bonne action.
          </p>
          <button>
            <a className="link" href="/association">
              Je découvre l'association Lovelies People
            </a>
          </button>
        </article>
      </section>
    </>
  );
};

export default AboutPage;
