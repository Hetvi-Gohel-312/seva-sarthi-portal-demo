
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Clock, XCircle, Eye, Download, RefreshCw, Filter } from "lucide-react";
import { Link } from "react-router-dom";

// Mock data for applications
const applications = [
  {
    id: "SEVA-152349",
    type: "Birth Certificate",
    appliedDate: "2023-10-15",
    status: "approved",
    lastUpdated: "2023-10-25"
  },
  {
    id: "SEVA-167238",
    type: "Income Certificate",
    appliedDate: "2023-11-05",
    status: "processing",
    lastUpdated: "2023-11-10"
  },
  {
    id: "SEVA-198734",
    type: "Caste Certificate",
    appliedDate: "2023-12-01",
    status: "rejected",
    lastUpdated: "2023-12-05"
  },
  {
    id: "SEVA-203957",
    type: "Residence Certificate",
    appliedDate: "2024-01-10",
    status: "processing",
    lastUpdated: "2024-01-18"
  },
  {
    id: "SEVA-214593",
    type: "Birth Certificate",
    appliedDate: "2024-02-05",
    status: "approved",
    lastUpdated: "2024-02-15"
  }
];

// Mock data for uploaded documents
const documents = [
  {
    id: "DOC-152349",
    name: "Aadhaar Card",
    uploadDate: "2023-10-15",
    size: "1.2 MB",
    type: "PDF"
  },
  {
    id: "DOC-167238",
    name: "Passport Photo",
    uploadDate: "2023-11-05",
    size: "0.5 MB",
    type: "Image"
  },
  {
    id: "DOC-198734",
    name: "Address Proof",
    uploadDate: "2023-12-01",
    size: "2.3 MB",
    type: "PDF"
  },
  {
    id: "DOC-203957",
    name: "Income Proof",
    uploadDate: "2024-01-10",
    size: "1.8 MB",
    type: "PDF"
  }
];

const Dashboard = () => {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return <Badge className="bg-green-500"><CheckCircle2 className="h-3 w-3 mr-1" /> Approved</Badge>;
      case "processing":
        return <Badge className="bg-amber-500"><Clock className="h-3 w-3 mr-1" /> Processing</Badge>;
      case "rejected":
        return <Badge className="bg-red-500"><XCircle className="h-3 w-3 mr-1" /> Rejected</Badge>;
      default:
        return null;
    }
  };

  return (
    <Layout>
      <div className="bg-neutral py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
              <p className="text-gray-600">Manage your applications and documents</p>
            </div>
            <div className="mt-4 md:mt-0">
              <Link to="/apply">
                <Button>New Application</Button>
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Total Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold">{applications.length}</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Approved</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-green-600">
                  {applications.filter(app => app.status === "approved").length}
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">In Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-amber-600">
                  {applications.filter(app => app.status === "processing").length}
                </p>
              </CardContent>
            </Card>
          </div>
          
          <Tabs defaultValue="applications" className="space-y-6">
            <TabsList className="w-full md:w-auto">
              <TabsTrigger value="applications">Applications</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
              <TabsTrigger value="profile">Profile</TabsTrigger>
            </TabsList>
            
            <TabsContent value="applications">
              <Card>
                <CardHeader>
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <CardTitle>My Applications</CardTitle>
                    <div className="flex space-x-2 mt-4 md:mt-0">
                      <Button variant="outline" size="sm">
                        <Filter className="h-4 w-4 mr-2" /> Filter
                      </Button>
                      <Button variant="outline" size="sm">
                        <RefreshCw className="h-4 w-4 mr-2" /> Refresh
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-2">Application ID</th>
                          <th className="text-left py-3 px-2">Type</th>
                          <th className="text-left py-3 px-2">Applied On</th>
                          <th className="text-left py-3 px-2">Last Updated</th>
                          <th className="text-left py-3 px-2">Status</th>
                          <th className="text-left py-3 px-2">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {applications.map((app) => (
                          <tr key={app.id} className="border-b">
                            <td className="py-3 px-2 font-medium">{app.id}</td>
                            <td className="py-3 px-2">{app.type}</td>
                            <td className="py-3 px-2">{app.appliedDate}</td>
                            <td className="py-3 px-2">{app.lastUpdated}</td>
                            <td className="py-3 px-2">{getStatusBadge(app.status)}</td>
                            <td className="py-3 px-2">
                              <div className="flex space-x-2">
                                <Link to={`/track?id=${app.id}`}>
                                  <Button variant="ghost" size="sm">
                                    <Eye className="h-4 w-4" />
                                  </Button>
                                </Link>
                                {app.status === "approved" && (
                                  <Button variant="ghost" size="sm">
                                    <Download className="h-4 w-4" />
                                  </Button>
                                )}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="documents">
              <Card>
                <CardHeader>
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <CardTitle>My Documents</CardTitle>
                    <Button variant="outline" size="sm">
                      Upload New Document
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-2">Document ID</th>
                          <th className="text-left py-3 px-2">Name</th>
                          <th className="text-left py-3 px-2">Upload Date</th>
                          <th className="text-left py-3 px-2">Type</th>
                          <th className="text-left py-3 px-2">Size</th>
                          <th className="text-left py-3 px-2">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {documents.map((doc) => (
                          <tr key={doc.id} className="border-b">
                            <td className="py-3 px-2 font-medium">{doc.id}</td>
                            <td className="py-3 px-2">{doc.name}</td>
                            <td className="py-3 px-2">{doc.uploadDate}</td>
                            <td className="py-3 px-2">{doc.type}</td>
                            <td className="py-3 px-2">{doc.size}</td>
                            <td className="py-3 px-2">
                              <div className="flex space-x-2">
                                <Button variant="ghost" size="sm">
                                  <Eye className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="sm">
                                  <Download className="h-4 w-4" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm text-gray-500">Full Name</p>
                      <p className="font-medium">Amit Patel</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Mobile Number</p>
                      <p className="font-medium">+91 98765 43210</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email Address</p>
                      <p className="font-medium">amit.patel@example.com</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Aadhaar Number</p>
                      <p className="font-medium">XXXX-XXXX-1234</p>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-sm text-gray-500">Address</p>
                      <p className="font-medium">123 Main Street, Satellite, Ahmedabad, Gujarat - 380015</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">Edit Profile</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
