import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Car, Palmtree, Ship, Home, MapPin, Camera, Award, Shield, Clock } from 'lucide-react';
import { useCurrency } from '@/components/layout/Header';
import { getPrice } from '@/lib/currency';
import heroImage from '@/assets/see.png';
import safariImage from '@/assets/safari-jeep.jpg';
import whaleImage from '@/assets/whale-watching.jpg';
import taxiImage from '@/assets/taxi.png';
import boatImage from '@/assets/boat-tour.jpg';
import accommodationImage from '@/assets/royal.png';

const HomePage = () => {
  const { currency } = useCurrency();
  const services = [
    {
      icon: Car,
      title: 'Islandwide Taxi Services',
      description: 'Professional airport transfers, city tours, and long-distance travel across Sri Lanka with experienced chauffeurs',
      image: taxiImage,
      link: '/taxi',
      priceLKR: 150
    },
    {
      icon: Palmtree,
      title: 'Wildlife Jeep Safaris',
      description: 'Thrilling safari adventures to Yala, Udawalawe, Wilpattu & Minneriya National Parks with expert guides',
      image: safariImage,
      link: '/safari',
      priceLKR: 19000
    },
    {
      icon: Ship,
      title: 'Boat Tours & Snorkeling',
      description: 'Explore Pigeon Island, whale watching, dolphin tours, and pristine snorkeling spots in crystal-clear waters',
      image: boatImage,
      link: '/boat-tours',
      priceLKR: 13000
    },
    {
      icon: Home,
      title: 'Accommodation',
      description: 'Comfortable AC & Non-AC villas, apartments near Nilaveli Beach for families, groups & corporate stays',
      image: accommodationImage,
      link: '/accommodation',
      priceLKR: null
    }
  ];

  const features = [
    {
      icon: Award,
      title: 'Licensed & Professional',
      description: 'Experienced chauffeurs, certified guides, and registered tourism service provider'
    },
    {
      icon: Shield,
      title: 'Safe & Reliable',
      description: 'Well-maintained vehicles, safety-first approach, and comprehensive insurance coverage'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Round-the-clock booking support, flexible schedules, and instant WhatsApp confirmation'
    }
  ];

  const destinations = [
    'Trincomalee Airport Transfer',
    'Colombo to Nilaveli',
    'Yala National Park Safari',
    'Pigeon Island Snorkeling',
    'Whale Watching Tours',
    'Sigiriya Day Tours',
    'Cultural Triangle Tours',
    'East Coast Beach Hopping'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] lg:h-[700px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>
        
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl text-white">
              <div className="inline-block bg-tropical-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                🌴 Your Trusted Travel Partner in Sri Lanka
              </div>
              <h6 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Nilaveli Taxi & Tourism Agency (Pvt) Ltd
              </h6>
              <p className="text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed">
                Professional Travel Services in Nilaveli & Trincomalee – Safe, Affordable & Unforgettable Adventures Across Sri Lanka
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="https://wa.me/94713516515" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-tropical-600 hover:bg-tropical-700 text-lg px-8 py-6">
                    📞 WhatsApp Booking
                  </Button>
                </a>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white text-lg px-8 py-6 backdrop-blur-sm">
                    Get Free Quote
                  </Button>
                </Link>
              </div>
              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-tropical-400 rounded-full"></span>
                  <span>Licensed Tourism Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-tropical-400 rounded-full"></span>
                  <span>Professional Guides</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-tropical-400 rounded-full"></span>
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Premium Travel Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From islandwide taxi services to thrilling wildlife safaris and ocean adventures – we make your Sri Lankan journey extraordinary
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link to={service.link} key={index}>
                  <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 h-full group">
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4 bg-ocean-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                        {service.priceLKR ? `From ${getPrice(service.priceLKR, currency, service.title === 'Islandwide Taxi Services')}` : 'Contact for rates'}
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-ocean-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-ocean-600 transition">
                          <Icon className="w-6 h-6 text-ocean-600 group-hover:text-white transition" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-2 group-hover:text-ocean-600 transition">
                            {service.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose Nilaveli Taxi & Tourism?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Trusted by thousands of travelers for safe, professional, and memorable experiences across Sri Lanka
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-ocean-500 to-ocean-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-gradient-to-r from-ocean-700 to-ocean-500 rounded-2xl p-8 lg:p-12 text-white text-center">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">Ready to Explore Sri Lanka?</h3>
            <p className="text-lg text-ocean-100 mb-6 max-w-2xl mx-auto">
              Book now and enjoy transparent pricing, no hidden charges, and personalized travel experiences
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/94713516515" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-tropical-600 hover:bg-tropical-700">
                  Book via WhatsApp
                </Button>
              </a>
              <a href="tel:+94713516515">
                <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-white text-white">
                  Call +94 71 3516515
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Popular Tour Destinations</h2>
            <p className="text-lg text-gray-600">
              We cover all major tourist attractions and destinations across Sri Lanka
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {destinations.map((destination, index) => (
              <div 
                key={index}
                className="bg-white p-4 rounded-lg text-center hover:shadow-lg transition border border-gray-100 hover:border-ocean-600"
              >
                <MapPin className="w-5 h-5 text-ocean-600 mx-auto mb-2" />
                <span className="text-sm font-medium text-gray-700">{destination}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-tropical-50 to-ocean-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Camera className="w-16 h-16 text-ocean-600 mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Start Your Sri Lankan Adventure Today
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Located in Nilaveli – Trincomalee, we provide customized travel packages, airport transfers, 
              wildlife safaris, boat tours, and comfortable accommodation for tourists and local travelers.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-bold mb-2">📍 Address</h4>
                <p className="text-sm text-gray-600">No.188, Ward No-01, Nilaveli 31010, Trincomalee</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-bold mb-2">📞 Contact</h4>
                <p className="text-sm text-gray-600">+94 71 3516515</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-bold mb-2">📧 Email</h4>
                <p className="text-sm text-gray-600">trincohub@gmail.com</p>
              </div>
            </div>
            <Link to="/contact">
              <Button size="lg" className="bg-ocean-700 hover:bg-ocean-800">
                Contact Us Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
