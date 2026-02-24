import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Waves, Fish, Camera } from 'lucide-react';
import { useCurrency } from '@/components/layout/Header';
import { getPrice } from '@/lib/currency';
import boatImage from '@/assets/boat-tour.jpg';
import whaleImage from '@/assets/whale-watching.jpg';
import dolphinImage from '@/assets/dolphins.jpg';
import snorkelingImage from '@/assets/snorkeling.jpg';

const BoatToursPage = () => {
  const { currency } = useCurrency();
  const featuredTours = [
    {
      title: 'Pigeon Island National Park - Snorkeling Tour',
      priceLKR: 41500,
      persons: '2 Persons',
      image: snorkelingImage,
      includes: [
        'Private Boat Transfer',
        'National Park Entrance Tickets',
        'Snorkeling Equipment Rental',
        'Professional Snorkeling Guide',
        'Life Jackets & Safety Equipment',
        'Underwater Photography Tips'
      ],
      description: 'Experience the best snorkeling in Sri Lanka at Pigeon Island National Park. Discover vibrant coral reefs, tropical fish, sea turtles, and crystal-clear waters just off Nilaveli Beach.',
      tag: 'Most Popular',
      tagColor: 'bg-ocean-600'
    },
    {
      title: 'Whale Watching Adventure',
      priceLKR: 35000,
      persons: '2-3 Persons',
      image: whaleImage,
      includes: [
        'Private Boat Charter',
        'Experienced Marine Guide',
        'Safe & Comfortable Boat',
        'Life Jackets Provided',
        'Best Viewing Spots',
        '3-4 Hour Tour Duration'
      ],
      description: 'Witness majestic blue whales and sperm whales in their natural habitat. Trincomalee offers year-round whale watching with peak season from May to October.',
      tag: 'Best Season: May-Oct',
      tagColor: 'bg-tropical-600'
    },
    {
      title: 'Dolphin Watching Tour',
      priceLKR: 24000,
      persons: '2-6 Persons',
      image: dolphinImage,
      includes: [
        'Private Boat for Your Group',
        'Expert Wildlife Guide',
        'Safety Equipment Included',
        'Morning Departure (Best Time)',
        'Photo Opportunities',
        '2-3 Hour Tour'
      ],
      description: 'Encounter playful spinner dolphins and bottlenose dolphins. Watch them leap, spin, and play in the pristine waters of the Indian Ocean – a magical experience for all ages.',
      tag: 'Family Friendly',
      tagColor: 'bg-blue-600'
    }
  ];

  const snorkelingSpots = [
    {
      name: 'Coral Island / Angel Rock',
      priceLKR: 19000,
      persons: '2 Persons',
      features: ['Vibrant Coral Reefs', 'Tropical Fish Species', 'Clear Visibility', 'Shallow Waters']
    },
    {
      name: 'Navy Island',
      priceLKR: 14000,
      persons: '2 Persons',
      features: ['Protected Marine Area', 'Colorful Reef Fish', 'Beginner Friendly', 'Calm Waters']
    }
  ];

  const waterActivities = [
    { 
      icon: '🛶',
      name: 'Kayak Tour', 
      priceLKR: 6000,
      per: 'per person',
      description: 'Explore lagoons and coastal waters at your own pace'
    },
    { 
      icon: '🤿',
      name: 'Scuba Diving', 
      priceLKR: 11500,
      per: 'per person',
      description: 'Certified diving with professional PADI instructors'
    },
    { 
      icon: '🎣',
      name: 'Fishing Tour', 
      priceLKR: 21000,
      per: '',
      description: 'Traditional fishing experience with local fishermen'
    },
    {
      icon: '🌅',
      name: 'Lagoon Sunset Cruise',
      priceLKR: 13000,
      per: 'per boat (max 7)',
      description: 'Peaceful evening cruise with bird watching opportunities'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[500px] bg-cover bg-center" style={{ backgroundImage: `url(${boatImage})` }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl text-white">
              <div className="inline-block bg-ocean-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                🌊 Ocean Adventures
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Boat Tours & Water Activities in Trincomalee
              </h1>
              <p className="text-xl text-gray-200 mb-6">
                Explore pristine waters, encounter marine wildlife, and discover colorful coral reefs on Sri Lanka's beautiful east coast
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                  <Waves className="w-4 h-4" />
                  <span>Private Boats</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                  <Fish className="w-4 h-4" />
                  <span>Expert Guides</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                  <Camera className="w-4 h-4" />
                  <span>Photo Opportunities</span>
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
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Boat Tours?</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>Nilaveli Taxi & Tourism Agency (PVT) Ltd</strong> offers safe, private, and professionally guided boat tours 
              in Nilaveli and Trincomalee. Discover stunning beaches, vibrant coral reefs, majestic whales, playful dolphins, 
              and unforgettable ocean experiences along Sri Lanka's beautiful east coast.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Premium Boat Tour Packages</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {featuredTours.map((tour, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-300 flex flex-col">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={tour.image} 
                    alt={tour.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute top-4 left-4 ${tour.tagColor} text-white px-3 py-1 rounded-full text-xs font-bold`}>
                    {tour.tag}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{tour.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="mb-4">
                    <div className="text-3xl font-bold text-ocean-600">From {getPrice(tour.priceLKR, currency)}</div>
                    <div className="text-gray-600">{tour.persons}</div>
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">{tour.description}</p>
                  <div className="space-y-2 mt-auto">
                    <p className="font-semibold text-sm text-gray-800 mb-2">Package Includes:</p>
                    {tour.includes.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-tropical-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Snorkeling Spots */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">More Snorkeling Destinations</h2>
            <p className="text-gray-600">Explore vibrant coral reefs and tropical marine life at these pristine locations</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
            {snorkelingSpots.map((spot, index) => (
              <Card key={index} className="hover:shadow-xl transition">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{spot.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-ocean-600 mb-1">From {getPrice(spot.priceLKR, currency)}</div>
                    <div className="text-gray-600">{spot.persons}</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {spot.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-tropical-600" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100 space-y-1 text-xs text-gray-600">
                    <div>✓ Private Boat Transport</div>
                    <div>✓ Snorkeling Equipment Included</div>
                    <div>✓ Professional Guide Service</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center bg-tropical-50 p-6 rounded-lg max-w-3xl mx-auto">
            <p className="text-gray-700">
              <strong>All snorkeling equipment provided:</strong> Masks, snorkels, fins, and life jackets. 
              Perfect for beginners and experienced snorkelers alike!
            </p>
          </div>
        </div>
      </section>

      {/* Other Activities */}
      <section className="py-12 bg-gradient-to-br from-ocean-50 to-tropical-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Other Water Activities in Nilaveli</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {waterActivities.map((activity, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition">
                <CardHeader>
                  <div className="text-4xl mb-2">{activity.icon}</div>
                  <CardTitle className="text-lg">{activity.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-ocean-600 mb-1">From {getPrice(activity.priceLKR, currency)}</div>
                  <div className="text-sm text-gray-600 mb-3">{activity.per}</div>
                  <p className="text-sm text-gray-600">{activity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8">
            Adventure and water sports activities for individuals, couples, families, and groups
          </p>
        </div>
      </section>

      {/* Safety & Quality */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">Safety & Quality Guarantee</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white rounded-lg border border-gray-100">
                <div className="w-16 h-16 bg-ocean-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-ocean-600" />
                </div>
                <h3 className="font-bold mb-2">Licensed Boats</h3>
                <p className="text-sm text-gray-600">All boats are registered, insured, and regularly maintained</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg border border-gray-100">
                <div className="w-16 h-16 bg-ocean-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-ocean-600" />
                </div>
                <h3 className="font-bold mb-2">Expert Guides</h3>
                <p className="text-sm text-gray-600">Experienced marine guides with local knowledge and safety training</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg border border-gray-100">
                <div className="w-16 h-16 bg-ocean-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-ocean-600" />
                </div>
                <h3 className="font-bold mb-2">Safety First</h3>
                <p className="text-sm text-gray-600">Life jackets, first aid kits, and emergency equipment on all tours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-ocean-700 to-ocean-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Book Your Ocean Adventure Today</h2>
          <p className="text-lg mb-8 text-ocean-100 max-w-2xl mx-auto">
            Experience Pigeon Island snorkeling, whale watching, dolphin tours, and water sports in Trincomalee & Nilaveli
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

export default BoatToursPage;
