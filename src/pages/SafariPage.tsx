import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Camera, MapPin, Users, Clock } from 'lucide-react';
import { useCurrency } from '@/components/layout/Header';
import { getPrice } from '@/lib/currency';
import safariImage from '@/assets/safari-jeep.jpg';
import leopardImage from '@/assets/leopard.jpg';

const SafariPage = () => {
  const { currency } = useCurrency();
  const destinations = [
    { 
      name: 'Yala National Park', 
      description: 'Famous for the highest leopard density in the world',
      highlights: 'Leopards, Elephants, Sloth Bears, Crocodiles'
    },
    { 
      name: 'Udawalawe National Park', 
      description: 'Best destination for elephant encounters',
      highlights: 'Large Elephant Herds, Water Buffalo, Sambar Deer'
    },
    { 
      name: 'Wilpattu National Park', 
      description: 'Largest national park with natural lakes',
      highlights: 'Leopards, Natural Lakes, Wild Peacocks'
    },
    { 
      name: 'Minneriya National Park', 
      description: 'Home to the great elephant gathering',
      highlights: 'Elephant Gathering (Aug-Sep), Bird Watching'
    },
    { 
      name: 'Kaudulla National Park', 
      description: 'Lesser-known gem with abundant wildlife',
      highlights: 'Elephants, Fishing Cats, Water Birds'
    }
  ];

  const includes = [
    'National Park Entrance Tickets',
    'Private 4x4 Jeep Safari Vehicle',
    'Experienced & Licensed Chauffeur Guide',
    'Hotel Pickup & Drop-off Service',
    'Half Day & Full Day Safari Options',
    'Wildlife Photography Opportunities',
    'Drinking Water & Refreshments',
    'Binoculars for Wildlife Spotting'
  ];

  const wildlife = [
    { animal: 'Sri Lankan Leopard', emoji: '🐆', parks: 'Yala, Wilpattu' },
    { animal: 'Asian Elephant', emoji: '🐘', parks: 'Udawalawe, Minneriya, Kaudulla' },
    { animal: 'Sloth Bear', emoji: '🐻', parks: 'Yala, Wilpattu' },
    { animal: 'Water Buffalo', emoji: '🐃', parks: 'All Parks' },
    { animal: 'Spotted Deer', emoji: '🦌', parks: 'All Parks' },
    { animal: 'Crocodile', emoji: '🐊', parks: 'Yala, Udawalawe' },
    { animal: 'Peacock', emoji: '🦚', parks: 'All Parks' },
    { animal: 'Exotic Birds', emoji: '🦅', parks: 'All Parks' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[500px] bg-cover bg-center" style={{ backgroundImage: `url(${safariImage})` }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl text-white">
              <div className="inline-block bg-tropical-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                🐘 Wildlife Adventure
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Wildlife Jeep Safari Tours in Sri Lanka
              </h1>
              <p className="text-xl text-gray-200 mb-6">
                Experience thrilling wildlife safaris in Sri Lanka's premier national parks with professional guides and comfortable 4x4 jeeps
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                  <Camera className="w-4 h-4" />
                  <span>Photography Opportunities</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                  <Users className="w-4 h-4" />
                  <span>Expert Guides</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                  <Clock className="w-4 h-4" />
                  <span>Flexible Timings</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Price */}
      <section className="py-12 bg-gradient-to-r from-ocean-700 to-ocean-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Safari Package Pricing</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                <div className="text-sm text-ocean-100 mb-2">Starting From</div>
                <div className="text-5xl font-bold mb-2">{getPrice(19000, currency)}</div>
                <div className="text-sm text-ocean-100 mt-2">For 2 Persons</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                <div className="text-sm text-ocean-100 mb-2">Group Pricing Available</div>
                <div className="text-3xl font-bold mb-4">Contact for Quote</div>
                <p className="text-sm text-ocean-100">Special rates for families and groups of 4+ persons</p>
              </div>
            </div>
            <p className="text-ocean-100 mt-6">Affordable wildlife safari packages with professional service and transparent pricing</p>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Unforgettable Wildlife Adventures</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Looking for the <strong>best wildlife jeep safari in Sri Lanka</strong>? 
                  Nilaveli Taxi & Tourism Agency organizes private safari tours to Sri Lanka's most famous national parks.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our experienced safari drivers know the best routes and timing to maximize your wildlife sighting opportunities. 
                  Travel in comfortable, well-maintained 4x4 safari jeeps equipped for rough terrain and long journeys.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  From the legendary leopards of Yala to the massive elephant gatherings at Minneriya, 
                  experience Sri Lanka's incredible biodiversity up close with our expert guides.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img src={leopardImage} alt="Sri Lankan Leopard" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Safari Destinations We Cover</h2>
          <p className="text-center text-gray-600 mb-10">Explore Sri Lanka's premier wildlife sanctuaries and national parks</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {destinations.map((dest, index) => (
              <Card key={index} className="hover:shadow-xl transition">
                <CardHeader>
                  <div className="flex items-start gap-2 mb-2">
                    <MapPin className="w-5 h-5 text-ocean-600 flex-shrink-0 mt-1" />
                    <CardTitle className="text-xl">{dest.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 font-medium mb-3">{dest.description}</p>
                  <div className="bg-tropical-50 p-3 rounded-lg mt-3">
                    <p className="text-xs font-semibold text-tropical-800 mb-1">Wildlife Highlights:</p>
                    <p className="text-xs text-gray-600">{dest.highlights}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Wildlife */}
      <section className="py-12 lg:py-16 bg-tropical-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">Discover Sri Lanka's Amazing Wildlife</h2>
              <p className="text-gray-700 text-lg">
                Encounter diverse species in their natural habitat – from majestic elephants to elusive leopards
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {wildlife.map((item, index) => (
                <div key={index} className="bg-white p-4 rounded-lg text-center hover:shadow-md transition">
                  <div className="text-4xl mb-2">{item.emoji}</div>
                  <h3 className="font-semibold text-sm mb-1">{item.animal}</h3>
                  <p className="text-xs text-gray-500">Found in: {item.parks}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Includes */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Complete Safari Package Includes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {includes.map((item, index) => (
              <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg border border-gray-100 hover:border-ocean-600 hover:shadow-md transition">
                <CheckCircle className="w-5 h-5 text-tropical-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Time */}
      <section className="py-12 bg-ocean-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Best Time for Safari Tours</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Dry Season (May - September)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">Best time for wildlife safaris in most parks</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>✓ Animals gather at water holes</li>
                    <li>✓ Better visibility through vegetation</li>
                    <li>✓ Ideal for Yala & Wilpattu</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Elephant Gathering (Aug - Sep)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">Peak season for Minneriya & Kaudulla</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>✓ Hundreds of elephants congregate</li>
                    <li>✓ Spectacular photo opportunities</li>
                    <li>✓ Once-in-a-lifetime experience</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-ocean-700 to-ocean-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Book Your Wildlife Safari Adventure</h2>
          <p className="text-lg mb-8 text-ocean-100 max-w-2xl mx-auto">
            Contact us for Yala leopard safari, Udawalawe elephant safari, Wilpattu wildlife tour, or Minneriya elephant gathering experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/94713516515" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-tropical-600 hover:bg-tropical-700">
                📱 WhatsApp Booking
              </Button>
            </a>
            <a href="tel:+94713516515">
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-white text-white">
                📞 Call +94 71 3516515
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SafariPage;
