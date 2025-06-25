export interface Property {
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

export type PropertyStatus = 'all' | 'For Sale' | 'For Rent';
export type BedroomOption = 'all' | '2' | '3' | '4'; 