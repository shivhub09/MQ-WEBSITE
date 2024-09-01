import './App.css'
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
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>} />
          <Route path="/home" element={<HomePage></HomePage>} />
          <Route path="/aboutUs" element={<AboutUsPage></AboutUsPage>}></Route>
          <Route path="/gallery" element={<GalleryPage></GalleryPage>}></Route>
          <Route path="/contact" element={<ContactPage></ContactPage>}></Route>
          <Route path="/career" element={<CareerPage></CareerPage>}></Route>
          <Route path="/ourOfferings/in-school-program" element={<SchoolProgram></SchoolProgram>}></Route>
          <Route path="/ourOfferings/sports-academy" element={<SportsAcademy></SportsAcademy>}></Route>
          <Route path="/ourOfferings/ace" element={<ACE/>}></Route>
          <Route path="/ourOfferings/brand-sponsorship" element={<BrandSponsorship></BrandSponsorship>}></Route>
        </Routes>
      </Router>
    </>

  )
}

export default App
