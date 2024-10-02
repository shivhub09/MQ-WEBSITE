import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import GalleryPage from './pages/GalleryPage/GalleryPage';
import ContactPage from './pages/ContactPage/ContactPage';
import CareerPage from './pages/CareerPage/CareerPage';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import OfferingsPage from './pages/OfferingsPage/OfferingsPage';
import Navbar from './utils/Navbar/Navbar';
import Footer from './utils/Footer/Footer';
import SchoolProgram from './pages/OfferingsPage/SchoolProgram/SchoolProgram';
import SportsAcademy from './pages/OfferingsPage/SportsAcademy/SportsAcademy';
import ACE from './pages/OfferingsPage/ACE/ACE';
import BrandSponsorship from './pages/OfferingsPage/BrandSponsorship/BrandSponsorship';

function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/aboutUs" element={<AboutUsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/ourOfferings/in-school-program" element={<SchoolProgram />} />
        <Route path="/ourOfferings/sports-academy" element={<SportsAcademy />} />
        <Route path="/ourOfferings/ace" element={<ACE />} />
        <Route path="/ourOfferings/brand-sponsorship" element={<BrandSponsorship />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
