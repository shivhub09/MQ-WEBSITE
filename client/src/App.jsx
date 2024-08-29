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


function App() {

  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>} />
          <Route path="/aboutUs" element={<AboutUsPage></AboutUsPage>}></Route>
          <Route path="/gallery" element={<GalleryPage></GalleryPage>}></Route>
          <Route path="/contact" element={<ContactPage></ContactPage>}></Route>
          <Route path="/career" element={<CareerPage></CareerPage>}></Route>
          <Route path="/ourOfferings" element={<OfferingsPage></OfferingsPage>}></Route>
        </Routes>
      </Router>
      {/* <Footer /> */}
    </>

  )
}

export default App
