import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Orderdetail from "../Component/OrderDetail";
import UserInfos from "../Component/UserInfos";

const BoardPage = () => {
  const [orders, setOrders] = useState([]);
  const [id, setId] = useState(0);

  const navigate = useNavigate();
  const { idUser } = useSelector((state) => state);

  useEffect(() => {
    if (idUser == null) {
      navigate("/connect");
    } else {
      fetch("/api/getOrders/" + idUser)
        .then((response) => response.json())
        .then((response) => {
          setOrders(response);
          console.log(response);
        });
    }
  }, [idUser, navigate]);

  const details = (e) => {
    setId(e.currentTarget.dataset.id);
  };

  return (
    <>
      <h1 className="account-title">Mon compte</h1>

      <h2 className="infos-title">Mes informations</h2>
      <UserInfos />

      <h2 className="orders-title">Mes commandes</h2>
      <div className="flex">
        <table className="commande">
          <thead>
            <tr>
              <th>Numéro de commande</th>
              <th>Date de la commande</th>
              <th>Montant de la commande</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, i) => {
              return (
                <tr key={i}>
                  <td>{order.id}</td>
                  <td>{new Date(order.date).toLocaleDateString()}</td>
                  <td>{order.total.toFixed(2)} €</td>
                  <td>
                    <button data-id={order.id} onClick={details}>
                      <i class="fa fa-eye"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {id !== 0 && <Orderdetail id={id} />}
      </div>
    </>
  );
};

export default BoardPage;
