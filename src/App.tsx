import { BrowserRouter, Outlet, Routes, Route } from 'react-router-dom';

import Index from './pages/landing/Index';

import ScrollToTop from './utils/ScrollToTop';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import DigitalCare from './pages/services/DigitalCare';
import HomeCare from './pages/services/HomeCare';
import MedicalNetwork from './pages/services/MedicalNetwork';
import Technology from './pages/services/Technology';

import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import TermsOfService from './pages/legal/TermsOfService';

import About from './pages/about/About';
import Contact from './pages/contact/Contact';

import Login from './pages/auth/Login';


import DashboardLayout from './components/layout/DashboardLayout';


// Define a layout for public pages that includes the Header
function PublicLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      {/* Outlet renders whatever child route is currently active */}
      <Outlet /> 
      <Footer />
    </div>
  );
}

function App() {

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />

        <Routes>
        {/* Routes that WILL have the Header */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/digital-care" element={<DigitalCare />} />
          <Route path="/services/home-care" element={<HomeCare />} />
          <Route path="/services/medical-network" element={<MedicalNetwork />} />
          <Route path="/services/technology" element={<Technology />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Route>

        {/* Routes that WILL NOT have the Header */}
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          {/* <Route index element={<DashboardIndex />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
