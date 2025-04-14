
import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

const StatusTracker = () => {
  const [applicationId, setApplicationId] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const { toast } = useToast();

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!applicationId.trim() || !phoneNumber.trim()) {
      toast({
        title: "Error",
        description: "Please enter both Application ID and Phone Number",
        variant: "destructive",
      });
      return;
    }
    
    // In a real app, this would make an API call to check status
    toast({
      title: "Application Tracked",
      description: "Redirecting to application status page...",
    });
    
    // In real implementation, this would navigate to status page
    console.log("Tracking application:", applicationId, phoneNumber);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Track Your Application</h2>
            <p className="text-lg text-gray-600">
              Enter your application ID and mobile number to check the current status
            </p>
          </div>
          
          <Card className="p-6 md:p-8 shadow-lg border border-gray-200">
            <form onSubmit={handleTrack} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="applicationId">Application ID</Label>
                <Input
                  id="applicationId"
                  placeholder="Enter your application ID"
                  value={applicationId}
                  onChange={(e) => setApplicationId(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phoneNumber">Registered Mobile Number</Label>
                <Input
                  id="phoneNumber"
                  type="tel"
                  placeholder="Enter your mobile number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              
              <Button type="submit" className="w-full" size="lg">
                <Search className="mr-2 h-4 w-4" /> Track Now
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StatusTracker;
