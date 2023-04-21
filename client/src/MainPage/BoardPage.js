// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import UserInfos from "../Component/UserInfos";

const BoardPage = () => {
  return (
    <>
      <h1 className="account-title">Mon compte</h1>

      <h2 className="infos-title">Mes informations</h2>
      <UserInfos />

      <h2>Mes bons de commande validés</h2>
      <p>Vous trouverez prochainement vos bons de commande</p>
      <h2>Mes factures</h2>
      <p> Vous trouverez prochainement vos factures</p>
    </>
  );
};

export default BoardPage;
