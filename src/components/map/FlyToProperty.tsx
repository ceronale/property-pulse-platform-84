import { useEffect, useRef } from 'react';
import { useMap } from 'react-leaflet';
import { MAP_CONSTANTS } from '../../constants/map';
import { isAtTargetPosition, hasMapPositionChanged } from '../../utils/map';

interface FlyToPropertyProps {
  latitude: number;
  longitude: number;
  zoom?: number;
  propertyId?: number;
}

export default function FlyToProperty({ 
  latitude, 
  longitude, 
  zoom = MAP_CONSTANTS.PROPERTY_ZOOM, 
  propertyId 
}: FlyToPropertyProps) {
  const map = useMap();
  const lastMapPositionRef = useRef<{ lat: number; lng: number; zoom: number } | null>(null);
  const isUnmountedRef = useRef(false);
  const isFlyingRef = useRef(false);
  const clickCountRef = useRef(0);

  // Increment click count on every render
  clickCountRef.current += 1;

  useEffect(() => {
    if (isUnmountedRef.current) {
      return;
    }

    // Validate coordinates
    if (isNaN(latitude) || isNaN(longitude)) {
      return;
    }

    const currentCenter = map.getCenter();
    const currentZoom = map.getZoom();

    // Check if we're already at the target position
    const isAtTarget = isAtTargetPosition(
      currentCenter.lat, 
      currentCenter.lng, 
      currentZoom,
      latitude, 
      longitude, 
      zoom
    );

    // If we're at target, don't fly
    if (isAtTarget) {
      return;
    }

    // Check if map position has changed since last flyTo
    const mapPositionChanged = hasMapPositionChanged(
      lastMapPositionRef.current,
      currentCenter.lat,
      currentCenter.lng,
      currentZoom
    );

    // If we're flying and map position hasn't changed, skip
    if (isFlyingRef.current && !mapPositionChanged) {
      return;
    }
    
    isFlyingRef.current = true;
    
    // Add a small delay to prevent race conditions
    const timeoutId = setTimeout(() => {
      if (isUnmountedRef.current) {
        isFlyingRef.current = false;
        return;
      }
      
      try {
        map.flyTo([latitude, longitude], zoom, {
          duration: MAP_CONSTANTS.ANIMATION_DURATION,
          easeLinearity: 0.25
        });
        
        console.log('✅ flyTo called successfully');
        
        // Reset flying flag and update last map position after animation completes
        setTimeout(() => {
          isFlyingRef.current = false;
          // Update last map position to the target position (not current position)
          lastMapPositionRef.current = { lat: latitude, lng: longitude, zoom };
        }, MAP_CONSTANTS.ANIMATION_COMPLETE_DELAY);
        
      } catch (error) {
        isFlyingRef.current = false;
      }
    }, MAP_CONSTANTS.FLY_TO_DELAY);
    
    return () => {
      clearTimeout(timeoutId);
      isUnmountedRef.current = true;
    };
  }, [latitude, longitude, zoom, map, propertyId]);

  return null;
} 