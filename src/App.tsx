import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { CurrencyProvider } from '@/components/layout/Header';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HomePage from '@/pages/HomePage';
import TaxiServicesPage from '@/pages/TaxiServicesPage';
import SafariPage from '@/pages/SafariPage';
import BoatToursPage from '@/pages/BoatToursPage';
import AccommodationPage from '@/pages/AccommodationPage';
import VehicleRentalPage from '@/pages/VehicleRentalPage';
import CityTourPage from '@/pages/CityTourPage';
import GalleryPage from '@/pages/GalleryPage';
import ContactPage from '@/pages/ContactPage';

function App() {
  return (
    <Router>
      <CurrencyProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/taxi" element={<TaxiServicesPage />} />
              <Route path="/safari" element={<SafariPage />} />
              <Route path="/boat-tours" element={<BoatToursPage />} />
              <Route path="/accommodation" element={<AccommodationPage />} />
              <Route path="/rentals" element={<VehicleRentalPage />} />
              <Route path="/city-tour" element={<CityTourPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
          <Toaster position="top-center" richColors />
        </div>
      </CurrencyProvider>
    </Router>
  );
}

export default App;
