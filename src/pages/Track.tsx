
import Layout from "@/components/layout/Layout";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Search, CheckCircle2, Clock, XCircle, ArrowRight } from "lucide-react";

const Track = () => {
  const [applicationId, setApplicationId] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [applicationStatus, setApplicationStatus] = useState<any>(null);
  const { toast } = useToast();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!applicationId.trim() || !mobileNumber.trim()) {
      toast({
        title: "Error",
        description: "Please enter both Application ID and Mobile Number",
        variant: "destructive",
      });
      return;
    }
    
    setIsSearching(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSearching(false);
      
      // For demo purposes, generate random status
      if (applicationId.startsWith("SEVA")) {
        const statuses = [
          {
            id: applicationId,
            name: "Amit Patel",
            type: "Birth Certificate",
            date: "2023-10-15",
            status: "approved",
            steps: [
              { name: "Application Submitted", date: "2023-10-15", completed: true },
              { name: "Document Verification", date: "2023-10-18", completed: true },
              { name: "Review by Authority", date: "2023-10-20", completed: true },
              { name: "Certificate Generated", date: "2023-10-25", completed: true }
            ]
          },
          {
            id: applicationId,
            name: "Anita Sharma",
            type: "Income Certificate",
            date: "2023-10-18",
            status: "processing",
            steps: [
              { name: "Application Submitted", date: "2023-10-18", completed: true },
              { name: "Document Verification", date: "2023-10-20", completed: true },
              { name: "Review by Authority", date: "", completed: false },
              { name: "Certificate Generated", date: "", completed: false }
            ]
          },
          {
            id: applicationId,
            name: "Rajesh Kumar",
            type: "Caste Certificate",
            date: "2023-10-10",
            status: "rejected",
            reason: "Insufficient documentation provided. Please reapply with the required documents.",
            steps: [
              { name: "Application Submitted", date: "2023-10-10", completed: true },
              { name: "Document Verification", date: "2023-10-12", completed: false },
              { name: "Review by Authority", date: "", completed: false },
              { name: "Certificate Generated", date: "", completed: false }
            ]
          }
        ];
        
        setApplicationStatus(statuses[Math.floor(Math.random() * statuses.length)]);
      } else {
        toast({
          title: "No Record Found",
          description: "No application found with the provided details.",
          variant: "destructive",
        });
      }
    }, 1500);
  };
  
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "approved":
        return <CheckCircle2 className="h-6 w-6 text-green-500" />;
      case "processing":
        return <Clock className="h-6 w-6 text-amber-500" />;
      case "rejected":
        return <XCircle className="h-6 w-6 text-red-500" />;
      default:
        return null;
    }
  };
  
  const getStatusText = (status: string) => {
    switch (status) {
      case "approved":
        return "Approved";
      case "processing":
        return "In Progress";
      case "rejected":
        return "Rejected";
      default:
        return "Unknown";
    }
  };

  return (
    <Layout>
      <div className="bg-neutral py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold mb-4">Track Your Application</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Enter your application ID and registered mobile number to check the current status of your application
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Track Application Status</CardTitle>
                <CardDescription>Enter the details of your application to check its status</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSearch} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="applicationId">Application ID</Label>
                      <Input
                        id="applicationId"
                        placeholder="e.g. SEVA-123456"
                        value={applicationId}
                        onChange={(e) => setApplicationId(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="mobileNumber">Registered Mobile Number</Label>
                      <Input
                        id="mobileNumber"
                        type="tel"
                        placeholder="Enter registered mobile number"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <Button type="submit" className="w-full md:w-auto" disabled={isSearching}>
                    <Search className="mr-2 h-4 w-4" />
                    {isSearching ? "Searching..." : "Track Now"}
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            {applicationStatus && (
              <Card className="animate-fade-in">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Application ID</p>
                      <CardTitle>{applicationStatus.id}</CardTitle>
                    </div>
                    <div className="flex items-center gap-2">
                      {getStatusIcon(applicationStatus.status)}
                      <span className={`font-medium ${
                        applicationStatus.status === "approved" 
                          ? "text-green-600" 
                          : applicationStatus.status === "processing" 
                          ? "text-amber-600" 
                          : "text-red-600"
                      }`}>
                        {getStatusText(applicationStatus.status)}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <p className="text-sm text-gray-500">Applicant Name</p>
                      <p className="font-medium">{applicationStatus.name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Certificate Type</p>
                      <p className="font-medium">{applicationStatus.type}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Application Date</p>
                      <p className="font-medium">{applicationStatus.date}</p>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold mb-4">Application Progress</h3>
                    <div className="space-y-4">
                      {applicationStatus.steps.map((step: any, index: number) => (
                        <div key={index} className="relative">
                          {index < applicationStatus.steps.length - 1 && (
                            <div 
                              className={`absolute left-4 top-10 h-full w-0.5 -ml-px ${
                                step.completed && applicationStatus.steps[index + 1].completed 
                                  ? "bg-green-500" 
                                  : "bg-gray-300"
                              }`}
                            ></div>
                          )}
                          <div className="flex items-start gap-4">
                            <div 
                              className={`mt-1 flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center ${
                                step.completed 
                                  ? "bg-green-100 text-green-600" 
                                  : "bg-gray-100 text-gray-400"
                              }`}
                            >
                              {step.completed ? (
                                <CheckCircle2 className="h-5 w-5" />
                              ) : (
                                <span className="text-xs">{index + 1}</span>
                              )}
                            </div>
                            <div className="flex flex-col">
                              <p className={`font-medium ${step.completed ? "text-black" : "text-gray-600"}`}>
                                {step.name}
                              </p>
                              {step.date ? (
                                <p className="text-sm text-gray-500">{step.date}</p>
                              ) : (
                                <p className="text-sm text-gray-400">Pending</p>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {applicationStatus.status === "rejected" && (
                    <div className="bg-red-50 p-4 rounded-md border border-red-200 mt-4">
                      <p className="text-red-700 font-medium">Reason for Rejection</p>
                      <p className="text-red-600 mt-1">{applicationStatus.reason}</p>
                    </div>
                  )}
                  
                  {applicationStatus.status === "approved" && (
                    <Button className="w-full md:w-auto mt-4">
                      Download Certificate <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  )}
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Track;
