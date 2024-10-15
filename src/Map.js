// Map.js
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '600px'
  };

  const center = {
    lat: 51.505, // Change to your desired latitude
    lng: -0.09   // Change to your desired longitude
  };

const Map = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyC44La52_a4nSh_0sf8qN3K_MWp1R1GQX8">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
      >
        {/* Add a marker */}
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;