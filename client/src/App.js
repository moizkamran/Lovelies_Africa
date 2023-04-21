//import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./MainPage/AboutPage";
import AssociationPage from "./MainPage/AssociationPage";
import HomePage from "./MainPage/HomePage";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import FanPage from "./MainPage/FanPage";
import FansPage from "./MainPage/FansPage";
import ContactPage from "./MainPage/ContactPage";
import SalesConditions from "./MainPage/policies/SalesConditions";
import FAQ from "./MainPage/policies/FAQ";
import LegalNotice from "./MainPage/policies/LegalNotice";
import PrivatePolicy from "./MainPage/policies/PrivatePolicy";
import RefundPolicy from "./MainPage/policies/RefundPolicy";
import ConnectPage from "./MainPage/ConnectPage";
import DisconnectPage from "./MainPage/DisconnectPage.js"
import NewAccountPage from "./MainPage/NewAccountPage";
import BoardPage from "./MainPage/BoardPage";


function App() {
  return (
    <>
      <Header />
      <main className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/association" element={<AssociationPage />} />
            <Route path="/fans/:id" element={<FanPage />} />
            <Route path="/collection" element={<FansPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/cgv" element={<SalesConditions />} />
            <Route path="/FAQ" element={<FAQ />} />
            <Route path="/legalnotice" element={<LegalNotice />} />
            <Route path="/privatepolicy" element={<PrivatePolicy />} />
            <Route path="/refundpolicy" element={<RefundPolicy />} />
            <Route path="/account" element={<BoardPage />} />
            <Route path="/newAccountPage" element={<NewAccountPage />} />
            <Route path="/connectPage" element={<ConnectPage />} />
            <Route path="/disconnect" element={<DisconnectPage />} />
            
          </Routes>
        </BrowserRouter>
      </main>
      <Footer />;
    </>
  );
}
export default App;

//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
