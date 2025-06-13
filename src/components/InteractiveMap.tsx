
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '../contexts/LanguageContext';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in react-leaflet
const customIcon = new Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const InteractiveMap = () => {
  const { t } = useLanguage();
  
  // Sample properties with coordinates
  const properties = [
    {
      id: 1,
      title: "Modern Luxury Villa",
      price: "$850,000",
      location: "Beverly Hills, CA",
      coordinates: [34.0736, -118.4004],
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
      coordinates: [40.7831, -73.9712],
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
      coordinates: [30.2672, -97.7431],
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
      coordinates: [25.7617, -80.1918],
      beds: 3,
      baths: 3,
      sqft: "2,100",
      image: "/placeholder.svg",
      status: "For Sale",
      featured: false
    }
  ];

  const [selectedProperty, setSelectedProperty] = useState(null);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-primary mb-4">{t('map.title') || 'Interactive Property Map'}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('map.description') || 'Explore properties on our interactive map. Click on markers to view details.'}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Map Container */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden">
              <div className="h-[600px] w-full">
                <MapContainer
                  center={[39.8283, -98.5795]} // Center of USA
                  zoom={4}
                  style={{ height: '100%', width: '100%' }}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                  {properties.map((property) => (
                    <Marker
                      key={property.id}
                      position={property.coordinates}
                      icon={customIcon}
                      eventHandlers={{
                        click: () => setSelectedProperty(property),
                      }}
                    >
                      <Popup>
                        <div className="p-2">
                          <h3 className="font-semibold text-sm mb-1">{property.title}</h3>
                          <p className="text-lg font-bold text-primary mb-1">{property.price}</p>
                          <p className="text-xs text-muted-foreground mb-2">{property.location}</p>
                          <div className="flex gap-2 text-xs mb-2">
                            <span>{property.beds} beds</span>
                            <span>{property.baths} baths</span>
                            <span>{property.sqft} sqft</span>
                          </div>
                          <Button size="sm" className="text-xs">View Details</Button>
                        </div>
                      </Popup>
                    </Marker>
                  ))}
                </MapContainer>
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
                      {selectedProperty.status === 'For Sale' ? (t('featured.forSale') || 'For Sale') : (t('featured.forRent') || 'For Rent')}
                    </Badge>
                    {selectedProperty.featured && (
                      <Badge variant="destructive">{t('featured.featured') || 'Featured'}</Badge>
                    )}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{selectedProperty.title}</h3>
                  <p className="text-2xl font-bold text-primary mb-2">{selectedProperty.price}</p>
                  <p className="text-muted-foreground text-sm mb-4">{selectedProperty.location}</p>
                  
                  <div className="grid grid-cols-3 gap-2 text-sm text-muted-foreground mb-4">
                    <div className="text-center">
                      <div className="font-semibold">{selectedProperty.beds}</div>
                      <div>{t('featured.beds') || 'Beds'}</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold">{selectedProperty.baths}</div>
                      <div>{t('featured.baths') || 'Baths'}</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold">{selectedProperty.sqft}</div>
                      <div>{t('featured.sqft') || 'Sqft'}</div>
                    </div>
                  </div>
                  
                  <Button className="w-full mb-2">{t('featured.viewDetails') || 'View Details'}</Button>
                  <Button variant="outline" className="w-full">{t('map.contact') || 'Contact Seller'}</Button>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="p-8 text-center">
                  <div className="text-muted-foreground">
                    <p className="mb-2">{t('map.selectProperty') || 'Select a property'}</p>
                    <p className="text-sm">{t('map.clickMarker') || 'Click on a map marker to view property details'}</p>
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
