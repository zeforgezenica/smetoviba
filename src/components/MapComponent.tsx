import { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import type { LatLngTuple } from "leaflet";

export default function MapComponent() {
  useEffect(() => {
    async function loadLeaflet() {
      if (typeof window !== "undefined") {
        const L = await import("leaflet");

        // Initialize the map
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

        // Define bounds
        const bounds: LatLngTuple[] = [
          [44.176211, 17.797032],
          [44.426157, 18.308932],
        ];

        // Fit map to bounds
        map.fitBounds(bounds);
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
        marginTop: "1em",
      }}
    />
  );
}
