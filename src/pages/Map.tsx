import React, { useRef } from 'react';
import Navbar from '../components/Navbar';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import FlyToProperty from '../components/map/FlyToProperty';
import { Property } from '../types/property';
import { properties } from '../data/properties';
import { MAP_CONSTANTS } from '../constants/map';
import { isValidLatLng } from '../utils/map';
import { usePropertyFilters } from '../hooks/usePropertyFilters';
import { useMapInteraction } from '../hooks/useMapInteraction';

// Add this at the top level (outside the component) to ensure global CSS fix
if (typeof window !== 'undefined') {
  const style = document.createElement('style');
  style.innerHTML = `
    html, body, #root {
      height: 100%;
      width: 100%;
      margin: 0;
      padding: 0;
      overflow: hidden;
    }
  `;
  document.head.appendChild(style);
}

const FullScreenMap = () => {
  const mapRef = useRef(null);

  // Use custom hooks for state management
  const {
    activeProperty,
    sidebarOpen,
    detailsOpen,
    clickTimestamp,
    handleSidebarPropertyClick,
    handleMarkerClick,
    closeDetails,
    openSidebar,
    closeSidebar
  } = useMapInteraction();

  const {
    filteredProperties,
    filterStatus,
    setFilterStatus,
    filterBeds,
    setFilterBeds
  } = usePropertyFilters(properties);

  // Shared map configuration - only change center/zoom when property is first selected
  const mapCenter: [number, number] = activeProperty ? [activeProperty.lat, activeProperty.lng] : MAP_CONSTANTS.DEFAULT_POSITION;
  const mapZoom = activeProperty ? MAP_CONSTANTS.PROPERTY_ZOOM : MAP_CONSTANTS.DEFAULT_ZOOM;

  // Responsive helpers
  // On desktop: double sidebar, on mobile: overlays
  return (
    <div style={{ height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <div style={{ flex: 1, minHeight: 0, position: 'relative' }}>
        {/* Single Map Container - always full screen */}
        <div 
          style={{ 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            width: '100vw', 
            height: '100dvh', 
            zIndex: 0 
          }}
        >
          <MapContainer
            center={mapCenter}
            zoom={mapZoom}
            style={{ height: '100%', width: '100%' }}
            ref={mapRef}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {activeProperty &&
              isValidLatLng(activeProperty.lat, activeProperty.lng) &&
              <FlyToProperty 
                key={`flyto-${activeProperty.id}-${clickTimestamp}`}
                latitude={activeProperty.lat} 
                longitude={activeProperty.lng} 
                zoom={MAP_CONSTANTS.PROPERTY_ZOOM} 
                propertyId={activeProperty.id}
              />
            }
            {filteredProperties.map((property) => (
              <Marker key={property.id} position={[property.lat, property.lng]} eventHandlers={{ click: () => handleMarkerClick(property) }}>
                <Popup>
                  <div className="font-semibold text-primary">{property.title}</div>
                  <div className="text-sm text-muted-foreground">{property.location}</div>
                  <div className="text-sm font-bold">{property.price}</div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        {/* Desktop: sidebars as overlays */}
        <div className="hidden md:flex h-full w-full relative z-10 pointer-events-none">
          {/* Left Sidebar */}
          <aside className="bg-white shadow-lg h-full w-80 max-w-full z-20 flex-shrink-0 pointer-events-auto" style={{ overflowY: 'auto' }}>
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-bold text-primary">Properties</h2>
            </div>
            {/* Filters */}
            <div className="p-4 border-b space-y-2">
              <div>
                <label className="block text-xs font-semibold mb-1">Status</label>
                <select
                  className="w-full border rounded px-2 py-1"
                  value={filterStatus}
                  onChange={e => setFilterStatus(e.target.value as any)}
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
                  onChange={e => setFilterBeds(e.target.value as any)}
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
                <li key={property.id} className="p-4 hover:bg-blue-50 cursor-pointer" onClick={() => handleSidebarPropertyClick(property)}>
                  <div className="font-semibold text-primary">{property.title}</div>
                  <div className="text-sm text-muted-foreground">{property.location}</div>
                  <div className="text-sm font-bold">{property.price}</div>
                </li>
              ))}
            </ul>
          </aside>
          {/* Details Sidebar (right) */}
          {detailsOpen && activeProperty && (
            <aside className="bg-white shadow-lg h-full w-96 max-w-full z-20 flex-shrink-0 pointer-events-auto" style={{ overflowY: 'auto' }}>
              <div className="flex items-center justify-between p-4 border-b">
                <h2 className="text-lg font-bold text-primary">Property Details</h2>
                <button className="text-gray-500 hover:text-primary" onClick={closeDetails}>✕</button>
              </div>
              <div className="p-4">
                <img src={activeProperty.image} alt={activeProperty.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                <div className="flex gap-2 mb-3">
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${activeProperty.status === 'For Sale' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>{activeProperty.status}</span>
                  {activeProperty.featured && (<span className="px-2 py-1 rounded text-xs font-semibold bg-red-100 text-red-800">Featured</span>)}
                </div>
                <h3 className="font-semibold text-lg mb-2">{activeProperty.title}</h3>
                <p className="text-2xl font-bold text-primary mb-2">{activeProperty.price}</p>
                <p className="text-muted-foreground text-sm mb-4">{activeProperty.location}</p>
                <div className="grid grid-cols-3 gap-2 text-sm text-muted-foreground mb-4">
                  <div className="text-center"><div className="font-semibold">{activeProperty.beds}</div><div>Beds</div></div>
                  <div className="text-center"><div className="font-semibold">{activeProperty.baths}</div><div>Baths</div></div>
                  <div className="text-center"><div className="font-semibold">{activeProperty.sqft}</div><div>Sqft</div></div>
                </div>
              </div>
            </aside>
          )}
          {/* Spacer to push sidebars to the left */}
          <div className="flex-1"></div>
        </div>

        {/* Mobile: overlays and floating button */}
        <div className="md:hidden">
          {/* Floating button to open property list - always above map */}
          {!sidebarOpen && !detailsOpen && (
            <button
              style={{ position: 'fixed', bottom: 24, left: 24, zIndex: 9999 }}
              className="bg-primary text-white rounded-full p-4 shadow-lg"
              onClick={openSidebar}
            >
              Properties
            </button>
          )}
        </div>
        {/* Property list overlay (bottom sheet) - Mobile only */}
        {sidebarOpen && (
          <div className="md:hidden fixed inset-0 z-40 bg-black/40 flex items-end">
            <div className={`w-full bg-white rounded-t-2xl shadow-lg max-h-[70vh] overflow-y-auto transform transition-all duration-300
              ${sidebarOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
            >
              <div className="flex items-center justify-between p-4 border-b">
                <h2 className="text-lg font-bold text-primary">Properties</h2>
                <button className="text-gray-500 hover:text-primary" onClick={closeSidebar}>✕</button>
              </div>
              {/* Filters */}
              <div className="p-4 border-b space-y-2">
                <div>
                  <label className="block text-xs font-semibold mb-1">Status</label>
                  <select
                    className="w-full border rounded px-2 py-1"
                    value={filterStatus}
                    onChange={e => setFilterStatus(e.target.value as any)}
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
                    onChange={e => setFilterBeds(e.target.value as any)}
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
                  <li key={property.id} className="p-4 hover:bg-blue-50 cursor-pointer" onClick={() => handleSidebarPropertyClick(property)}>
                    <div className="font-semibold text-primary">{property.title}</div>
                    <div className="text-sm text-muted-foreground">{property.location}</div>
                    <div className="text-sm font-bold">{property.price}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        {/* Property details overlay (bottom sheet) - Mobile only */}
        {detailsOpen && activeProperty && (
          <div className="md:hidden fixed inset-0 z-40 bg-black/40 flex items-end">
            <div className={`w-full bg-white rounded-t-2xl shadow-lg max-h-[70vh] overflow-y-auto transform transition-all duration-300
              ${detailsOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
            >
              <div className="flex items-center justify-between p-4 border-b">
                <h2 className="text-lg font-bold text-primary">Property Details</h2>
                <button className="text-gray-500 hover:text-primary" onClick={closeDetails}>✕</button>
              </div>
              <div className="p-4">
                <img src={activeProperty.image} alt={activeProperty.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                <div className="flex gap-2 mb-3">
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${activeProperty.status === 'For Sale' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>{activeProperty.status}</span>
                  {activeProperty.featured && (<span className="px-2 py-1 rounded text-xs font-semibold bg-red-100 text-red-800">Featured</span>)}
                </div>
                <h3 className="font-semibold text-lg mb-2">{activeProperty.title}</h3>
                <p className="text-2xl font-bold text-primary mb-2">{activeProperty.price}</p>
                <p className="text-muted-foreground text-sm mb-4">{activeProperty.location}</p>
                <div className="grid grid-cols-3 gap-2 text-sm text-muted-foreground mb-4">
                  <div className="text-center"><div className="font-semibold">{activeProperty.beds}</div><div>Beds</div></div>
                  <div className="text-center"><div className="font-semibold">{activeProperty.baths}</div><div>Baths</div></div>
                  <div className="text-center"><div className="font-semibold">{activeProperty.sqft}</div><div>Sqft</div></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FullScreenMap; 