import { Home, Users, Utensils, MapPin, CheckCircle, Wifi, Wind, Bed } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useCurrency } from '@/components/layout/Header';
import { getPrice } from '@/lib/currency';
import accommodationImage from '@/assets/nrp.png';
import villaImage from '@/assets/royal.png';

const AccommodationPage = () => {
  const { currency } = useCurrency();
  const facilities = [
    { icon: Utensils, text: 'Fully Equipped Kitchen with Cooking Facilities' },
    { icon: Home, text: 'Spacious Outdoor Garden & Seating Area' },
    { icon: MapPin, text: '5 Minutes Walk to Nilaveli Beach' },
    { icon: CheckCircle, text: 'Nearby Supermarkets & Restaurants' },
    { icon: CheckCircle, text: 'Safe & Peaceful Residential Location' },
    { icon: Users, text: 'Capacity: 10 – 40 Guests' },
    { icon: Wifi, text: 'Free High-Speed WiFi Internet' },
    { icon: Wind, text: 'Air Conditioned & Non-AC Options' },
    { icon: Bed, text: 'Comfortable Beds with Fresh Linens' },
    { icon: CheckCircle, text: 'Free Parking Space Available' }
  ];

  const accommodationTypes = [
    {
      type: 'AC Villas',
      description: 'Fully air-conditioned villas with modern amenities',
      capacity: '4-10 guests',
      ideal: 'Families & Small Groups'
    },
    {
      type: 'Non-AC Apartments',
      description: 'Budget-friendly apartments with natural ventilation',
      capacity: '4-8 guests',
      ideal: 'Budget Travelers'
    },
    {
      type: 'Group Houses',
      description: 'Large properties for corporate & wedding groups',
      capacity: '15-40 guests',
      ideal: 'Large Groups & Events'
    }
  ];

  const meals = [
    { meal: 'Breakfast', description: 'Traditional Sri Lankan or Continental', icon: '🍳' },
    { meal: 'Lunch', description: 'Rice & Curry with Fresh Ingredients', icon: '🍛' },
    { meal: 'Dinner', description: 'Seafood & Local Specialties', icon: '🍤' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[500px] bg-cover bg-center" style={{ backgroundImage: `url(${accommodationImage})` }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl text-white">
              <div className="inline-block bg-tropical-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                🏡 Accommodation
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Comfortable Accommodation in Nilaveli
              </h1>
              <p className="text-xl text-gray-200 mb-6">
                AC & Non-AC villas, apartments, and rooms near Nilaveli Beach – Perfect for families, groups, and corporate stays
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                  <MapPin className="w-4 h-4" />
                  <span>Near Beach</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                  <Users className="w-4 h-4" />
                  <span>Group Friendly</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                  <CheckCircle className="w-4 h-4" />
                  <span>All Facilities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
              <div>
                <h2 className="text-3xl font-bold mb-4">Accommodation in Nilaveli – Villas, Apartments & Rooms Near Nilaveli Beach</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Looking for <strong>comfortable and affordable accommodation in Nilaveli?</strong>
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Nilaveli Taxi & Tourism Agency (PVT) Ltd offers AC and Non-AC villas, apartments, and rooms in Nilaveli – Trincomalee, perfect for families, groups, corporate stays, and wedding guests.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our properties are located close to Nilaveli Beach in a safe, peaceful, and convenient area.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Enjoy a relaxing holiday with modern facilities and easy access to beach activities, supermarkets, and restaurants.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img src={villaImage} alt="Villa Interior" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect For */}
      <section className="py-12 bg-ocean-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-3">👨‍👩‍👧 Perfect For</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {['Family Vacation', 'Group Tours', 'Corporate Outings', 'Wedding Groups', 'Friends Trips'].map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg text-center hover:shadow-md transition border border-ocean-100">
                <div className="text-2xl mb-2">•</div>
                <span className="text-sm font-medium text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accommodation Types */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Accommodation Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {accommodationTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-xl transition">
                <CardContent className="p-6">
                  <div className="text-3xl mb-3">🏠</div>
                  <h3 className="text-xl font-bold mb-2">{type.type}</h3>
                  <p className="text-gray-700 mb-3">{type.description}</p>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div><strong>Capacity:</strong> {type.capacity}</div>
                    <div><strong>Ideal for:</strong> {type.ideal}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-3">🛏️ Facilities & Amenities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {facilities.map((facility, index) => (
              <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg hover:shadow-md transition">
                <span className="text-tropical-600 mt-1 font-bold">✔</span>
                <span className="text-gray-700">{facility.text}</span>
              </div>
            ))}
          </div>
          <p className="text-center mt-10 text-gray-700 max-w-2xl mx-auto">
            Comfortable, clean, and affordable stays in Nilaveli for both short-term and long-term bookings.
          </p>
        </div>
      </section>

      {/* Food */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">🍽️ Homemade Food Arrangement</h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                We also provide fresh and delicious Sri Lankan home-style meals during your stay.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {meals.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg text-center hover:shadow-md transition border border-gray-100">
                  <span className="text-tropical-600 font-bold text-lg">✔</span>
                  <h3 className="text-xl font-bold mt-2">{item.meal}</h3>
                </div>
              ))}
            </div>
            
            <div className="bg-tropical-50 p-6 rounded-lg text-center">
              <p className="text-gray-700">
                Enjoy clean, hygienic, and affordable homemade food prepared with fresh local ingredients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-ocean-700 to-ocean-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">📞 Book Your Accommodation Today</h2>
          <p className="text-lg mb-2 text-ocean-100 max-w-2xl mx-auto">
            Contact us for comfortable villas, apartments, and rooms in Nilaveli near the beach.
          </p>
          <p className="text-base mb-8 text-ocean-100 max-w-2xl mx-auto">
            Call or WhatsApp now for availability, pricing, and special packages.
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

export default AccommodationPage;
