// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import UserInfos from "../Component/UserInfos";

const BoardPage = () => {

  // const [id, setId] = useState(0);

  // const navigate = useNavigate();
  // const { idUser } = useSelector((state) => state);

  // useEffect(() => {
  //    (idUser == null) {
  //     navigate("/connect");
  //   } 
  // }, [idUser, navigate]);

  // const details = (e) => {
  //   setId(e.currentTarget.dataset.id);
  // };

  return (
    <>
      <h1 className="account-title">Mon compte</h1>

      <h2 className="infos-title">Mes informations</h2>
      <UserInfos />

    <h2>Mes bons de commande validés</h2>

    <h2>Mes factures</h2>

    </>
  );
};

export default BoardPage;
