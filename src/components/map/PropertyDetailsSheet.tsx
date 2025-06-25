import React from 'react';
import BottomSheet from './BottomSheet';

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
  lat: number;
  lng: number;
}

interface PropertyDetailsSheetProps {
  open: boolean;
  onClose: () => void;
  property: Property;
}

const PropertyDetailsSheet: React.FC<PropertyDetailsSheetProps> = ({ open, onClose, property }) => (
  <BottomSheet open={open} onClose={onClose}>
    <div className="flex items-center justify-between p-4 border-b">
      <h2 className="text-lg font-bold text-primary">Property Details</h2>
      <button className="text-gray-500 hover:text-primary" onClick={onClose}>✕</button>
    </div>
    <div className="p-4">
      <img src={property.image} alt={property.title} className="w-full h-48 object-cover rounded-lg mb-4" />
      <div className="flex gap-2 mb-3">
        <span className={`px-2 py-1 rounded text-xs font-semibold ${property.status === 'For Sale' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>{property.status}</span>
        {property.featured && (<span className="px-2 py-1 rounded text-xs font-semibold bg-red-100 text-red-800">Featured</span>)}
      </div>
      <h3 className="font-semibold text-lg mb-2">{property.title}</h3>
      <p className="text-2xl font-bold text-primary mb-2">{property.price}</p>
      <p className="text-muted-foreground text-sm mb-4">{property.location}</p>
      <div className="grid grid-cols-3 gap-2 text-sm text-muted-foreground mb-4">
        <div className="text-center"><div className="font-semibold">{property.beds}</div><div>Beds</div></div>
        <div className="text-center"><div className="font-semibold">{property.baths}</div><div>Baths</div></div>
        <div className="text-center"><div className="font-semibold">{property.sqft}</div><div>Sqft</div></div>
      </div>
    </div>
  </BottomSheet>
);

export default PropertyDetailsSheet; 