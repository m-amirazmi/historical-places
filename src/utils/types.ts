export interface Address {
  id: string;
  address_one: string;
  address_two?: string;
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
  address_id?: string;
  coordinate_id?: string;
  image_url?: string;
  category?: string;
  rating?: number;
  is_visited: boolean;
  created_at: string;
  updated_at: string;
}
