
import { Clock, CheckCircle, FileText, AlertCircle } from "lucide-react";

const InfoSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get your certificates in a simple four-step process
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="h-8 w-8 text-primary" />
            </div>
            <div className="relative mb-6">
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-8 hidden lg:block">
                <div className="h-0.5 w-24 bg-gray-300 relative">
                  <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full"></div>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">1. Apply Online</h3>
            <p className="text-gray-600">
              Fill the application form and submit required details
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertCircle className="h-8 w-8 text-primary" />
            </div>
            <div className="relative mb-6">
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-8 hidden lg:block">
                <div className="h-0.5 w-24 bg-gray-300 relative">
                  <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full"></div>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">2. Upload Documents</h3>
            <p className="text-gray-600">
              Upload supporting documents like ID proof
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-primary" />
            </div>
            <div className="relative mb-6">
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-8 hidden lg:block">
                <div className="h-0.5 w-24 bg-gray-300 relative">
                  <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full"></div>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">3. Processing</h3>
            <p className="text-gray-600">
              Application is reviewed and processed by authorities
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">4. Download Certificate</h3>
            <p className="text-gray-600">
              Once approved, download your certificate digitally
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
