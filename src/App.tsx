import {Route, Routes} from 'react-router';
import './App.css';
import {RegisterPage} from './pages/register';
import {AppLayout} from './components/layouts/appLayout';
import {InsurancesPage} from './pages/insurances';
import {VehicleTypePage} from './pages/vehicleType';
import {InsuranceCompanyPage} from './pages/insuranceCompany';
import {DiscountPage} from './pages/discount';

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/insurances" element={<InsurancesPage />} />
        <Route path="/vehicleType" element={<VehicleTypePage />} />
        <Route path="/insuranceCompany" element={<InsuranceCompanyPage />} />
        <Route path="/discount" element={<DiscountPage />} />
      </Route>
    </Routes>
  );
}

export default App;
