import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';

import ErrorBoundary from './components/common/ErrorBoundary';

import Header from './components/common/header/Header';
import Footer from './components/common/footer/Footer';

import Home from './pages/Home';
import BoatDetails from './components/boat/boat-details/BoatDetails';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/boat/:id" element={<BoatDetails />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
