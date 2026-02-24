import { Car, CheckCircle, MapPin, Clock, Shield, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useCurrency } from '@/components/layout/Header';
import { getPrice } from '@/lib/currency';
import taxiImage from '@/assets/taxi-fleet.jpg';
import taxiServiceImage from '@/assets/taxi-service.jpg';

const TaxiServicesPage = () => {
  const { currency } = useCurrency();
  const rates = [
    { 
      vehicle: 'Car', 
      rateLKR: 150,
      seats: '1-4 passengers',
      features: ['Air Conditioned', 'Professional Driver', 'Comfortable Sedan']
    },
    { 
      vehicle: 'Van', 
      rateLKR: 180,
      seats: '5-8 passengers',
      features: ['AC Family Van', 'Spacious Luggage', 'Group Travel']
    },
    { 
      vehicle: 'Tuk-Tuk', 
      rateLKR: 120,
      seats: '1-3 passengers',
      features: ['Local Experience', 'Quick City Rides', 'Budget Friendly']
    }
  ];

  const services = [
    {
      title: 'Airport Transfers',
      items: [
        'Colombo Airport to Trincomalee',
        'Trincomalee Airport Pickup/Drop',
        'Meet & Greet Service',
        'Luggage Assistance'
      ]
    },
    {
      title: 'City & Local Tours',
      items: [
        'Nilaveli Beach Area Tours',
        'Trincomalee City Sightseeing',
        'Temple & Cultural Tours',
        'Shopping & Restaurant Trips'
      ]
    },
    {
      title: 'Long Distance Travel',
      items: [
        'Trincomalee to Colombo',
        'Sri Lanka Round Tours',
        'Multi-City Packages',
        'Customized Itineraries'
      ]
    },
    {
      title: 'Special Services',
      items: [
        'Wedding Transportation',
        'Corporate Travel',
        'Private Driver for Days',
        'Hotel to Hotel Transfers'
      ]
    }
  ];

 const destinations = [
  { name: 'Colombo' },
  { name: 'Kandy' },
  { name: 'Sigiriya' },
  { name: 'Yala National Park' },
  { name: 'Ella' },
  { name: 'Arugam Bay' },
  { name: 'Galle' },
  { name: 'Jaffna' }
];
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] bg-cover bg-center" style={{ backgroundImage: `url(${taxiImage})` }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl text-white">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Best Taxi Service in Trincomalee & Nilaveli
              </h1>
              <p className="text-xl text-gray-200">
                Professional islandwide taxi services with experienced chauffeurs – Safe, affordable, and reliable transportation across Sri Lanka
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
              <div>
                <h2 className="text-3xl font-bold mb-4">Why Choose Our Taxi Service?</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Nilaveli Taxi & Tourism Agency (PVT) Ltd</strong> is your trusted partner for reliable and affordable taxi services in Nilaveli, Trincomalee, and across Sri Lanka.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We specialize in Colombo Airport transfers, long-distance taxi services, private day tours, and customized Sri Lanka round tours for tourists and local travelers.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Whether you need a taxi from Colombo Airport to Trincomalee, a private driver for sightseeing, or islandwide transport, we provide clean, comfortable vehicles with experienced and licensed chauffeurs.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img src={taxiServiceImage} alt="Professional Taxi Service" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-ocean-50 p-6 rounded-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-ocean-600 mb-1">24/7</div>
                <div className="text-sm text-gray-600">Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-ocean-600 mb-1">10+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-ocean-600 mb-1">100%</div>
                <div className="text-sm text-gray-600">Licensed Drivers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-ocean-600 mb-1">5000+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rates */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Transparent Taxi Rates (Round Trip)</h2>
          <p className="text-center text-gray-600 mb-10">No hidden charges – Pay only for what you use</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {rates.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition border-2 hover:border-ocean-600">
                <CardHeader>
                  <div className="w-16 h-16 bg-ocean-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Car className="w-8 h-8 text-ocean-600" />
                  </div>
                  <CardTitle className="text-2xl">{item.vehicle}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-ocean-600 mb-2">From {getPrice(item.rateLKR, currency, true)} per km</p>
                  <p className="text-gray-600 mb-4">👥 {item.seats}</p>
                  <div className="space-y-2">
                    {item.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center justify-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-tropical-600" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8 space-y-2">
            <p className="text-sm text-gray-600 flex items-center justify-center gap-2">
              <CheckCircle className="w-4 h-4 text-tropical-600" />
              Affordable taxi rates in Sri Lanka
            </p>
            <p className="text-sm text-gray-600 flex items-center justify-center gap-2">
              <CheckCircle className="w-4 h-4 text-tropical-600" />
              Transparent pricing – No hidden charges
            </p>
            <p className="text-sm text-gray-600 flex items-center justify-center gap-2">
              <CheckCircle className="w-4 h-4 text-tropical-600" />
              Free Quote for Custom Packages
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Complete Taxi Solutions for Every Need</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition">
                <CardHeader>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-tropical-600 mt-1">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-12 bg-gradient-to-br from-ocean-50 to-tropical-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Islandwide Coverage</h2>
          <p className="text-center text-gray-600 mb-10">We serve all major destinations across Sri Lanka</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {destinations.map((dest, index) => (
              <div key={index} className="bg-white p-4 rounded-lg hover:shadow-md transition border border-gray-100">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-ocean-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">{dest.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-ocean-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-ocean-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Safe & Secure</h3>
                <p className="text-sm text-gray-600">Licensed drivers, insured vehicles, and verified safety protocols</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-ocean-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-ocean-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Punctual Service</h3>
                <p className="text-sm text-gray-600">On-time pickups, reliable schedules, and time-conscious drivers</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-ocean-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-ocean-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">English Speaking</h3>
                <p className="text-sm text-gray-600">Friendly chauffeurs fluent in English and local languages</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-ocean-700 to-ocean-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Book Your Reliable Taxi Today</h2>
          <p className="text-lg mb-8 text-ocean-100 max-w-2xl mx-auto">
            Best taxi service in Trincomalee and Nilaveli with affordable prices, professional drivers, and instant booking confirmation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/94713516515" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-tropical-600 hover:bg-tropical-700">
                📱 WhatsApp Booking
              </Button>
            </a>
            <a href="tel:+94713516515">
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-white text-white">
                📞 Call Now
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TaxiServicesPage;
