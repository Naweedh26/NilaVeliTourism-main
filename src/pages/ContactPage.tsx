import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock, Send, Facebook, Instagram } from 'lucide-react';
import { toast } from 'sonner';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    email: '',
    tourType: '',
    date: '',
    persons: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `
*New Tour Inquiry*

*Name:* ${formData.name}
*WhatsApp:* ${formData.whatsapp}
*Email:* ${formData.email}
*Tour Type:* ${formData.tourType}
*Date:* ${formData.date}
*Number of Persons:* ${formData.persons}
*Message:* ${formData.message}
    `.trim();
    
    const whatsappUrl = `https://wa.me/94713516515?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast.success('Redirecting to WhatsApp...');
    
    // Reset form
    setFormData({
      name: '',
      whatsapp: '',
      email: '',
      tourType: '',
      date: '',
      persons: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone / WhatsApp',
      content: '+94 71 3516515',
      link: 'tel:+94713516515',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Mail,
      title: 'Email Address',
      content: 'trincohub@gmail.com',
      link: 'mailto:trincohub@gmail.com',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'No.188, Ward No-01, Nilaveli 31010, Trincomalee, Sri Lanka',
      link: 'https://maps.google.com/?q=Nilaveli,Trincomalee,Sri+Lanka',
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      content: '24/7 Available for Bookings',
      link: null,
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  const tourTypes = [
    'Taxi Service',
    'Wildlife Safari',
    'Boat Tour',
    'Whale Watching',
    'Dolphin Watching',
    'Snorkeling',
    'City Tour',
    'Accommodation',
    'Vehicle Rental',
    'Custom Package'
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-ocean-700 to-ocean-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg lg:text-xl text-ocean-100 max-w-2xl mx-auto">
            Ready to explore Sri Lanka? Get in touch for bookings, inquiries, or custom tour packages
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition">
                  <CardHeader>
                    <div className={`w-16 h-16 ${info.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-lg">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {info.link ? (
                      <a 
                        href={info.link} 
                        target={info.title === 'Location' ? '_blank' : undefined}
                        rel={info.title === 'Location' ? 'noopener noreferrer' : undefined}
                        className="text-gray-700 hover:text-ocean-600 transition text-sm"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-gray-700 text-sm">{info.content}</p>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Quick Contact */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <p className="text-gray-600 text-sm">Fill out the form below and we'll respond as soon as possible</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <Input 
                      required
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">WhatsApp Number *</label>
                      <Input 
                        required
                        type="tel"
                        placeholder="+94 71 XXX XXXX"
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input 
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Tour Type *</label>
                    <select 
                      required
                      className="w-full p-2 border border-gray-300 rounded-md"
                      value={formData.tourType}
                      onChange={(e) => setFormData({...formData, tourType: e.target.value})}
                    >
                      <option value="">Select Tour Type</option>
                      {tourTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Preferred Date</label>
                      <Input 
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Number of Persons</label>
                      <Input 
                        type="number"
                        min="1"
                        placeholder="e.g., 2"
                        value={formData.persons}
                        onChange={(e) => setFormData({...formData, persons: e.target.value})}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea 
                      placeholder="Tell us about your travel plans..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-ocean-700 hover:bg-ocean-800" size="lg">
                    <Send className="w-4 h-4 mr-2" />
                    Send via WhatsApp
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    This form will open WhatsApp with your message pre-filled
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Quick Contact & Map */}
            <div className="space-y-6">
              {/* Quick Contact */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Quick Contact</CardTitle>
                  <p className="text-gray-600 text-sm">Prefer direct communication? Reach us instantly</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <a 
                    href="https://wa.me/94713516515" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button className="w-full bg-green-600 hover:bg-green-700" size="lg">
                      <Phone className="w-5 h-5 mr-2" />
                      WhatsApp: +94 71 3516515
                    </Button>
                  </a>
                  
                  <a href="tel:+94713516515" className="block">
                    <Button variant="outline" className="w-full" size="lg">
                      <Phone className="w-5 h-5 mr-2" />
                      Call: +94 71 3516515
                    </Button>
                  </a>
                  
                  <a href="mailto:trincohub@gmail.com" className="block">
                    <Button variant="outline" className="w-full" size="lg">
                      <Mail className="w-5 h-5 mr-2" />
                      Email: trincohub@gmail.com
                    </Button>
                  </a>
                  
                  <div className="border-t pt-4">
                    <p className="text-sm text-gray-600 mb-3 text-center">Follow Us on Social Media</p>
                    <div className="flex gap-3 justify-center">
                      <a 
                        href="https://www.facebook.com/share/1PF9o6NDVS/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button variant="outline" className="w-full hover:bg-blue-50" size="lg">
                          <Facebook className="w-5 h-5 mr-2" />
                          Facebook
                        </Button>
                      </a>
                      <a 
                        href="https://www.instagram.com/trincohub?utm_source=qr&igsh=MXNuaXZnbDJrZGpsYQ==" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button variant="outline" className="w-full hover:bg-pink-50" size="lg">
                          <Instagram className="w-5 h-5 mr-2" />
                          Instagram
                        </Button>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Why Book With Us */}
              <Card className="bg-gradient-to-br from-ocean-50 to-tropical-50">
                <CardHeader>
                  <CardTitle className="text-xl">Why Book With Us?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-tropical-600 font-bold mt-1">✓</span>
                      <span><strong>Instant Response:</strong> We reply within minutes on WhatsApp</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-tropical-600 font-bold mt-1">✓</span>
                      <span><strong>Best Price Guarantee:</strong> Transparent pricing, no hidden fees</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-tropical-600 font-bold mt-1">✓</span>
                      <span><strong>Flexible Bookings:</strong> Customize your tour to match your schedule</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-tropical-600 font-bold mt-1">✓</span>
                      <span><strong>Licensed Service:</strong> Registered tourism agency with experienced staff</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-tropical-600 font-bold mt-1">✓</span>
                      <span><strong>Local Expertise:</strong> Born and raised in Nilaveli – we know every corner</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Business Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                      <span className="text-gray-600">WhatsApp Support</span>
                      <span className="font-semibold text-green-600">24/7 Available</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                      <span className="text-gray-600">Phone Calls</span>
                      <span className="font-semibold">6:00 AM - 10:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                      <span className="text-gray-600">Email Response</span>
                      <span className="font-semibold">Within 24 hours</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Office Visits</span>
                      <span className="font-semibold">By Appointment</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Find Us in Nilaveli</h2>
          <div className="max-w-5xl mx-auto">
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63172.54326419289!2d81.13956445!3d8.6854285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afabc8b0a5a7a87%3A0x2b5f0f6f8f6f0f6f!2sNilaveli%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Nilaveli Location Map"
              />
            </div>
            <div className="text-center mt-6">
              <a 
                href="https://maps.google.com/?q=Nilaveli,Trincomalee,Sri+Lanka" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-ocean-600 hover:text-ocean-700 font-medium"
              >
                📍 Open in Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-ocean-700 to-ocean-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Let's Plan Your Perfect Sri Lankan Adventure</h2>
          <p className="text-lg mb-8 text-ocean-100 max-w-2xl mx-auto">
            Whether it's a family vacation, romantic getaway, or group adventure – we're here to make it unforgettable
          </p>
          <a href="https://wa.me/94713516515" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-tropical-600 hover:bg-tropical-700">
              💬 Start Chatting on WhatsApp
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
