const Home = () => {
  return (
    <>
      <section className="title">
        <h1>
          Bienvenue chez Lovelies Africa, l'Art de la mode et de la décoration
          éclectique éthnique-chic!
        </h1>
        <p>
          Voyageons ensemble dans notre univers afro-chic pour un dépaysement
          total assuré !
        </p>
      </section>

      {/* carroussel */}

      <section className="description">
        <article className="article">
          <h2>Détendez-vous grâce à l’éventail La Dakaroise !</h2>
          <p>
            Emportez-le partout avec vous, il vous apportera fraîcheur grâce à
            son corps robuste et léger. Il est refermable dans sa pochette, ce
            qui en fait un ventilateur à main et un allié parfait dans votre
            sac.
          </p>
        </article>
        <article className="article">
          <img
            className="photos"
            src="../img/product/complete_violet_transparent.png"
            alt="éventail violet"
          />
        </article>
      </section>

      <section className="description">
        <article className="article">
          <img
            className="photos"
            src="../img/conception/mannequin1.jpg"
            alt="mannequin avec éventail violet"
          />
        </article>
        <article className="article">
          <h2>L'éventail à la casquette fashion</h2>
        </article>
        <article className="article">
          <p>
            Idéal pour apporter de la gaieté, une touche pop et colorée à vos
            looks quotidiens l'éventail accompagnera vos tenues tel un
            accessoire de mode.
          </p>
        </article>
        <article className="article">
          <img
            className="photos"
            src="../img/conception/mannequin3.jpg"
            alt="mannequin avec éventail bleu"
          />
        </article>
      </section>

      <section className="description">
        <article className="article">
          <img
            className="photos"
            src="../img/conception/deco1.jpg"
            alt="decoration eventail bleu"
          />
        </article>
        <article className="article">
          <h2>Déco minimaliste ou maximaliste, il est fait pour vous !</h2>
        </article>
        <article className="article">
          <p>
            L'éventail La Dakaroise est un accessoire décoratif raffiné
            célébrant toutes les tendances d'intérieurs. Exposez le au grès de
            vos envies, sur le mur, sur la table, ou encore où votre imagination
            vous mènera pour une ambiance art-déco assurée.
          </p>
        </article>
        <article className="article">
          <img
            className="photos"
            src="../img/conception/deco3.jpeg"
            alt="decoration eventail violet"
          />
        </article>
      </section>

      {/* <section>
        <h2>
          <span>La voici, la voila... La Dakaroise... Regardez la...</span>
        </h2>
        <video poster="../img/conception/logo_noir.jpg" controls>
          <source src="/client/public/medias/video_violet.mov" autoPlay loop muted type="video/mov" />
        </video>
      </section>
        <video src="" autoPlay loop muted></video> */}
    </>
  );
};

export default Home;
