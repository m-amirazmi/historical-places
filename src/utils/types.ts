export interface Address {
  addressLine1: string;
  addressLine2?: string;
  city: string;
  postcode: string;
  state: string;
  country: string;
}

export interface Location {
  type: string;
  coordinates: number[]; // [lng, lat]
}

export interface Place {
  _id: string;
  name: string;
  description: string;
  address: Address;
  location: Location;
  imageUrl?: string;
  category?: string;
  rating?: number;
  isVisited: boolean;
  createdAt: string;
  updatedAt: string;
}
