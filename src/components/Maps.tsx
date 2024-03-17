import React from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import { ipStore } from "@/store/IPstore"


const Maps: React.FC<UserProps> = () => {
  const ipInformation = ipStore((state:any) => state.ipInformation)
  const coordinates = ipInformation.filter((property)=> property.item === "coordinates")
  const center = coordinates[0]?.content 


  console.log(coordinates)
  return (

      <MapContainer center={center} zoom={5} scrollWheelZoom={false} style={{ height: '100vh', width: '100wh' }} key={center.toString()}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        <Marker position={center}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
  );
};



export default Maps;