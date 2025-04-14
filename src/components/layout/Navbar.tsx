
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X, User, ChevronDown } from 'lucide-react';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return (
    <nav className="border-b bg-white">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">SS</span>
            </div>
            <span className="text-xl font-bold text-primary hidden md:inline-block">
              Seva Sarthi
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/apply" className="text-gray-700 hover:text-primary transition-colors">Apply</Link>
            <Link to="/track" className="text-gray-700 hover:text-primary transition-colors">Track Status</Link>
            <Link to="/dashboard" className="text-gray-700 hover:text-primary transition-colors">Dashboard</Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1">
                  Services <ChevronDown size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link to="/apply/birth-certificate" className="w-full">Birth Certificate</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/apply/income-certificate" className="w-full">Income Certificate</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/apply/caste-certificate" className="w-full">Caste Certificate</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-2">
                    <User size={18} />
                    <span>My Account</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link to="/dashboard" className="w-full">Dashboard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/profile" className="w-full">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setIsLoggedIn(false)}>
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outline">Login</Button>
                </Link>
                <Link to="/register">
                  <Button>Register</Button>
                </Link>
              </>
            )}
          </div>
          
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-8">
                <Link to="/apply" className="py-2 text-lg hover:text-primary">Apply</Link>
                <Link to="/track" className="py-2 text-lg hover:text-primary">Track Status</Link>
                <Link to="/dashboard" className="py-2 text-lg hover:text-primary">Dashboard</Link>
                <div className="py-2 text-lg hover:text-primary">Services</div>
                <div className="pl-4 flex flex-col space-y-2">
                  <Link to="/apply/birth-certificate" className="py-1 text-base hover:text-primary">Birth Certificate</Link>
                  <Link to="/apply/income-certificate" className="py-1 text-base hover:text-primary">Income Certificate</Link>
                  <Link to="/apply/caste-certificate" className="py-1 text-base hover:text-primary">Caste Certificate</Link>
                </div>
                <div className="pt-4 border-t">
                  {isLoggedIn ? (
                    <>
                      <Link to="/profile" className="py-2 text-lg hover:text-primary">My Profile</Link>
                      <Button variant="ghost" 
                        className="w-full justify-start px-0 py-2 text-lg hover:text-primary"
                        onClick={() => setIsLoggedIn(false)}
                      >
                        Logout
                      </Button>
                    </>
                  ) : (
                    <>
                      <Link to="/login" className="py-2 text-lg hover:text-primary">Login</Link>
                      <Link to="/register" className="py-2 text-lg hover:text-primary">Register</Link>
                    </>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
