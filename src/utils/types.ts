export interface Address {
  id: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  postcode: string;
  state: string;
  country: string;
}

export interface Coordinate {
  id: string;
  latitude: number;
  longitude: number;
}

export interface Place {
  id: string;
  name: string;
  description: string;
  address: Address;
  coordinate: Coordinate;
  image_url?: string;
  category?: string;
  rating?: number;
  is_visited: boolean;
  created_at: string;
  updated_at: string;
}
