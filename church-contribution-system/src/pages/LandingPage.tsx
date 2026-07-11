import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { MOCK_CAMPAIGN } from "../data";
import { Building2, ChevronRight, Heart, Twitter, Facebook, Instagram, Linkedin, Youtube, Plus, Minus } from "lucide-react";
import { useState, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const BACKGROUND_IMAGES = [
  "/bg-hall1.jpg",
  "/bg-hall2.jpg",
  "/bg-hall3.jpg"
];

const FAQS = [
  {
    question: "What is the Multipurpose Hall project?",
    answer: "The Multipurpose Hall is Phase 2 of the Christian Life Assembly Busanza development. It will serve as a central hub for community gatherings, youth programs, and larger congregational events."
  },
  {
    question: "When is the construction expected to be completed?",
    answer: "While timelines depend on funding milestones, we aim to complete the main structure within the next 18 months. Regular updates will be posted on our progress page."
  },
  {
    question: "How can I make a contribution?",
    answer: "You can contribute securely through this platform using Mobile Money (MTN MoMo, Airtel Money) or direct Bank Transfer. Just click the 'Contribute' button to get started."
  },
  {
    question: "Are my contributions private?",
    answer: "Yes, all personal contributions and donor details are kept strictly confidential and secure. Only aggregated progress data is shown publicly."
  }
];

export default function LandingPage() {
  const navigate = useNavigate();
  const progress = (MOCK_CAMPAIGN.currentAmount / MOCK_CAMPAIGN.targetAmount) * 100;
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % BACKGROUND_IMAGES.length);
    }, 5000); // Change image every 5 seconds
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col relative">
      
      {/* Hero Section Container */}
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
          {/* Navbar */}
          <Navbar />

          {/* Hero Content */}
          <main className="flex-1 flex flex-col items-center justify-center text-center px-4 pt-16 pb-16 sm:pt-24 sm:pb-24">
            <div className="bg-white/90 backdrop-blur-md p-8 sm:p-12 rounded-[2rem] shadow-2xl border border-white/50 max-w-4xl flex flex-col items-center w-full">
            <div className="inline-flex items-center rounded-full border border-primary/10 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-8">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              Multipurpose Hall Active
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-6 leading-tight drop-shadow-sm">
              {MOCK_CAMPAIGN.name}
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mb-12">
              The phase 2 of Christian Life Assembly Busanza, desired to develop a Multipurpose hall building. Your private contribution helps us lay the foundation for generations to come.
            </p>

            {/* Progress Card */}
            <div className="w-full max-w-2xl bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-12 text-left">
              <div className="flex justify-between items-end mb-4">
                <div>
                  <p className="text-sm font-medium text-gray-500 mb-1">Raised so far</p>
                  <p className="text-3xl font-bold text-gray-900">
                    RWF {MOCK_CAMPAIGN.currentAmount.toLocaleString()}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-500 mb-1">Goal</p>
                  <p className="text-xl font-semibold text-gray-400">
                    RWF {MOCK_CAMPAIGN.targetAmount.toLocaleString()}
                  </p>
                </div>
              </div>
              
              <div className="h-4 w-full bg-gray-100 rounded-full overflow-hidden mb-4">
                <div 
                  className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
              
              <div className="flex justify-between items-center text-sm font-medium">
                <span className="text-primary">{progress.toFixed(1)}% Funded</span>
                <span className="text-gray-500">
                  Ends {new Date(MOCK_CAMPAIGN.endDate).toLocaleDateString()}
                </span>
              </div>
            </div>

            <Button onClick={() => navigate("/contribute")} size="lg" className="group rounded-full pl-8 pr-6">
              Make a Contribution
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          </main>
        </div>
      </div>

      {/* Image Gallery Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Project Gallery</h2>
            <p className="text-lg text-gray-600">Explore architectural renders and progress photos.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { src: "/bg-hall1.jpg", title: "Exterior View", desc: "Main entrance and facade" },
              { src: "/bg-hall2.jpg", title: "Interior Layout", desc: "Spacious congregation area" },
              { src: "/bg-hall3.jpg", title: "Community Space", desc: "Multi-purpose gathering zones" }
            ].map((img, i) => (
              <div key={i} className="group cursor-pointer rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <div className="absolute inset-0 bg-gray-100 animate-pulse" />
                  <img 
                    src={img.src} 
                    alt={img.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 relative z-10"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{img.title}</h3>
                  <p className="text-gray-500 text-sm">{img.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Everything you need to know about the Multipurpose Hall project and how you can support it.</p>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                >
                  <span className="font-semibold text-gray-900 text-lg pr-8">{faq.question}</span>
                  {openFaqIndex === index ? (
                    <Minus className="w-5 h-5 text-primary flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaqIndex === index ? "max-h-48 pb-5 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
