import { Navigate, Route, Routes } from 'react-router-dom';
import SiteLayout from './components/SiteLayout';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import DownloadPage from './pages/DownloadPage';
import HomePage from './pages/HomePage';
import LegalPage from './pages/LegalPage';
import { privacySections, termsSections } from './content';

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/index.html" element={<Navigate to="/" replace />} />
        <Route path="/download.html" element={<Navigate to="/download" replace />} />
        <Route path="/contact.html" element={<Navigate to="/contact" replace />} />
        <Route path="/terms.html" element={<Navigate to="/terms" replace />} />
        <Route path="/privacy.html" element={<Navigate to="/privacy" replace />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/download" element={<DownloadPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route
          path="/terms"
          element={
            <LegalPage
              title="Terms of Service"
              description="These Terms of Service govern your use of Racvest as a sender, courier, visitor, or business partner. By accessing or using the platform, you agree to the terms below."
              pills={[
                'Effective date: April 14, 2026',
                'Applies to web and mobile use',
              ]}
              sections={termsSections}
            />
          }
        />
        <Route
          path="/privacy"
          element={
            <LegalPage
              title="Privacy Policy"
              description="This Privacy Policy explains how Racvest collects, uses, stores, and protects personal information when you use our website, mobile app, and related services."
              pills={[
                'Effective date: April 14, 2026',
                'Data use and protection overview',
              ]}
              sections={privacySections}
            />
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
