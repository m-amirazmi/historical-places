const BASE_API_URL = "https://historical-places-api.onrender.com/api";

const API_URL = {
  GET_PLACES: () => BASE_API_URL + "/places",
  GET_PLACE_DETAIL: (id: string) => BASE_API_URL + `/places/${id}`,
  CREATE_PLACE: () => BASE_API_URL + "/places/",
  UPDATE_PLACE: (id: string) => BASE_API_URL + `/places/${id}`,
  DELETE_PLACE: (id: string) => BASE_API_URL + `/places/${id}`,
};

export const fetchPlacesApi = async () => {
  const res = await fetch(API_URL.GET_PLACES());
  return res.json();
};

export const fetchPlaceDetailApi = async (id: string) => {
  const res = await fetch(API_URL.GET_PLACE_DETAIL(id));
  return res.json();
};
