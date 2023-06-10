import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectRoute = ({ children }) => {
      //Constante des données issues du state global si si si gracias
    const { idUser } = useSelector((state) => state);
    const isAuth = idUser !== null;
    console.log(isAuth);
    
    if (isAuth) {
        return children;
    } else {
        return <Navigate to="/" />;
    }
};

export default ProtectRoute;

