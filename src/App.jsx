import { useState } from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
export default function App() {

  const [position, setPosition] = useState([-42.5667,-65.766]);

  function handleClick(e) {
    setPosition([e.latlng.lat, e.latlng.lng]);
    console.log(e.latlng);
  }

  function handleDragEnd(e) {
    setPosition(e.target.getLatLng());
    console.log(position)
  }

  console.log(position)

  return (
    <MapContainer onClick={handleClick}
    style={{ height: '400px',width:'400px' }}
    center={position}
    zoom={13}>
       <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

      {position && (
        <Marker 
          position={position}
          draggable={true}
          onDragEnd={handleDragEnd} 
        />
      )}
    </MapContainer>
  );

}


