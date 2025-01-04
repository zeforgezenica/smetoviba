import type { LatLngTuple } from "leaflet";

export interface MapPin {
  type: string;
  title: string;
  location: LatLngTuple;
  path?: string;
  img: string;
}
