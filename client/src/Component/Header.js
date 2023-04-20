import Nav from "./Nav";
//import Cart from "./Cart";

const Header = () => {
  return (
    <header id="header">
      <section className="infos">
        <p>
          {" "}
          Bienvenue sur notre boutique réservée aux professionnels B to B !
        </p>
      </section>
      <section className="branding">
        <img
          id="logo"
          src="../img/conception/logo_noir.jpg"
          alt="Logo Lovelies Africa"
        />

        {/* <Cart /> */}
      </section>
      <Nav />
    </header>
  );
};

export default Header;
