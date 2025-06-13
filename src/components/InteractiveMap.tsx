
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin } from 'lucide-react';

interface Property {
  id: number;
  title: string;
  price: string;
  location: string;
  beds: number;
  baths: number;
  sqft: string;
  image: string;
  status: string;
  featured: boolean;
}

const InteractiveMap = () => {
  // Sample properties
  const properties: Property[] = [
    {
      id: 1,
      title: "Modern Luxury Villa",
      price: "$850,000",
      location: "Beverly Hills, CA",
      beds: 4,
      baths: 3,
      sqft: "2,500",
      image: "/placeholder.svg",
      status: "For Sale",
      featured: true
    },
    {
      id: 2,
      title: "Downtown Apartment",
      price: "$3,200/month",
      location: "Manhattan, NY",
      beds: 2,
      baths: 2,
      sqft: "1,200",
      image: "/placeholder.svg",
      status: "For Rent",
      featured: false
    },
    {
      id: 3,
      title: "Family Suburban Home",
      price: "$650,000",
      location: "Austin, TX",
      beds: 3,
      baths: 2,
      sqft: "1,800",
      image: "/placeholder.svg",
      status: "For Sale",
      featured: true
    },
    {
      id: 4,
      title: "Waterfront Condo",
      price: "$1,200,000",
      location: "Miami, FL",
      beds: 3,
      baths: 3,
      sqft: "2,100",
      image: "/placeholder.svg",
      status: "For Sale",
      featured: false
    }
  ];

  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Interactive Property Map
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore properties on our interactive map. Click on properties to view details.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Map Placeholder */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden">
              <div className="h-[600px] w-full bg-gradient-to-br from-blue-50 to-green-50 flex flex-col items-center justify-center">
                <MapPin className="w-16 h-16 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-2">Interactive Map Coming Soon</h3>
                <p className="text-muted-foreground text-center max-w-md">
                  Our interactive property map will be available here. Browse properties below to get started.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {properties.map((property) => (
                    <button
                      key={property.id}
                      onClick={() => setSelectedProperty(property)}
                      className="p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-left"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span className="font-medium text-sm">{property.title}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{property.location}</p>
                      <p className="text-sm font-bold text-primary">{property.price}</p>
                    </button>
                  ))}
                </div>
              </div>
            </Card>
          </div>
          
          {/* Property Details Panel */}
          <div className="lg:col-span-1">
            {selectedProperty ? (
              <Card>
                <CardContent className="p-4">
                  <img 
                    src={selectedProperty.image} 
                    alt={selectedProperty.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="flex gap-2 mb-3">
                    <Badge variant={selectedProperty.status === 'For Sale' ? 'default' : 'secondary'}>
                      {selectedProperty.status === 'For Sale' ? 'For Sale' : 'For Rent'}
                    </Badge>
                    {selectedProperty.featured && (
                      <Badge variant="destructive">Featured</Badge>
                    )}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{selectedProperty.title}</h3>
                  <p className="text-2xl font-bold text-primary mb-2">{selectedProperty.price}</p>
                  <p className="text-muted-foreground text-sm mb-4">{selectedProperty.location}</p>
                  
                  <div className="grid grid-cols-3 gap-2 text-sm text-muted-foreground mb-4">
                    <div className="text-center">
                      <div className="font-semibold">{selectedProperty.beds}</div>
                      <div>Beds</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold">{selectedProperty.baths}</div>
                      <div>Baths</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold">{selectedProperty.sqft}</div>
                      <div>Sqft</div>
                    </div>
                  </div>
                  
                  <Button className="w-full mb-2">View Details</Button>
                  <Button variant="outline" className="w-full">Contact Seller</Button>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="p-8 text-center">
                  <div className="text-muted-foreground">
                    <p className="mb-2">Select a property</p>
                    <p className="text-sm">Click on a property above to view details</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;
