import { MAP_CONSTANTS } from '../constants/map';

export const isValidLatLng = (lat: number | undefined, lng: number | undefined): boolean => 
  typeof lat === 'number' && typeof lng === 'number' && !isNaN(lat) && !isNaN(lng);

export const isAtTargetPosition = (
  currentLat: number, 
  currentLng: number, 
  currentZoom: number,
  targetLat: number, 
  targetLng: number, 
  targetZoom: number
): boolean => {
  return (
    Math.abs(currentLat - targetLat) < MAP_CONSTANTS.POSITION_TOLERANCE &&
    Math.abs(currentLng - targetLng) < MAP_CONSTANTS.POSITION_TOLERANCE &&
    Math.abs(currentZoom - targetZoom) < MAP_CONSTANTS.ZOOM_TOLERANCE
  );
};

export const hasMapPositionChanged = (
  lastPosition: { lat: number; lng: number; zoom: number } | null,
  currentLat: number,
  currentLng: number,
  currentZoom: number
): boolean => {
  if (!lastPosition) return true;
  
  return (
    Math.abs(lastPosition.lat - currentLat) > MAP_CONSTANTS.POSITION_TOLERANCE ||
    Math.abs(lastPosition.lng - currentLng) > MAP_CONSTANTS.POSITION_TOLERANCE ||
    Math.abs(lastPosition.zoom - currentZoom) > MAP_CONSTANTS.ZOOM_TOLERANCE
  );
}; 