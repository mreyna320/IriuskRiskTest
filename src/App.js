import { Routes, Route } from 'react-router-dom';


import HomePage from './containers/home';
import './App.scss';
import Layout from './components/layout';
import StarshipsPage from './containers/starships';
import VehiclesPage from './containers/vehicles';


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/starships" element={<StarshipsPage />} />
        <Route path="/vehicles" element={<VehiclesPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
