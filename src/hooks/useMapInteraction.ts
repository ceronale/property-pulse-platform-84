import { useState, useCallback } from 'react';
import { Property } from '../types/property';

export const useMapInteraction = () => {
  const [activeProperty, setActiveProperty] = useState<Property | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [clickTimestamp, setClickTimestamp] = useState(0);

  const handleSidebarPropertyClick = useCallback((property: Property) => {
    setActiveProperty(property);
    setDetailsOpen(true);
    setSidebarOpen(false);
    setClickTimestamp(Date.now());
  }, []);

  const handleMarkerClick = useCallback((property: Property) => {
    setActiveProperty(property);
    setDetailsOpen(true);
    setClickTimestamp(Date.now());
  }, []);

  const closeDetails = useCallback(() => {
    setDetailsOpen(false);
    // Don't reset activeProperty to keep the map position
  }, []);

  const openSidebar = useCallback(() => {
    setSidebarOpen(true);
  }, []);

  const closeSidebar = useCallback(() => {
    setSidebarOpen(false);
  }, []);

  return {
    activeProperty,
    sidebarOpen,
    detailsOpen,
    clickTimestamp,
    handleSidebarPropertyClick,
    handleMarkerClick,
    closeDetails,
    openSidebar,
    closeSidebar
  };
}; 