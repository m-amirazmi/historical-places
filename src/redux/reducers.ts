import { combineReducers } from "redux";
import { Address, Place } from "../utils/types";
import { PlacesAction } from "./actions";
import {
  FETCH_ADDRESS_BY_ID,
  FETCH_ADDRESS_BY_ID_FAILURE,
  FETCH_ADDRESS_BY_ID_SUCCESS,
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

interface PlacesState {
  list: Place[];
  visitedList: Place[];
  selectedPlace?: Place;
  selectedAddress?: Address;
  loading: boolean;
  error?: string;
}

const initialState: PlacesState = {
  list: [],
  visitedList: [],
  loading: false,
};

const placesReducer = (
  state = initialState,
  action: PlacesAction
): PlacesState => {
  switch (action.type) {
    case FETCH_PLACES:
    case FETCH_PLACE_DETAIL:
    case UPDATE_PLACE_VISITED:
    case FETCH_VISITED_PLACES:
    case FETCH_ADDRESS_BY_ID:
      return { ...state, loading: true };

    case FETCH_PLACES_SUCCESS:
      return { ...state, list: action.payload, loading: false };

    case FETCH_PLACE_DETAIL_SUCCESS:
      return { ...state, selectedPlace: action.payload, loading: false };

    case FETCH_PLACES_FAILURE:
    case FETCH_PLACE_DETAIL_FAILURE:
    case UPDATE_PLACE_VISITED_FAILURE:
    case FETCH_VISITED_PLACES_FAILURE:
    case FETCH_ADDRESS_BY_ID_FAILURE:
      return { ...state, error: action.payload, loading: false };

    case UPDATE_PLACE_VISITED_SUCCESS:
      return { ...state, loading: false };

    case FETCH_VISITED_PLACES_SUCCESS:
      return { ...state, visitedList: action.payload, loading: false };

    case FETCH_ADDRESS_BY_ID_SUCCESS:
      return { ...state, selectedAddress: action.payload, loading: false };

    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  places: placesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
