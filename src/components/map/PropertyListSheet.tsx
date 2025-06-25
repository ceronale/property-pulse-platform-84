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

interface PropertyListSheetProps {
  open: boolean;
  onClose: () => void;
  filteredProperties: Property[];
  filterStatus: string;
  setFilterStatus: (v: string) => void;
  filterBeds: string;
  setFilterBeds: (v: string) => void;
  onPropertyClick: (property: Property) => void;
}

const PropertyListSheet: React.FC<PropertyListSheetProps> = ({ open, onClose, filteredProperties, filterStatus, setFilterStatus, filterBeds, setFilterBeds, onPropertyClick }) => (
  <BottomSheet open={open} onClose={onClose}>
    <div className="flex items-center justify-between p-4 border-b">
      <h2 className="text-lg font-bold text-primary">Properties</h2>
      <button className="text-gray-500 hover:text-primary" onClick={onClose}>✕</button>
    </div>
    {/* Filters */}
    <div className="p-4 border-b space-y-2">
      <div>
        <label className="block text-xs font-semibold mb-1">Status</label>
        <select
          className="w-full border rounded px-2 py-1"
          value={filterStatus}
          onChange={e => setFilterStatus(e.target.value)}
        >
          <option value="all">All</option>
          <option value="For Sale">For Sale</option>
          <option value="For Rent">For Rent</option>
        </select>
      </div>
      <div>
        <label className="block text-xs font-semibold mb-1">Bedrooms</label>
        <select
          className="w-full border rounded px-2 py-1"
          value={filterBeds}
          onChange={e => setFilterBeds(e.target.value)}
        >
          <option value="all">All</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>
    </div>
    <ul className="divide-y">
      {filteredProperties.map((property) => (
        <li key={property.id} className="p-4 hover:bg-blue-50 cursor-pointer" onClick={() => onPropertyClick(property)}>
          <div className="font-semibold text-primary">{property.title}</div>
          <div className="text-sm text-muted-foreground">{property.location}</div>
          <div className="text-sm font-bold">{property.price}</div>
        </li>
      ))}
    </ul>
  </BottomSheet>
);

export default PropertyListSheet; 