import { Epic, ofType } from "redux-observable";
import { catchError, from, map, of, switchMap } from "rxjs";
import { fetchPlaceDetailApi, fetchPlacesApi } from "../utils/api";
import {
  fetchPlaceDetailError,
  fetchPlaceDetailSuccess,
  fetchPlacesSuccess,
  PlacesAction,
} from "./actions";
import { FETCH_PLACE_DETAIL, FETCH_PLACES } from "./actionTypes";
import { RootState } from "./reducers";

export const fetchPlacesEpic: Epic<PlacesAction, PlacesAction, RootState> = (
  action$
) => {
  return action$.pipe(
    ofType(FETCH_PLACES),
    switchMap(() => {
      return from(fetchPlacesApi()).pipe(
        map(
          (response) => fetchPlacesSuccess(response.data),
          catchError((err) => of(fetchPlaceDetailError(err.message)))
        )
      );
    })
  );
};

export const fetchPlaceDetailEpic: Epic<
  PlacesAction,
  PlacesAction,
  RootState
> = (action$) => {
  return action$.pipe(
    ofType(FETCH_PLACE_DETAIL),
    switchMap((action) => {
      return from(fetchPlaceDetailApi(action.payload)).pipe(
        map(
          (response) => fetchPlaceDetailSuccess(response.data),
          catchError((err) => of(fetchPlaceDetailError(err.message)))
        )
      );
    })
  );
};
