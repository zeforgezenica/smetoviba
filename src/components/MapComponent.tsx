import { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import type { MapPin } from "../models/map.pin.model";

interface MapComponentProps {
  pins: MapPin[];
}

const smetoviPin: MapPin = {
  type: "Izletište",
  title: "Izletište Smetovi",
  location: [44.24541, 17.96368],
  img: "/images/smetovi-spomenik.jpg",
};

export default function MapComponent({ pins }: MapComponentProps) {
  useEffect(() => {
    async function loadLeaflet() {
      if (typeof window !== "undefined") {
        const L = await import("leaflet");

        const map = L.map("map", {
          center: [44.24541, 17.96368],
          zoom: 11,
          minZoom: 10,
          maxBounds: [
            [43.907629, 17.272634],
            [44.552763, 18.600762],
          ],
          maxBoundsViscosity: 1.0,
        });

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: "© OpenStreetMap contributors",
        }).addTo(map);

        pins.forEach((pin) => {
          const popupContent = `
            <div
              class="flex flex-col items-center"
              style="width: 200px; padding-bottom: 5px;"
            >
              <img
                src="${pin.img}"
                alt="${pin.title}"
                class="w-full h-auto mb-2"
                style="max-width: 200px; max-height: 200px;"
              />
              <a
                href="${pin.path}"
                class="text-center w-full"
                style="word-wrap: break-word; padding-inline:5px;"
              > ${pin.title} </a>
            </div> `;

          L.marker(pin.location).addTo(map).bindPopup(popupContent).openPopup();
        });

        L.marker(smetoviPin.location)
          .addTo(map)
          .bindPopup(
            `
              <div
                class="flex flex-col items-center"
                style="width: 200px; padding-bottom: 5px;"
              >
                <img
                  src="${smetoviPin.img}"
                  alt="${smetoviPin.title}"
                  class="w-full h-auto mb-2"
                  style="max-width: 200px; max-height: 200px;"
                />
                <div
                  class="text-center w-full"
                  style="word-wrap: break-word; padding-inline:5px;"
                > ${smetoviPin.title} </div>
              </div>
  `
          )
          .openPopup();
      }
    }

    loadLeaflet();
  }, [pins]);

  return (
    <>
      <div
        id="map"
        style={{
          height: "100vh",
          width: "100vw",
        }}
      />
      <style>
        {`
          .leaflet-popup-content {
            margin: 0 !important;
            width: 200px !important;
          }
          .leaflet-popup-content-wrapper {
            overflow: hidden;
            padding: 0 !important;
            text-align: center !important;
          }
          .leaflet-top {
            margin-top: 54px !important;
          }
        `}
      </style>
    </>
  );
}
