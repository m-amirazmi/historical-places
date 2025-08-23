import { Place } from "../utils/types";
import {
  FETCH_PLACE_DETAIL,
  FETCH_PLACE_DETAIL_FAILURE,
  FETCH_PLACE_DETAIL_SUCCESS,
  FETCH_PLACES,
  FETCH_PLACES_FAILURE,
  FETCH_PLACES_SUCCESS,
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

export type PlacesAction =
  | ReturnType<typeof fetchPlaces>
  | ReturnType<typeof fetchPlacesSuccess>
  | ReturnType<typeof fetchPlacesError>
  | ReturnType<typeof fetchPlaceDetail>
  | ReturnType<typeof fetchPlaceDetailSuccess>
  | ReturnType<typeof fetchPlaceDetailError>;
