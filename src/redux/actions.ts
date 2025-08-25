import { Place } from "../utils/types";
import {
  FETCH_PLACE_DETAIL,
  FETCH_PLACE_DETAIL_FAILURE,
  FETCH_PLACE_DETAIL_SUCCESS,
  FETCH_PLACES,
  FETCH_PLACES_FAILURE,
  FETCH_PLACES_SUCCESS,
  FETCH_VISITED_PLACES,
  FETCH_VISITED_PLACES_FAILURE,
  FETCH_VISITED_PLACES_SUCCESS,
  UPDATE_PLACE_VISITED,
  UPDATE_PLACE_VISITED_FAILURE,
  UPDATE_PLACE_VISITED_SUCCESS,
} from "./actionTypes";

export const fetchPlaces = () => ({ type: FETCH_PLACES });
export const fetchPlacesSuccess = (places: Place[]) => ({
  type: FETCH_PLACES_SUCCESS,
  payload: places,
});
export const fetchPlacesError = (error: string) => ({
  type: FETCH_PLACES_FAILURE,
  payload: error,
});

export const fetchPlaceDetail = (id: string) => ({
  type: FETCH_PLACE_DETAIL,
  payload: id,
});
export const fetchPlaceDetailSuccess = (place: Place) => ({
  type: FETCH_PLACE_DETAIL_SUCCESS,
  payload: place,
});
export const fetchPlaceDetailError = (error: string) => ({
  type: FETCH_PLACE_DETAIL_FAILURE,
  payload: error,
});

export const updatePlaceVisited = (id: string, isVisited: boolean) => ({
  type: UPDATE_PLACE_VISITED,
  payload: { id, isVisited },
});
export const updatePlaceVisitedSuccess = (place: Place) => ({
  type: UPDATE_PLACE_VISITED_SUCCESS,
  payload: place,
});
export const updatePlaceVisitedError = (error: string) => ({
  type: UPDATE_PLACE_VISITED_FAILURE,
  payload: error,
});

export const fetchVisitedPlaces = () => ({ type: FETCH_VISITED_PLACES });
export const fetchVisitedPlacesSuccess = (places: Place[]) => ({
  type: FETCH_VISITED_PLACES_SUCCESS,
  payload: places,
});
export const fetchVisitedPlacesError = (error: string) => ({
  type: FETCH_VISITED_PLACES_FAILURE,
  payload: error,
});

export type PlacesAction =
  | ReturnType<typeof fetchPlaces>
  | ReturnType<typeof fetchPlacesSuccess>
  | ReturnType<typeof fetchPlacesError>
  | ReturnType<typeof fetchPlaceDetail>
  | ReturnType<typeof fetchPlaceDetailSuccess>
  | ReturnType<typeof fetchPlaceDetailError>
  | ReturnType<typeof updatePlaceVisited>
  | ReturnType<typeof updatePlaceVisitedSuccess>
  | ReturnType<typeof updatePlaceVisitedError>
  | ReturnType<typeof fetchVisitedPlaces>
  | ReturnType<typeof fetchVisitedPlacesSuccess>
  | ReturnType<typeof fetchVisitedPlacesError>;
