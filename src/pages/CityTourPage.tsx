import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Camera, Clock, Users, CheckCircle } from 'lucide-react';
import { useCurrency } from '@/components/layout/Header';
import { getPrice } from '@/lib/currency';
import templeImage from '@/assets/temple-trinco.jpg';
import templeInteriorImage from '@/assets/temple.jpg';
import dutchBayImage from '@/assets/dutch-bay.jpg';

const CityTourPage = () => {
  const { currency } = useCurrency();
  const places = [
    {
      name: 'Koneswaram Temple',
      icon: '🛕',
      description: 'Ancient Hindu temple perched on Swami Rock cliff with breathtaking ocean views and spiritual significance',
      duration: '1 hour',
      highlights: 'Architecture, Ocean Views, Cultural Experience'
    },
    {
      name: 'Deer Park',
      icon: '🦌',
      description: 'Peaceful sanctuary near the temple where spotted deer roam freely in natural habitat',
      duration: '30 minutes',
      highlights: 'Wildlife Spotting, Nature Walk, Photography'
    },
    {
      name: 'Dutch Bay Beach',
      icon: '🏖️',
      description: 'Calm and scenic beach perfect for relaxing, swimming, and sunset photography',
      duration: '45 minutes',
      highlights: 'Beach Activities, Swimming, Sunset Views'
    },
    {
      name: 'Badrakali Amman Temple',
      icon: '🛕',
      description: 'One of the most beautiful and colorful Hindu temples in Sri Lanka with intricate architecture',
      duration: '45 minutes',
      highlights: 'Architecture, Cultural Heritage, Photography'
    },
    {
      name: 'Fort Frederick',
      icon: '🏰',
      description: 'Historic Dutch fort with colonial architecture and panoramic views of the harbor',
      duration: '30 minutes',
      highlights: 'History, Architecture, Harbor Views'
    },
    {
      name: 'Local Markets',
      icon: '🛍️',
      description: 'Visit authentic local markets and souvenir shops in Trincomalee town (Optional)',
      duration: 'Flexible',
      highlights: 'Shopping, Local Culture, Souvenirs'
    }
  ];

  const prices = [
    {
      vehicle: 'Tuk-Tuk',
      priceLKR: 6000,
      passengers: '2-3 Persons',
      description: 'Budget-friendly option with authentic local experience'
    },
    {
      vehicle: 'Car',
      priceLKR: 16000,
      passengers: '2-4 Persons',
      description: 'Comfortable air-conditioned sedan with professional driver'
    }
  ];

  const includes = [
    'Private Vehicle (Tuk-Tuk or Car)',
    'Experienced Local Driver/Guide',
    'Hotel Pickup & Drop-off',
    'Flexible Timing & Duration',
    'Photography Stops',
    'Local Insights & Stories',
    'Bottled Water',
    'Temple Etiquette Guidance'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[500px] bg-cover bg-center" style={{ backgroundImage: `url(${templeImage})` }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30" />
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl text-white">
              <div className="inline-block bg-tropical-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                🏛️ Cultural Experience
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Trincomalee City Sightseeing Tour
              </h1>
              <p className="text-xl text-gray-200 mb-6">
                Explore ancient temples, colonial forts, pristine beaches, and local culture with our private city tour packages
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                  <MapPin className="w-4 h-4" />
                  <span>6+ Attractions</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                  <Clock className="w-4 h-4" />
                  <span>4-5 Hours</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                  <Camera className="w-4 h-4" />
                  <span>Photo Stops</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Discover Trincomalee's Rich Heritage</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Discover the cultural, historical, and scenic highlights of Trincomalee with our private city tour packages.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Nilaveli Taxi & Tourism Agency (PVT) Ltd</strong> offers comfortable and affordable Trincomalee 
              sightseeing tours with experienced local drivers. Perfect for families, couples, and small groups who want 
              to explore the beauty, history, and culture of Trincomalee in one memorable day.
            </p>
          </div>
        </div>
      </section>

      {/* Places */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Must-See Attractions in Trincomalee</h2>
          <p className="text-center text-gray-600 mb-10">Experience the perfect blend of culture, history, and natural beauty</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
            {places.map((place, index) => (
              <Card key={index} className="hover:shadow-xl transition">
                <CardHeader>
                  <div className="text-5xl mb-3">{place.icon}</div>
                  <CardTitle className="text-xl">{place.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3 leading-relaxed">{place.description}</p>
                  <div className="space-y-1 text-sm text-gray-600 border-t border-gray-100 pt-3">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-ocean-600" />
                      <span><strong>Duration:</strong> {place.duration}</span>
                    </div>
                    <div className="text-xs text-gray-500 mt-2">
                      <strong>Highlights:</strong> {place.highlights}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src={templeInteriorImage} alt="Koneswaram Temple" className="w-full h-64 object-cover" />
              <div className="p-4 bg-white">
                <h3 className="font-bold mb-1">Koneswaram Temple</h3>
                <p className="text-sm text-gray-600">One of the five ancient Shiva temples in Sri Lanka</p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src={dutchBayImage} alt="Dutch Bay Beach" className="w-full h-64 object-cover" />
              <div className="p-4 bg-white">
                <h3 className="font-bold mb-1">Dutch Bay Beach</h3>
                <p className="text-sm text-gray-600">Perfect spot for swimming and sunset photography</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prices */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Tour Package Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {prices.map((item, index) => (
              <Card key={index} className="hover:shadow-xl transition border-2 hover:border-ocean-600">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-4">{item.vehicle}</h3>
                    <div className="text-4xl font-bold text-ocean-600 mb-2">From {getPrice(item.priceLKR, currency)}</div>
                    <div className="flex items-center justify-center gap-2 text-gray-700 mb-3">
                      <Users className="w-5 h-5" />
                      <span>{item.passengers}</span>
                    </div>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Includes */}
      <section className="py-12 bg-tropical-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Tour Package Includes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {includes.map((item, index) => (
              <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg hover:shadow-md transition">
                <CheckCircle className="w-5 h-5 text-tropical-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600">
              <strong>Note:</strong> Customized sightseeing tours available based on your preferences and time
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-ocean-600 mx-auto mb-3" />
                <h3 className="font-semibold text-lg mb-2">Private Vehicle</h3>
                <p className="text-sm text-gray-600">Comfortable transport with air-conditioning (car) or open-air experience (tuk-tuk)</p>
              </div>
              <div className="text-center">
                <Clock className="w-12 h-12 text-ocean-600 mx-auto mb-3" />
                <h3 className="font-semibold text-lg mb-2">Flexible Timing</h3>
                <p className="text-sm text-gray-600">Start at your preferred time – morning or afternoon departures available</p>
              </div>
              <div className="text-center">
                <Camera className="w-12 h-12 text-ocean-600 mx-auto mb-3" />
                <h3 className="font-semibold text-lg mb-2">Local Expert Guide</h3>
                <p className="text-sm text-gray-600">Friendly drivers with deep knowledge of Trincomalee's history and culture</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-ocean-700 to-ocean-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Book Your Trincomalee City Tour Today</h2>
          <p className="text-lg mb-8 text-ocean-100 max-w-2xl mx-auto">
            Experience ancient temples, colonial history, beautiful beaches, and local culture in one unforgettable tour
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

export default CityTourPage;
