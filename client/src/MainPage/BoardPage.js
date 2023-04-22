import UserInfos from "../Component/UserInfos";

const BoardPage = () => {
  return (
    <>
      <section className="title">
        <h1>Mon compte</h1>
      </section>

      <section className="infos">
        <div>
          <h2>Mes informations</h2>
          {/* affichage du composant userinfo */}
          <UserInfos />
        </div>
        <div>
          <h2>Mes bons de commande validés</h2>
          <p>Vous trouverez prochainement vos bons de commande.</p>
        </div>
        <div>
          <h2>Mes factures</h2>
          <p> Vous trouverez prochainement vos factures.</p>
        </div>
      </section>
    </>
  );
};

export default BoardPage;
