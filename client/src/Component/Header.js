import Nav from "./Nav";

const Header = () => {
  return (
    <header id="header">
      <section className="infos">
        <p>Bienvenue sur notre boutique réservée aux professionnels B to B</p>
      </section>
      <section className="branding">
        <img
          id="logo"
          src="../img/conception/logo_noir.jpg"
          alt="Logo Lovelies Africa"
        />
      </section>
      {/* Affichage de la nav */}
      <Nav />
    </header>
  );
};

export default Header;
