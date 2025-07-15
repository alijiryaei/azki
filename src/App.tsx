import {Route, Routes} from 'react-router';
import './App.css';
import {RegisterPage} from './pages/register';
import {AppLayout} from './components/layouts/appLayout';
import {InsurancesPage} from './pages/insurances';

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/insurances" element={<InsurancesPage />} />
      </Route>
    </Routes>
  );
}

export default App;
