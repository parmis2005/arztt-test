"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { practice } from "@/lib/data";

const markerIcon = L.divIcon({
  className: "",
  html: `
    <div style="
      width: 42px;
      height: 42px;
      display:flex;
      align-items:center;
      justify-content:center;
      transform: translate(-50%, -100%);
    ">
      <svg width="42" height="52" viewBox="0 0 42 52" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 0C9.4 0 0 9.4 0 21c0 15.75 21 31 21 31s21-15.25 21-31C42 9.4 32.6 0 21 0z" fill="#FF6B4A"/>
        <circle cx="21" cy="21" r="12" fill="white"/>
        <path d="M21 13v16M13 21h16" stroke="#0F6B62" stroke-width="3.5" stroke-linecap="round"/>
      </svg>
    </div>
  `,
  iconSize: [42, 52],
  iconAnchor: [21, 52],
});

export default function PracticeMap() {
  const { lat, lng } = practice.coordinates;

  return (
    <MapContainer
      center={[lat, lng]}
      zoom={15}
      scrollWheelZoom={false}
      className="h-full w-full rounded-3xl"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        maxZoom={19}
      />
      <Marker position={[lat, lng]} icon={markerIcon}>
        <Popup>
          <strong>{practice.fullName}</strong>
          <br />
          {practice.address.full}
        </Popup>
      </Marker>
    </MapContainer>
  );
}
