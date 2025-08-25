import { Address, Place } from "./types";

const BASE_API_URL = "https://dsrroahuziyleoxdzyps.supabase.co/rest/v1";
const SUPABASE_KEY = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRzcnJvYWh1eml5bGVveGR6eXBzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU5NjQyODEsImV4cCI6MjA3MTU0MDI4MX0.WLzdADgy9o6PDP6g8yMdFB3S9dbuxhLxgwjfmNoL8Uk`;

const API_URL = {
  GET_PLACES: () => BASE_API_URL + "/places?order=id.asc",
  GET_PLACE_DETAIL: (id: string) =>
    BASE_API_URL + `/places?id=eq.${id}&limit=1`,
  CREATE_PLACE: () => BASE_API_URL + "/places",
  UPDATE_PLACE: (id: string) => BASE_API_URL + `/places?id=eq.${id}`,
  DELETE_PLACE: (id: string) => BASE_API_URL + `/places?id=eq.${id}`,
  GET_VISITED_PLACES: () =>
    BASE_API_URL + "/places?is_visited=eq.true&order=id.asc",
  GET_ADDRESS_BY_ID: (id: string) =>
    BASE_API_URL + `/addresses?id=eq.${id}&limit=1`,
};

const HEADERS = {
  apikey: SUPABASE_KEY,
  Prefer: "return=representation",
  "Content-Type": "application/json",
};

export const fetchPlacesApi = async (): Promise<Place[]> => {
  const res = await fetch(API_URL.GET_PLACES(), { headers: HEADERS });
  if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
  const data: Place[] = await res.json();
  return data;
};

export const fetchPlaceDetailApi = async (id: string): Promise<Place> => {
  const res = await fetch(API_URL.GET_PLACE_DETAIL(id), { headers: HEADERS });
  if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
  const data: Place[] = await res.json();
  return data[0];
};

export const createPlaceApi = async (place: Place): Promise<Place> => {
  const res = await fetch(API_URL.CREATE_PLACE(), {
    method: "POST",
    headers: HEADERS,
    body: JSON.stringify(place),
  });
  if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
  const data: Place[] = await res.json();
  return data[0];
};

export const updatePlaceVisitedApi = async ({
  id,
  isVisited,
}: {
  id: string;
  isVisited: boolean;
}): Promise<Place> => {
  const res = await fetch(API_URL.UPDATE_PLACE(id), {
    method: "PATCH",
    body: JSON.stringify({ is_visited: isVisited }),
    headers: HEADERS,
  });
  if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
  const data: Place[] = await res.json();
  return data[0];
};

export const fetchVisitedPlacesApi = async (): Promise<Place[]> => {
  const res = await fetch(API_URL.GET_VISITED_PLACES(), { headers: HEADERS });
  if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
  const data: Place[] = await res.json();
  return data;
};

export const fetchAddressByIdApi = async (id: string): Promise<Address> => {
  const res = await fetch(API_URL.GET_ADDRESS_BY_ID(id), { headers: HEADERS });
  if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
  const data: Address[] = await res.json();
  return data[0];
};
