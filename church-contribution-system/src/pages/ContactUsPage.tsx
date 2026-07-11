import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Mail, Phone, MapPin, Clock, ArrowLeft, Send, CheckCircle2 } from "lucide-react";
import { MOCK_CONTACT_INFO, MOCK_CONTACT_MESSAGES } from "../data";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const BACKGROUND_IMAGES = [
  "/bg-hall1.jpg",
  "/bg-hall2.jpg",
  "/bg-hall3.jpg"
];

export default function ContactUsPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % BACKGROUND_IMAGES.length);
    }, 5000); // Change image every 5 seconds
    
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate network request
    setTimeout(() => {
      // In a real app, this would be an API call to a backend database
      MOCK_CONTACT_MESSAGES.push({
        id: `msg-${Date.now()}`,
        ...formData,
        date: new Date().toISOString()
      });
      
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      // Hide success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-background flex flex-col relative">
      <div className="relative min-h-screen flex flex-col overflow-hidden">
        {/* Background Slideshow */}
        {BACKGROUND_IMAGES.map((img, index) => (
          <div
            key={img}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url("${img}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed"
            }}
          />
        ))}
        
        {/* Overlay to ensure readability */}
        <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]" />

        <div className="relative flex flex-col flex-1 z-10">
          <Navbar />

          <main className="flex-1 py-16 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
            <div className="max-w-7xl mx-auto w-full">
              <div className="text-center mb-16 bg-white/80 backdrop-blur-md inline-block px-12 py-8 rounded-[2rem] shadow-sm border border-white/50">
                <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl mb-4 drop-shadow-sm">
                  Contact Us
                </h1>
                <p className="text-lg text-gray-800 max-w-2xl mx-auto font-medium">
                  Have questions about the Multipurpose Hall project or want to get involved? 
                  We'd love to hear from you. Reach out to us using the details below or send us a message.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Contact Information */}
                <div className="lg:col-span-1 space-y-8">
                  <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/50">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Get in Touch</h3>
                    
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                          <MapPin className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 mb-1">Our Location</p>
                          <p className="text-gray-600 leading-relaxed">{MOCK_CONTACT_INFO.address}</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                          <Phone className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 mb-1">Phone Number</p>
                          <p className="text-gray-600 leading-relaxed">{MOCK_CONTACT_INFO.phone}</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                          <Mail className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 mb-1">Email Address</p>
                          <p className="text-gray-600 leading-relaxed">{MOCK_CONTACT_INFO.email}</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                          <Clock className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 mb-1">Working Hours</p>
                          <p className="text-gray-600 leading-relaxed">{MOCK_CONTACT_INFO.workingHours}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="lg:col-span-2">
                  <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 sm:p-10 shadow-2xl border border-white/50 relative overflow-hidden">
                    {isSuccess && (
                      <div className="absolute inset-0 bg-white/90 backdrop-blur-sm z-10 flex flex-col items-center justify-center text-center p-8 transition-all duration-300">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                          <CheckCircle2 className="w-10 h-10 text-green-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                        <p className="text-gray-600 max-w-md">
                          Thank you for reaching out. We have received your message and will get back to you as soon as possible.
                        </p>
                      </div>
                    )}
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h3>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-white"
                            placeholder="John Doe"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-white"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-white"
                          placeholder="How can we help?"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-white resize-none"
                          placeholder="Type your message here..."
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full sm:w-auto px-8 rounded-xl"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center">
                            <Send className="w-5 h-5 mr-2" />
                            Send Message
                          </span>
                        )}
                      </Button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
