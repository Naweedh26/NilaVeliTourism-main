import safariImage from '@/assets/safari-jeep.jpg';
import snorkelingImage from '@/assets/snorkeling.jpg';
import whaleImage from '@/assets/whale-watching.jpg';
import accommodationImage from '@/assets/royal.png';
import taxiImage from '@/assets/car.png';
import heroImage from '@/assets/hero-nilaveli.jpg';
import Leopard from '@/assets/leopard.jpg';
import dolpinImage from '@/assets/dolphins.jpg';
import boatTrip from '@/assets/boat.png';
import room from '@/assets/room.png';
import outdoor from '@/assets/garden.png';
import villaImage from '@/assets/villa.png';
import tuktuk from '@/assets/auto.png';
import scooter from '@/assets/scooter.png';
import family from '@/assets/family.png';
import van from '@/assets/van.png';
import group from '@/assets/group.png';
import travel from '@/assets/travel.png';


const GalleryPage = () => {
  const galleryCategories = [
    {
      title: 'Wildlife Jeep Safaris',
      description: 'Experience thrilling safari adventures at Yala, Udawalawe, Wilpattu, and Minneriya National Parks',
      images: [
        { url: safariImage, alt: 'Safari Jeep Tour' },
        { url: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&h=400&fit=crop&q=80', alt: 'Elephant Safari' },
        { url: Leopard, alt: 'Leopard Spotting' },
        { url: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=600&h=400&fit=crop&q=80', alt: 'Wildlife Photography' }
      ]
    },
    {
      title: 'Boat Tours & Snorkeling',
      description: 'Discover crystal-clear waters, whale watching, dolphin tours, and snorkeling trips near Pigeon Island',
      images: [
        { url: snorkelingImage, alt: 'Snorkeling at Pigeon Island' },
        { url: whaleImage, alt: 'Whale Watching' },
        { url: dolpinImage, alt: 'Dolphin Tour' },
        { url: boatTrip, alt: 'Boat Trip' }
      ]
    },
    {
      title: 'Accommodation in Nilaveli',
      description: 'Comfortable AC & Non-AC villas, apartments, and rooms near Nilaveli Beach',
      images: [
        { url: villaImage, alt: 'Villa' },
        { url: room, alt: 'Comfortable Rooms' },
        { url: outdoor, alt: 'Outdoor Garden' },
        { url: accommodationImage, alt: 'Luxury Stay' }
      ]
    },
    {
      title: 'Taxi & Rental Services',
      description: 'Islandwide taxi services, airport transfers, tuk-tuk rentals with licensed drivers',
      images: [
        { url: taxiImage, alt: 'Taxi Service' },
        { url: tuktuk, alt: 'Tuk-Tuk Rental' },
        { url: van, alt: 'Comfortable Van' },
        { url: scooter, alt: 'Scooter Rental' }
      ]
    },
    {
      title: 'Happy Customers',
      description: 'Making every journey safe, comfortable, and unforgettable for our guests',
      images: [
        { url: heroImage, alt: 'Nilaveli Beach' },
        { url: family, alt: 'Family Travel' },
        { url: group, alt: 'Group Tours' },
        { url: travel, alt: 'Happy Travelers' }
      ]
    }
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-ocean-700 to-ocean-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-lg lg:text-xl text-ocean-100 max-w-2xl mx-auto">
            Explore Our Travel Experiences in Sri Lanka – Unforgettable moments and adventures
          </p>
        </div>
      </section>

      {/* Gallery Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {galleryCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16 last:mb-0">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-3">{category.title}</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">{category.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {category.images.map((image, imageIndex) => (
                  <div 
                    key={imageIndex}
                    className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow group cursor-pointer aspect-[4/3]"
                  >
                    <img 
                      src={image.url} 
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <p className="text-white font-medium">{image.alt}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-ocean-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Create Your Own Unforgettable Memories</h2>
          <p className="text-lg mb-8 text-ocean-100">
            Join us for an amazing travel experience in Sri Lanka
          </p>
          <a href="https://wa.me/94713516515" target="_blank" rel="noopener noreferrer">
            <button className="bg-tropical-600 hover:bg-tropical-700 text-white px-8 py-3 rounded-lg font-semibold transition">
              Book Your Tour Now
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
