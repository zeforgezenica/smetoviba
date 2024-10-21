export interface WorkingHours {
  day: string;   // e.g., "Monday"
  open: string;  // e.g., "09:00"
  close: string; // e.g., "17:00"
}
export interface Location {
  latitude: number;
  longitude: number,
  id: number;
  name: string;
  description: string,
  address: string;
  type: string;
  image?: string;
  Category: {
    name: string,
    id: number
  }
}

export interface LocationWithHours extends Location {
  workingHours?: WorkingHours[]; // Array of days and their hours
}
