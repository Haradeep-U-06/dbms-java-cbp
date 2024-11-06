import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import OfferRide from './pages/OfferRide';
import FindRide from './pages/FindRide';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/offer-ride" element={<OfferRide />} />
            <Route path="/find-ride" element={<FindRide />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;