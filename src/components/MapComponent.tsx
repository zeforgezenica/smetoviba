import { useEffect } from "react";
import "leaflet/dist/leaflet.css";

export default function MapComponent() {
  useEffect(() => {
    async function loadLeaflet() {
      if (typeof window !== "undefined") {
        const L = await import("leaflet");

        // Initialize the map44.24541
        const map = L.map("map").setView([44.24541, 17.96368], 11);
        // Add tile layer
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: "© OpenStreetMap contributors",
        }).addTo(map);

        // Add a marker
        L.marker([44.24541, 17.96368])
          .addTo(map)
          .bindPopup("Izletište Smetovi")
          .openPopup();
      }
    }

    loadLeaflet();
  }, []);

  return (
    <div
      id="map"
      style={{
        height: "100vh",
        width: "100vw",
        marginTop: "1em"
      }}
    />
  );
}
