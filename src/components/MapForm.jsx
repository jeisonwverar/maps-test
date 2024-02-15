import {MapContainer,TileLayer,useMapEvents,Marker,Popup} from 'react-leaflet';
import { useState } from 'react';
import 'leaflet/dist/leaflet.css'




 const MapForm = () => {
    const [coordinates, setCoordinates] = useState([-34.61315, -58.37723]);

  // Manejador de eventos para capturar las coordenadas al hacer clic en el mapa
  
  useMapEvents({
    click: (e) => {
      setCoordinates(e.latlng); // Almacena las coordenadas del clic
    },
  });
    
   
    
  

  // Componente de manejo de eventos para el mapa
  

  // Función para enviar las coordenadas al backend
  const enviarCoordenadasBackend = () => {
    // Aquí enviarías las coordenadas al backend utilizando una solicitud HTTP, por ejemplo:
    // fetch('/api/coordenadas', {
    //   method: 'POST',
    //   body: JSON.stringify({ coordinates }),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    // })
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.error('Error:', error));
    
    console.log('Coordenadas enviadas:', coordinates);
  };
  return (
   
    <MapContainer 
     style={{ height: '400px' }}
     center={coordinates}
    zoom={13}
    scrollWheelZoom={false}
     >
        <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
          {
            coordinates && <Marker position={coordinates}>
               <Popup>Cordenas:{coordinates.toString()}</Popup> 
            </Marker>
          }

         </MapContainer>
    
    
   
  )
}


export default MapForm;

//revision del wrapper para que funcione los eventos crear otro componente
//url https://react-leaflet.js.org/docs/api-components/