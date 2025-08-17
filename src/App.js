import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';

import Header from './components/common/header/Header';
import Footer from './components/common/footer/Footer';

import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route index element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
