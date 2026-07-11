import { useNavigate } from "react-router-dom";
import { Twitter, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="bg-[#2A2B2A] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          <div className="flex items-center gap-6">
            <p className="text-gray-300 leading-relaxed text-sm max-w-2xl">
              <strong className="text-white">Christian Life Assembly Busanza</strong> is a dedicated initiative focused on developing our community infrastructure. Your contributions directly support the Multipurpose Hall project, laying the foundation for generations to come.
            </p>
          </div>
          
          <div className="text-xl font-light text-gray-300 whitespace-nowrap">
            Multipurpose Hall
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Christian Life Assembly Busanza. All Rights Reserved.
          </p>
          
          <div className="flex flex-wrap items-center gap-8">
            <div className="flex gap-6 text-sm font-medium text-gray-300">
              <button onClick={() => navigate("/privacy-policy")} className="hover:text-white transition-colors uppercase tracking-wide">Privacy Policy</button>
              <button onClick={() => navigate("/contact-us")} className="hover:text-white transition-colors uppercase tracking-wide">Contact Us</button>
            </div>
            <div className="flex items-center space-x-4 text-gray-400">
              <a href="#" className="hover:text-white transition-colors"><Twitter className="w-4 h-4" /></a>
              <a href="#" className="hover:text-white transition-colors"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="hover:text-white transition-colors"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-4 h-4" /></a>
              <a href="#" className="hover:text-white transition-colors"><Youtube className="w-4 h-4" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
