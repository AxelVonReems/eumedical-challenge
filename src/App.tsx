import { BrowserRouter, Outlet, Routes, Route, Navigate } from 'react-router-dom';

// 1. Utilities and Helpers
import ScrollToTop from './utils/ScrollToTop';

// 2. Global Layouts
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import DashboardLayout from './components/layout/DashboardLayout';

// 3. Public Pages
import Index from './pages/landing/Index';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';

// 4. Service Pages
import DigitalCare from './pages/services/DigitalCare';
import HomeCare from './pages/services/HomeCare';
import MedicalNetwork from './pages/services/MedicalNetwork';
import Technology from './pages/services/Technology';

// 5. Legal Pages
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import TermsOfService from './pages/legal/TermsOfService';

// 6. Authentication Pages
import Login from './pages/auth/Login';

// 7. Patient Portal (Dashboard Views)
import DashboardIndex from './pages/dashboard/DashboardIndex';
import DashboardConsultas from './pages/dashboard/DashboardConsultas';
import DashboardHistorial from './pages/dashboard/DashboardHistorial';
import DashboardDocumentos from './pages/dashboard/DashboardDocumentos';
import DashboardRecetas from './pages/dashboard/DashboardRecetas';
import DashboardPerfil from './pages/dashboard/DashboardPerfil';

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
          {/* Public Website Routes */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Services Group */}
            <Route path="/services/digital-care" element={<DigitalCare />} />
            <Route path="/services/home-care" element={<HomeCare />} />
            <Route path="/services/medical-network" element={<MedicalNetwork />} />
            <Route path="/services/technology" element={<Technology />} />
            
            {/* Legal Group */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
          </Route>

          {/* Standalone Authentication */}
          <Route path="/login" element={<Login />} />

          {/* Authenticated Patient Portal */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardIndex />} />
            <Route path="appointments" element={<DashboardConsultas />} />
            <Route path="history" element={<DashboardHistorial />} />
            <Route path="documents" element={<DashboardDocumentos />} />
            <Route path="prescriptions" element={<DashboardRecetas />} />
            <Route path="profile" element={<DashboardPerfil />} />
          </Route>

          {/* Fallback Catch-All Route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
