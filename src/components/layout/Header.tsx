import { useState, createContext, useContext, ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.jpeg';

type Currency = 'LKR' | 'USD';

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
}

const CurrencyContext = createContext<CurrencyContextType>({
  currency: 'LKR',
  setCurrency: () => {},
});

export const useCurrency = () => useContext(CurrencyContext);

export const CurrencyProvider = ({ children }: { children: ReactNode }) => {
  const [currency, setCurrency] = useState<Currency>('LKR');
  
  return (
    <CurrencyContext.Provider value={{ currency, setCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currency, setCurrency } = useCurrency();
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/taxi', label: 'Taxi Services' },
    { path: '/safari', label: 'Safari' },
    { path: '/boat-tours', label: 'Boat Tours' },
    { path: '/accommodation', label: 'Accommodation' },
    { path: '/rentals', label: 'Rentals' },
    { path: '/city-tour', label: 'City Tour' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Nilaveli Taxi & Tourism Agency Logo" className="w-12 h-12 rounded-full object-cover" />
            <div className="flex flex-col">
              <span className="font-bold text-base text-ocean-700 leading-tight">Nilaveli Taxi & Tourism Agency (PVT) Ltd.</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-ocean-600 ${
                  isActive(link.path) ? 'text-ocean-600' : 'text-gray-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
            {/* Currency Toggle */}
            <div className="flex items-center gap-1 bg-gray-100 rounded-full p-1">
              <button
                onClick={() => setCurrency('LKR')}
                className={`px-3 py-1 rounded-full text-sm font-medium transition ${
                  currency === 'LKR' ? 'bg-ocean-600 text-white' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                LKR
              </button>
              <button
                onClick={() => setCurrency('USD')}
                className={`px-3 py-1 rounded-full text-sm font-medium transition ${
                  currency === 'USD' ? 'bg-ocean-600 text-white' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                USD
              </button>
            </div>
            <a
              href="https://wa.me/94713516515"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-tropical-600 hover:bg-tropical-700">
                WhatsApp Booking
              </Button>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-sm font-medium transition-colors hover:text-ocean-600 py-2 ${
                  isActive(link.path) ? 'text-ocean-600' : 'text-gray-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
            {/* Mobile Currency Toggle */}
            <div className="flex items-center gap-2 py-2">
              <DollarSign className="w-4 h-4 text-gray-600" />
              <span className="text-sm text-gray-600">Currency:</span>
              <div className="flex gap-2">
                <button
                  onClick={() => setCurrency('LKR')}
                  className={`px-4 py-1 rounded-full text-sm font-medium transition ${
                    currency === 'LKR' ? 'bg-ocean-600 text-white' : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  LKR
                </button>
                <button
                  onClick={() => setCurrency('USD')}
                  className={`px-4 py-1 rounded-full text-sm font-medium transition ${
                    currency === 'USD' ? 'bg-ocean-600 text-white' : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  USD
                </button>
              </div>
            </div>
            <a
              href="https://wa.me/94713516515"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2"
            >
              <Button className="w-full bg-tropical-600 hover:bg-tropical-700">
                WhatsApp Booking
              </Button>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
