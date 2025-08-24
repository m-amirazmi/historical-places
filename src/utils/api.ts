import { Place } from "./types";

const BASE_API_URL = "https://historical-places-api.onrender.com/api";

const API_URL = {
  GET_PLACES: () => BASE_API_URL + "/places",
  GET_PLACE_DETAIL: (id: string) => BASE_API_URL + `/places/${id}`,
  CREATE_PLACE: () => BASE_API_URL + "/places/",
  UPDATE_PLACE: (id: string) => BASE_API_URL + `/places/${id}`,
  DELETE_PLACE: (id: string) => BASE_API_URL + `/places/${id}`,
};

export interface FetchPlacesResponse {
  success: boolean;
  data: Place[];
}

export interface FetchPlaceDetailResponse {
  success: boolean;
  data: Place;
}

export const fetchPlacesApi = async (): Promise<FetchPlacesResponse> => {
  const res = await fetch(API_URL.GET_PLACES());
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  const data: FetchPlacesResponse = await res.json();
  return data;
};

export const fetchPlaceDetailApi = async (
  id: string
): Promise<FetchPlaceDetailResponse> => {
  const res = await fetch(API_URL.GET_PLACE_DETAIL(id));
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  const data: FetchPlaceDetailResponse = await res.json();
  return data;
};
