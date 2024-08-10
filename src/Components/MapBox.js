import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import L from 'leaflet';

const MapBox = () => {
  const center = [24.7136, 46.6753];

  const restrictedArea = {
    type: 'Feature',
    properties: {},
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [46.67, 24.715],
          [46.68, 24.715],
          [46.68, 24.71],
          [46.67, 24.71],
          [46.67, 24.715],
        ],
      ],
    },
  };

  const restrictedAreaStyle = {
    fillColor: 'red',
    fillOpacity: 0.5,
    color: 'red',
    weight: 2,
  };

  const customMarkerIcon = L.divIcon({
    className: 'custom-marker',
    html: `
      <svg width="40" height="40" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="18" fill="white" stroke="red" stroke-width="2"/>
        <text x="20" y="25" font-size="20" text-anchor="middle" fill="red">×</text>
      </svg>
    `,
    iconSize: [40, 40],
    iconAnchor: [20, 20],
  });

  return (
    <div className="w-1/2 h-full">
      <MapContainer
        className="h-full w-full"
        center={center}
        zoom={15}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GeoJSON data={restrictedArea} style={restrictedAreaStyle} />
        <Marker position={center} icon={customMarkerIcon}>
          <Popup
            closeButton={false}
            closeOnClick={false}
            autoClose={false}
            className="custom-popup"
          >
            <div className="text-center">
              <div className="font-bold">Restricted Area</div>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapBox;
