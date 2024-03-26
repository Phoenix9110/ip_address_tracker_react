import React from "react";
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import { ipStore } from "@/store/IPstore"
import L  from "leaflet";

var Icon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-black.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});


const Maps: React.FC = () => {
  const ipInformation = ipStore((state:any) => state.ipInformation)
  const coordinates = ipInformation.filter((property:any)=> property?.item === "coordinates")
  const center = coordinates[0]?.content || [ 4.541, -74.05506 ]

  return (

      <MapContainer center={center} zoom={6} scrollWheelZoom={false} style={{ height: '100vh', width: '100wh' }} key={center.toString()}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        <Marker position={center}  icon={Icon}>
        </Marker>
      </MapContainer>
  );
};



export default Maps;