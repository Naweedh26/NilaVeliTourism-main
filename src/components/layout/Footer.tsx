import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import logo from '@/assets/logo.jpeg';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Logo" className="w-10 h-10 rounded-full object-cover" />
              <span className="font-bold text-base">Nilaveli Taxi & Tourism Agency (PVT) Ltd.</span>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Your trusted travel partner in Nilaveli & Trincomalee, Sri Lanka. Safe, affordable, and customized travel services.
            </p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/share/1PF9o6NDVS/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-ocean-600 rounded-full flex items-center justify-center hover:bg-ocean-700 transition" title="Follow us on Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/trincohub?utm_source=qr&igsh=MXNuaXZnbDJrZGpsYQ==" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-ocean-600 rounded-full flex items-center justify-center hover:bg-ocean-700 transition" title="Follow us on Instagram">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-300 hover:text-ocean-400 transition">Home</Link></li>
              <li><Link to="/taxi" className="text-gray-300 hover:text-ocean-400 transition">Taxi Services</Link></li>
              <li><Link to="/safari" className="text-gray-300 hover:text-ocean-400 transition">Wildlife Safari</Link></li>
              <li><Link to="/boat-tours" className="text-gray-300 hover:text-ocean-400 transition">Boat Tours</Link></li>
              <li><Link to="/accommodation" className="text-gray-300 hover:text-ocean-400 transition">Accommodation</Link></li>
              <li><Link to="/city-tour" className="text-gray-300 hover:text-ocean-400 transition">City Tour</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>✔ Islandwide Taxi Services</li>
              <li>✔ Wildlife Jeep Safaris</li>
              <li>✔ Whale & Dolphin Watching</li>
              <li>✔ Snorkeling & Boat Tours</li>
              <li>✔ Villas & Accommodation</li>
              <li>✔ Tuk-Tuk & Scooter Rentals</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 text-ocean-400 flex-shrink-0" />
                <span className="text-gray-300">No.188, Ward No-01, Nilaveli 31010, Trincomalee, Sri Lanka</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-ocean-400" />
                <a href="tel:+94713516515" className="text-gray-300 hover:text-ocean-400 transition">+94 71 3516515</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-ocean-400" />
                <a href="mailto:trincohub@gmail.com" className="text-gray-300 hover:text-ocean-400 transition">trincohub@gmail.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Nilaveli Taxi & Tourism Agency (PVT) Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
