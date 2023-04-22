//Dépendances
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const DisconnectPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    //Remise à zéro de l'ID
    dispatch({
      type: "disconnect_users",
    });
    //Redirection vers l'accueil
    navigate("/");

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <></>;
};

export default DisconnectPage;
