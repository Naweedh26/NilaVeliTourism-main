import { CheckCircle, MapPin, Clock, Shield, Fuel, Settings } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useCurrency } from '@/components/layout/Header';
import { getPrice } from '@/lib/currency';
import tukTukImage from '@/assets/tuktuk.png';

const VehicleRentalPage = () => {
  const { currency } = useCurrency();
  
  const vehicles = [
    {
      type: 'Scooter',
      priceLKR: 2500,
      emoji: '🛵',
      description: 'Perfect for solo travelers and couples exploring Nilaveli Beach and Trincomalee town',
      capacity: '1-2 Persons',
      features: [
        'Unlimited Kilometers',
        'Free Helmet Included',
        'Well-Maintained Bikes',
        'Easy to Ride',
        'Fuel Efficient',
        'Free Delivery & Pickup'
      ],
      ideal: 'Beach exploration, Quick city trips, Budget travelers'
    },
    {
      type: 'Tuk-Tuk',
      priceLKR: 5700,
      emoji: '🛺',
      description: 'Ideal for families and small groups wanting an authentic Sri Lankan travel experience',
      capacity: '2-3 Persons',
      features: [
        'Unlimited Kilometers',
        'Spacious Seating',
        'Luggage Space Available',
        'Perfect for Groups',
        'Authentic Experience',
        'Free Delivery & Pickup'
      ],
      ideal: 'Family trips, Group travel, City sightseeing'
    }
  ];

  const benefits = [
    {
      icon: MapPin,
      title: 'Unlimited Kilometers',
      description: 'Travel anywhere across Trincomalee and beyond without distance limits'
    },
    {
      icon: Clock,
      title: 'Flexible Rental Duration',
      description: 'Daily, weekly, or monthly rentals available based on your needs'
    },
    {
      icon: Shield,
      title: 'Well-Maintained Vehicles',
      description: 'Regular servicing and safety checks for a worry-free ride'
    },
    {
      icon: Fuel,
      title: 'Fuel Efficient',
      description: 'Save money with our economical and eco-friendly vehicles'
    },
    {
      icon: Settings,
      title: 'Easy Booking',
      description: 'Quick WhatsApp booking with instant confirmation'
    },
    {
      icon: CheckCircle,
      title: 'Free Delivery',
      description: 'We deliver to your hotel or accommodation in Nilaveli area'
    }
  ];

  const popularDestinations = [
    { name: 'Nilaveli Beach', distance: 'Starting Point' },
    { name: 'Trincomalee Town', distance: '15 km' },
    { name: 'Koneswaram Temple', distance: '16 km' },
    { name: 'Uppuveli Beach', distance: '8 km' },
    { name: 'Hot Springs (Kanniya)', distance: '10 km' },
    { name: 'Dutch Bay', distance: '14 km' }
  ];

  const rentalProcess = [
    { step: '1', title: 'Contact Us', description: 'WhatsApp or call to check availability' },
    { step: '2', title: 'Choose Vehicle', description: 'Select scooter or tuk-tuk based on your needs' },
    { step: '3', title: 'Provide Details', description: 'Share rental dates and pickup location' },
    { step: '4', title: 'Confirmation', description: 'Receive booking confirmation instantly' },
    { step: '5', title: 'Delivery', description: 'Vehicle delivered to your location' },
    { step: '6', title: 'Enjoy', description: 'Explore Trincomalee at your own pace!' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[500px] bg-cover bg-center" style={{ backgroundImage: `url(${tukTukImage})` }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl text-white">
              <div className="inline-block bg-tropical-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                🚗 Vehicle Rentals
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Tuk-Tuk & Scooter Rentals in Nilaveli
              </h1>
              <p className="text-xl text-gray-200 mb-6">
                Unlimited KM Vehicle Rental in Sri Lanka – Explore Trincomalee at your own pace with affordable scooter and tuk-tuk rentals
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                  <MapPin className="w-4 h-4" />
                  <span>Unlimited KM</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                  <Clock className="w-4 h-4" />
                  <span>Daily Rentals</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                  <CheckCircle className="w-4 h-4" />
                  <span>Free Delivery</span>
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
            <h2 className="text-3xl font-bold mb-4">Looking for Affordable Vehicle Rental in Nilaveli?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We offer <strong>tuk-tuk and scooter rentals with unlimited kilometers</strong>, perfect for exploring Nilaveli Beach, Trincomalee town, and nearby attractions.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Experience the freedom to explore at your own pace with our well-maintained vehicles, affordable daily rates, and convenient delivery service.
            </p>
          </div>
        </div>
      </section>

      {/* Vehicle Options */}
      <section className="py-12 bg-gradient-to-br from-ocean-50 to-tropical-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">💰 Our Vehicle Rental Options</h2>
          <p className="text-center text-gray-600 mb-10">Choose the perfect vehicle for your Trincomalee adventure</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {vehicles.map((vehicle, index) => (
              <Card key={index} className="hover:shadow-xl transition border-2 hover:border-ocean-600">
                <CardHeader className="text-center pb-4">
                  <div className="text-6xl mb-3">{vehicle.emoji}</div>
                  <CardTitle className="text-2xl mb-2">{vehicle.type}</CardTitle>
                  <div className="text-4xl font-bold text-ocean-600 mb-2">
                    {getPrice(vehicle.priceLKR, currency)}
                  </div>
                  <div className="text-sm text-gray-600">per day</div>
                  <div className="text-sm text-gray-600 mt-2">👥 {vehicle.capacity}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-center mb-6">{vehicle.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {vehicle.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="text-tropical-600 font-bold mt-0.5">✔</span>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-ocean-50 p-4 rounded-lg">
                    <div className="text-xs text-gray-600 mb-1">Ideal For:</div>
                    <div className="text-sm text-gray-800 font-medium">{vehicle.ideal}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">✅ Why Rent From Us?</h2>
          <p className="text-center text-gray-600 mb-10">Experience hassle-free vehicle rental in Nilaveli & Trincomalee</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg hover:shadow-md transition border border-gray-100">
                <div className="w-12 h-12 bg-ocean-100 rounded-full flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-ocean-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">🗺️ Popular Destinations from Nilaveli</h2>
          <p className="text-center text-gray-600 mb-10">Explore these amazing places with your rental vehicle</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {popularDestinations.map((dest, index) => (
              <div key={index} className="bg-white p-4 rounded-lg hover:shadow-md transition border border-gray-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-ocean-600 flex-shrink-0" />
                  <span className="font-medium text-gray-800">{dest.name}</span>
                </div>
                <span className="text-sm text-gray-600">{dest.distance}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rental Process */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">📋 Easy Rental Process</h2>
          <p className="text-center text-gray-600 mb-10">Get your vehicle in 6 simple steps</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {rentalProcess.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-lg hover:shadow-md transition border-2 border-gray-100 h-full">
                  <div className="w-12 h-12 bg-ocean-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
                {index < rentalProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-ocean-600 text-2xl">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terms */}
      <section className="py-12 bg-gradient-to-br from-ocean-50 to-tropical-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center">📝 Rental Terms & Requirements</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold mb-3 text-ocean-600">What You Need:</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-tropical-600">•</span>
                    <span>Valid Driving License (International or Local)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-tropical-600">•</span>
                    <span>Passport or National ID</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-tropical-600">•</span>
                    <span>Refundable Security Deposit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-tropical-600">•</span>
                    <span>Minimum Age: 21 Years</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold mb-3 text-ocean-600">What's Included:</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-tropical-600">•</span>
                    <span>Unlimited Kilometers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-tropical-600">•</span>
                    <span>Free Delivery & Pickup in Nilaveli Area</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-tropical-600">•</span>
                    <span>Helmet for Scooter Rentals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-tropical-600">•</span>
                    <span>24/7 Customer Support</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Note:</strong> Fuel is not included. Vehicle must be returned with the same fuel level. Damage insurance available on request.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-ocean-700 to-ocean-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">🚗 Book Your Vehicle Rental Today</h2>
          <p className="text-lg mb-2 text-ocean-100 max-w-2xl mx-auto">
            Explore Trincomalee and Nilaveli at your own pace with our reliable vehicle rental service
          </p>
          <p className="text-base mb-8 text-ocean-100 max-w-2xl mx-auto">
            Contact us now for instant booking confirmation and special offers
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

export default VehicleRentalPage;
