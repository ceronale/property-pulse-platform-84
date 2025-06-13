
import React from 'react';
import { Map } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-foreground rounded-lg flex items-center justify-center">
                <Map className="w-5 h-5 text-primary" />
              </div>
              <span className="text-xl font-bold">RealEstate Pro</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Your trusted partner in finding the perfect property. Connecting buyers, sellers, and renters since 2024.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">For Buyers</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Browse Properties</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Map Search</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Saved Searches</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Property Alerts</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">For Sellers</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">List Your Property</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Seller Dashboard</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Market Analysis</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Pricing Tools</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; 2024 RealEstate Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
