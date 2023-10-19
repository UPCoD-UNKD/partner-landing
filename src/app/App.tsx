
import AffiliatePage from "pages/AffiliatePage/AffiliatePage";
import PaymentsPage from "pages/PaymentsPage/PaymentsPage";
import OverviewPage from "pages/Overviewpage/OverviewPage";
// import RegistrationPage from "pages/Registrationpage/RegistrationPage";
import RequisitesPage from "pages/Requisitespage/RequisitesPage";
// import SignUpPage from "pages/Signuppage/SignUpPage";
import ClientsPage from "pages/ClientsPage/ClientsPage";
import { Route, Routes } from "react-router-dom";
import LinkManagementPage from "pages/LinkManagementPage/LinkManagementPage";
import ApiPage from "pages/APIPage/ApiPage";
// import IndexPage from "pages/index";


function App() {

  return (
  //  <IndexPage />
  <>
  <Routes>
      <Route element={ <RequisitesPage />} path="/" />
      <Route element={ <OverviewPage />} path="/overview" />
      <Route element={<ClientsPage />} path="/clients" />
      <Route element={<PaymentsPage /> } path="/payments" />
      <Route element={<AffiliatePage />} path="/affiliate" />
      <Route element={<LinkManagementPage />} path="/links" />
      <Route element={<ApiPage />} path="/api" />
    </Routes>
  </>
  );
}

export default App;



