
import { useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import ApplicationForm from "@/components/application/ApplicationForm";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Apply = () => {
  const { certificateType } = useParams();
  const [selectedTab, setSelectedTab] = useState(certificateType || "birth");
  
  const certificateOptions = [
    { id: "birth", name: "Birth Certificate" },
    { id: "income", name: "Income Certificate" },
    { id: "caste", name: "Caste Certificate" },
    { id: "residence", name: "Residence Certificate" },
  ];

  return (
    <Layout>
      <div className="bg-neutral py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-12">Apply for Certificate</h1>
          
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-6">
              <Tabs 
                value={selectedTab} 
                onValueChange={setSelectedTab}
                className="w-full"
              >
                <TabsList className="grid grid-cols-2 md:grid-cols-4">
                  {certificateOptions.map((cert) => (
                    <TabsTrigger key={cert.id} value={cert.id}>
                      {cert.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
                
                {certificateOptions.map((cert) => (
                  <TabsContent key={cert.id} value={cert.id} className="mt-6">
                    <ApplicationForm 
                      certificateType={cert.name.split(" ")[0]}
                    />
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Apply;
