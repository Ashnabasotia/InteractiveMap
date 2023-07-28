import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './MapWithSquare.css'

const MapWithSquares = () => {
  const bubbleData = [
    { lat: 51.1657, lng: 10.4515, internetUsage: 74.9 },   // Germany
    { lat: 37.7749, lng: -122.4194, internetUsage: 89.2 },  // United States
    { lat: 35.6895, lng: 139.6917, internetUsage: 93.3 },  // Japan
    { lat: -33.8688, lng: 151.2093, internetUsage: 88.2 }, // Australia
    { lat: 55.7558, lng: 37.6173, internetUsage: 75.8 },   // Russia
    { lat: -22.9068, lng: -43.1729, internetUsage: 66.0 }, // Brazil
  ];

  const getMarkerColor = (usage) => {
    const red = Math.floor(255 - (usage / 100) * 255);
    const green = Math.floor((usage / 100) * 255);
    return `rgb(${red}, ${green}, 0)`;
  };

  const getMarkerSize = (usage) => {
    return 20*(usage/100);
  }
  
  const customIcon = (internetUsage) => {
    return L.divIcon({
      html: `<div class="custom-marker" style="background-color: ${getMarkerColor(internetUsage)};"></div>`,
      className: 'custom-icon',
      iconSize: [20,20],
      iconAnchor: [10, 10],
    });
  };

  return (
    <MapContainer center={[20, 0]} zoom={2} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {bubbleData.map((bubble, index) => (
        <Marker
          key={index}
          position={[bubble.lat, bubble.lng]}
          icon={customIcon(bubble.internetUsage)} // Use the custom icon with colored background
        >
          <Popup>
            <strong>Internet Usage:</strong> {bubble.internetUsage}%
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapWithSquares;