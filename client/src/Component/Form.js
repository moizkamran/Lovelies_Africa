import { Form } from "react-router-dom";

//import Contact from './Contact';
const Contacts = ({plop}) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Téléphone</th>
                        <th>Email</th>
                        <th>Commentaire</th>
                    </tr>
                </thead>
                <tbody>
                {/* {plop.map((t, i) =><Contact key={i} poulpe = {t}/>) } */}
                </tbody>
            </table>
        </div>
    );
};

export default Form;