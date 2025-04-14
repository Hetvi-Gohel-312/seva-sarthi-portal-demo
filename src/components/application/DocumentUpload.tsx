
import { useState } from "react";
import { Upload, X, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/components/ui/use-toast";

interface DocumentUploadProps {
  fileType: "Image" | "PDF";
  maxSize: number;
}

const DocumentUpload = ({ fileType, maxSize }: DocumentUploadProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [uploaded, setUploaded] = useState(false);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    
    const selectedFile = e.target.files[0];
    
    // Check file size (convert maxSize from MB to bytes)
    if (selectedFile.size > maxSize * 1024 * 1024) {
      toast({
        title: "File too large",
        description: `File size should be less than ${maxSize}MB`,
        variant: "destructive",
      });
      return;
    }
    
    // Check file type
    if (fileType === "Image" && !selectedFile.type.startsWith("image/")) {
      toast({
        title: "Invalid file type",
        description: "Please upload only image files",
        variant: "destructive",
      });
      return;
    }
    
    if (fileType === "PDF" && selectedFile.type !== "application/pdf") {
      toast({
        title: "Invalid file type",
        description: "Please upload only PDF files",
        variant: "destructive",
      });
      return;
    }
    
    setFile(selectedFile);
    
    // Generate preview for images
    if (fileType === "Image") {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setPreview(null);
    }
    
    setUploaded(false);
  };

  const handleUpload = () => {
    if (!file) return;
    
    setUploading(true);
    setProgress(0);
    
    // Simulate upload progress
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 20;
        if (newProgress >= 100) {
          clearInterval(interval);
          setUploading(false);
          setUploaded(true);
          toast({
            title: "Upload Complete",
            description: `${file.name} has been uploaded successfully`,
          });
          return 100;
        }
        return newProgress;
      });
    }, 500);
  };

  const handleRemove = () => {
    setFile(null);
    setPreview(null);
    setUploaded(false);
    setProgress(0);
  };

  return (
    <div className="border border-dashed border-gray-300 rounded-md p-4">
      {!file ? (
        <div className="flex flex-col items-center justify-center py-6">
          <div className="mb-4">
            <Upload className="h-10 w-10 text-gray-400" />
          </div>
          <p className="text-gray-700 mb-2">Drag & drop or click to upload</p>
          <p className="text-gray-500 text-sm mb-4">
            {fileType === "Image" 
              ? "PNG, JPG or JPEG up to " 
              : "PDF up to "}
            {maxSize}MB
          </p>
          <input
            type="file"
            accept={fileType === "Image" ? "image/*" : "application/pdf"}
            className="hidden"
            id="file-upload"
            onChange={handleFileChange}
          />
          <label htmlFor="file-upload">
            <Button variant="outline" type="button" className="cursor-pointer">
              Select File
            </Button>
          </label>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-3">
              {preview && fileType === "Image" ? (
                <div className="h-14 w-14 border rounded overflow-hidden">
                  <img src={preview} alt="Preview" className="h-full w-full object-cover" />
                </div>
              ) : (
                <div className="h-14 w-14 bg-gray-100 flex items-center justify-center rounded">
                  <span className="text-xs font-semibold">PDF</span>
                </div>
              )}
              <div>
                <p className="text-sm font-medium">{file.name}</p>
                <p className="text-xs text-gray-500">
                  {(file.size / (1024 * 1024)).toFixed(2)} MB
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleRemove}
              disabled={uploading}
              className="text-gray-500 hover:text-destructive"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          {uploading && (
            <div className="space-y-2">
              <Progress value={progress} className="h-2" />
              <p className="text-xs text-gray-500">Uploading... {progress}%</p>
            </div>
          )}
          
          {uploaded ? (
            <div className="flex items-center text-sm text-green-600 space-x-1">
              <CheckCircle2 className="h-4 w-4" />
              <span>Upload complete</span>
            </div>
          ) : (
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleUpload}
              disabled={uploading}
              className={uploading ? "opacity-50 cursor-not-allowed" : ""}
            >
              {uploading ? "Uploading..." : "Upload"}
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default DocumentUpload;
