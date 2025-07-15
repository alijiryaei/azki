import {Route, Routes} from 'react-router';
import './App.css';
import {RegisterPage} from './pages/register';
function App() {
  return (
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
