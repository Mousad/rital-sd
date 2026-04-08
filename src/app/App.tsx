import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { LoadingScreen } from "./components/LoadingScreen";

import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/ServicesPage";
import { ScholarshipsPage } from "./pages/ScholarshipsPage";
import CoursesPage from "./pages/CoursesPage";
import AboutPage from "./pages/AboutPage";
import UniversityDetail from "./pages/UniversityDetail";
import ConsultationPage from "./pages/ConsultationPage";
import CertificateServices from "./pages/CertificateServices";
import ScrollToTop from "./components/ScrollToTop"; // استدعاء المكون الجديد

import StudyInEgypt from "./pages/StudyInEgypt";
import StudyChina from "./pages/StudyChina";
export default function App() {
  return (
    <BrowserRouter>
      <Header />

      {/* ScrollToTop ensures new pages open from top */}
      <ScrollToTop />
      {/* <LoadingScreen /> */}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/scholarships" element={<ScholarshipsPage />} />
        <Route path="/study-egypt" element={<StudyInEgypt />} />
        <Route path="/study-china" element={<StudyChina />} />
        <Route path="/services/courses" element={<CoursesPage />} />
        <Route path="/services/consultation" element={<ConsultationPage />} />
        <Route path="/services/certificateservices" element={<CertificateServices />} />
        <Route path="/about" element={<AboutPage />} />
     
        <Route path="/universities/:id" element={<UniversityDetail />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}