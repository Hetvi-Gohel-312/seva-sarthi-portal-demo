
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, User, FileCheck, Download, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Birth Certificate",
    icon: <User className="h-10 w-10 text-primary" />,
    description: "Apply for birth certificate with required details and supporting documents.",
    link: "/apply/birth-certificate"
  },
  {
    title: "Income Certificate",
    icon: <FileText className="h-10 w-10 text-primary" />,
    description: "Get income certificate with verification of your financial information.",
    link: "/apply/income-certificate"
  },
  {
    title: "Caste Certificate",
    icon: <Users className="h-10 w-10 text-primary" />,
    description: "Apply for caste certificate with proper documentation and verification.",
    link: "/apply/caste-certificate"
  },
  {
    title: "Residence Certificate",
    icon: <FileCheck className="h-10 w-10 text-primary" />,
    description: "Obtain residence proof certificate with address verification.",
    link: "/apply/residence-certificate"
  },
  {
    title: "Marriage Certificate",
    icon: <Users className="h-10 w-10 text-primary" />,
    description: "Apply for marriage certificate with required documentation.",
    link: "/apply/marriage-certificate"
  },
  {
    title: "Domicile Certificate",
    icon: <Download className="h-10 w-10 text-primary" />,
    description: "Get domicile certificate proving your residence status.",
    link: "/apply/domicile-certificate"
  }
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-neutral">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Apply for various certificates and documents through our streamlined digital platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border border-gray-200 transition-all hover:shadow-md card-hover">
              <CardHeader className="pb-2">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Link to={service.link} className="w-full">
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                    Apply Now
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/apply">
            <Button size="lg">View All Services</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
