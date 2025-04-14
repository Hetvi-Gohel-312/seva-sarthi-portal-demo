
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, FileText, Calendar } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-[#1A4D8C] text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Simplifying Document Services for Citizens
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Apply for government certificates, track your applications, and access citizen services - all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/register">
                <Button size="lg" className="bg-accent hover:bg-accent-hover text-white">
                  Get Started
                </Button>
              </Link>
              <Link to="/track">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Track Application
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="lg:pl-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors card-hover">
              <div className="bg-accent/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <FileText className="text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Apply for Certificates</h3>
              <p className="opacity-80">Birth, income, caste, and residence certificates</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors card-hover">
              <div className="bg-accent/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Search className="text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Track Applications</h3>
              <p className="opacity-80">Check status of your submitted applications</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors card-hover sm:col-span-2">
              <div className="bg-accent/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Calendar className="text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Manage Documents</h3>
              <p className="opacity-80">Upload and organize your supporting documents</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
