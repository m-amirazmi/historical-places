import { combineReducers } from "redux";
import { Place } from "../utils/types";
import { PlacesAction } from "./actions";
import {
  FETCH_PLACE_DETAIL,
  FETCH_PLACE_DETAIL_FAILURE,
  FETCH_PLACE_DETAIL_SUCCESS,
  FETCH_PLACES,
  FETCH_PLACES_FAILURE,
  FETCH_PLACES_SUCCESS,
} from "./actionTypes";

interface PlacesState {
  list: Place[];
  selectedPlace?: Place;
  loading: boolean;
  error?: string;
}

const initialState: PlacesState = {
  list: [],
  loading: false,
};

const placesReducer = (
  state = initialState,
  action: PlacesAction
): PlacesState => {
  switch (action.type) {
    case FETCH_PLACES:
    case FETCH_PLACE_DETAIL:
      return { ...state, loading: true };

    case FETCH_PLACES_SUCCESS:
      return { ...state, list: action.payload, loading: false };

    case FETCH_PLACE_DETAIL_SUCCESS:
      return { ...state, selectedPlace: action.payload, loading: false };

    case FETCH_PLACES_FAILURE:
    case FETCH_PLACE_DETAIL_FAILURE:
      return { ...state, error: action.payload, loading: false };

    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  places: placesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
