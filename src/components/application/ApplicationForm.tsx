
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import DocumentUpload from "./DocumentUpload";

interface ApplicationFormProps {
  certificateType: string;
}

const ApplicationForm = ({ certificateType }: ApplicationFormProps) => {
  const [activeTab, setActiveTab] = useState("personal");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    // Personal details
    name: "",
    gender: "",
    dob: "",
    mobile: "",
    email: "",
    aadhar: "",
    
    // Address details
    address: "",
    district: "",
    state: "",
    pincode: "",
    
    // Certificate specific details
    details: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Application Submitted",
        description: `Your application for ${certificateType} certificate has been submitted successfully.`,
      });
      
      // Generate and show application ID
      toast({
        title: "Application ID",
        description: `Your application ID is: SEVA-${Math.floor(100000 + Math.random() * 900000)}`,
        variant: "default",
      });
    }, 1500);
  };
  
  const nextTab = () => {
    if (activeTab === "personal") setActiveTab("address");
    else if (activeTab === "address") setActiveTab("documents");
  };
  
  const prevTab = () => {
    if (activeTab === "address") setActiveTab("personal");
    else if (activeTab === "documents") setActiveTab("address");
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl">{certificateType} Certificate Application</CardTitle>
        <CardDescription>Fill in the required details to apply for your certificate</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="personal">Personal Details</TabsTrigger>
              <TabsTrigger value="address">Address Details</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
            </TabsList>
            
            {/* Personal Details Tab */}
            <TabsContent value="personal" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="gender">Gender</Label>
                  <Select 
                    onValueChange={(value) => handleSelectChange("gender", value)}
                    defaultValue={formData.gender}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="dob">Date of Birth</Label>
                  <Input
                    id="dob"
                    name="dob"
                    type="date"
                    value={formData.dob}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="mobile">Mobile Number</Label>
                  <Input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    placeholder="Enter your mobile number"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="aadhar">Aadhaar Number</Label>
                  <Input
                    id="aadhar"
                    name="aadhar"
                    placeholder="Enter your Aadhaar number"
                    value={formData.aadhar}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="md:col-span-2">
                  <Button type="button" onClick={nextTab} className="w-full">
                    Next
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            {/* Address Details Tab */}
            <TabsContent value="address" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2 space-y-2">
                  <Label htmlFor="address">Complete Address</Label>
                  <Textarea
                    id="address"
                    name="address"
                    placeholder="Enter your complete address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="min-h-[100px]"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="district">District</Label>
                  <Input
                    id="district"
                    name="district"
                    placeholder="Enter your district"
                    value={formData.district}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="state">State</Label>
                  <Select 
                    onValueChange={(value) => handleSelectChange("state", value)}
                    defaultValue={formData.state}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select state" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="gujarat">Gujarat</SelectItem>
                      <SelectItem value="maharashtra">Maharashtra</SelectItem>
                      <SelectItem value="rajasthan">Rajasthan</SelectItem>
                      <SelectItem value="madhya-pradesh">Madhya Pradesh</SelectItem>
                      <SelectItem value="delhi">Delhi</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="pincode">Pin Code</Label>
                  <Input
                    id="pincode"
                    name="pincode"
                    placeholder="Enter your pin code"
                    value={formData.pincode}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="md:col-span-2 space-y-2">
                  <Label htmlFor="details">Additional Details</Label>
                  <Textarea
                    id="details"
                    name="details"
                    placeholder={`Please provide any additional details required for ${certificateType} certificate`}
                    value={formData.details}
                    onChange={handleChange}
                    className="min-h-[100px]"
                  />
                </div>
                
                <div className="md:col-span-2 grid grid-cols-2 gap-4">
                  <Button type="button" variant="outline" onClick={prevTab}>
                    Previous
                  </Button>
                  <Button type="button" onClick={nextTab}>
                    Next
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            {/* Documents Tab */}
            <TabsContent value="documents" className="space-y-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2">Aadhaar Card</h3>
                  <DocumentUpload fileType="Image" maxSize={2} />
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Photo</h3>
                  <DocumentUpload fileType="Image" maxSize={1} />
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Address Proof</h3>
                  <DocumentUpload fileType="PDF" maxSize={5} />
                </div>
                
                {certificateType === "Birth" && (
                  <div>
                    <h3 className="text-lg font-medium mb-2">Hospital Certificate</h3>
                    <DocumentUpload fileType="PDF" maxSize={5} />
                  </div>
                )}
                
                {certificateType === "Income" && (
                  <div>
                    <h3 className="text-lg font-medium mb-2">Income Proof</h3>
                    <DocumentUpload fileType="PDF" maxSize={5} />
                  </div>
                )}
                
                {certificateType === "Caste" && (
                  <div>
                    <h3 className="text-lg font-medium mb-2">Community Certificate</h3>
                    <DocumentUpload fileType="PDF" maxSize={5} />
                  </div>
                )}
                
                <div className="grid grid-cols-2 gap-4">
                  <Button type="button" variant="outline" onClick={prevTab}>
                    Previous
                  </Button>
                  <Button type="submit" disabled={isLoading}>
                    {isLoading ? "Submitting..." : "Submit Application"}
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </form>
      </CardContent>
    </Card>
  );
};

export default ApplicationForm;
