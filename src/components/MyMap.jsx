import { useRef, useState } from 'react'
import {Marker, Popup} from 'react-leaflet'
import { useMapEvents } from 'react-leaflet'
//fuciones de mapa useMap
export const MyMap = ({setPosition}) => {
   const markerRef=useRef(null);
   const [position, setPositionState]=useState([-34.605425,-58.381555])
   
   const mapEventsHandler=useMapEvents({
    click:(e)=> {
        const newPosition = e.latlng;
      setPosition([newPosition.lat, newPosition.lng]);
      setPositionState([newPosition.lat, newPosition.lng]);
      },
   })
    console.log(position)
   return(
    <Marker
    draggable
    eventHandlers={mapEventsHandler}
    position={position}
    ref={markerRef}
    >

    <Popup>
          
    </Popup>
    </Marker>
   )

}