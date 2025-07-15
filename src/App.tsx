import {Route, Routes} from 'react-router';
import './App.css';
import {RegisterPage} from './pages/register';
import {AppLayout} from './components/layouts/appLayout';

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/register" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
}

export default App;
