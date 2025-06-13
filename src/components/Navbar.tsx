
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { User, Search, Map } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Map className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-primary">RealEstate Pro</span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="/properties" className="text-muted-foreground hover:text-primary transition-colors">
              Buy
            </Link>
            <Link to="/properties" className="text-muted-foreground hover:text-primary transition-colors">
              Rent
            </Link>
            <Link to="/sell" className="text-muted-foreground hover:text-primary transition-colors">
              Sell
            </Link>
            <Link to="/map" className="text-muted-foreground hover:text-primary transition-colors">
              Map View
            </Link>
          </div>

          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm">
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
            {isLoggedIn ? (
              <Button variant="outline" size="sm">
                <User className="w-4 h-4 mr-2" />
                Dashboard
              </Button>
            ) : (
              <div className="flex space-x-2">
                <Link to="/login">
                  <Button variant="ghost" size="sm">Log In</Button>
                </Link>
                <Link to="/signup">
                  <Button size="sm">Sign Up</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
