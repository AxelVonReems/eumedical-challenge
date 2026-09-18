import { BrowserRouter, Outlet, Routes, Route } from 'react-router-dom';

import { Index } from './pages/landing/index';

import ScrollToTop from './utils/ScrollToTop';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import DigitalCare from './pages/services/DigitalCare';
import HomeCare from './pages/services/HomeCare';
import MedicalNetwork from './pages/services/MedicalNetwork';
import Technology from './pages/services/Technology';

import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import TermsOfService from './pages/legal/TermsOfService';



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

// Temporary placeholder components for testing
function LoginPage() {
  return <div className="flex min-h-screen items-center justify-center text-2xl">Login Page (No Header)</div>;
}

function DashboardPage() {
  return <div className="min-h-screen bg-eumedical-light-grey p-8 text-2xl">Dashboard (No Header)</div>;
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
          <Route path="/about" element={<div className="p-8">Sobre nosotros</div>} />
          <Route path="/contact" element={<div className="p-8">Contacto</div>} />
          <Route path="/services/digital-care" element={<DigitalCare />} />
          <Route path="/services/home-care" element={<HomeCare />} />
          <Route path="/services/medical-network" element={<MedicalNetwork />} />
          <Route path="/services/technology" element={<Technology />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Route>

        {/* Routes that WILL NOT have the Header */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
