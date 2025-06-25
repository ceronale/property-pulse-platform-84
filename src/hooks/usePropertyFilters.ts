import { useState, useMemo } from 'react';
import { Property } from '../types/property';
import { PropertyStatus, BedroomOption } from '../types/property';

export const usePropertyFilters = (properties: Property[]) => {
  const [filterStatus, setFilterStatus] = useState<PropertyStatus>('all');
  const [filterBeds, setFilterBeds] = useState<BedroomOption>('all');

  const filteredProperties = useMemo(() => 
    properties.filter((property) => {
      const statusMatch = filterStatus === 'all' || property.status === filterStatus;
      const bedsMatch = filterBeds === 'all' || property.beds === Number(filterBeds);
      return statusMatch && bedsMatch;
    }), [properties, filterStatus, filterBeds]
  );

  return {
    filteredProperties,
    filterStatus,
    setFilterStatus,
    filterBeds,
    setFilterBeds
  };
}; 