import { FC, useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { TAddContactSchema } from "../../schema/addContactSchema";

// Custom marker icon 
const icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const MapView: FC = () => {
  const [contacts, setContacts] = useState<TAddContactSchema[]>([]);

  useEffect(() => {
    // Fetch contacts from localStorage
    const storedContacts = localStorage.getItem("contacts");
    if (storedContacts) {
      const parsedContacts: TAddContactSchema[] = JSON.parse(storedContacts);
      setContacts(parsedContacts);
    }
  }, []);

  return (
    <div className="w-full h-full">
      <MapContainer
        center={[9.082, 8.6753]}
        zoom={5}
        scrollWheelZoom={false}
        style={{ height: "50vh", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {contacts.map((contact, index) => (
          <Marker
            key={index}
            position={[contact.latitude, contact.longitude]}
            icon={icon}
          >
            <Popup>
              <div>
                <h3>{contact.name}</h3>
                <p>{contact.phoneNumber}</p>
                <p>{contact.email}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapView;
