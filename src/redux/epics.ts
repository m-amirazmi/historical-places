import { Epic, ofType } from "redux-observable";
import { catchError, from, map, mergeMap, of, switchMap } from "rxjs";
import {
  fetchAddressByIdApi,
  fetchPlaceDetailApi,
  fetchPlacesApi,
  fetchVisitedPlacesApi,
  updatePlaceVisitedApi,
} from "../utils/api";
import {
  fetchAddressByIdError,
  fetchAddressByIdSuccess,
  fetchPlaceDetailError,
  fetchPlaceDetailSuccess,
  fetchPlacesSuccess,
  fetchVisitedPlacesError,
  fetchVisitedPlacesSuccess,
  PlacesAction,
  updatePlaceVisitedError,
  updatePlaceVisitedSuccess,
} from "./actions";
import {
  FETCH_ADDRESS_BY_ID,
  FETCH_PLACE_DETAIL,
  FETCH_PLACES,
  FETCH_VISITED_PLACES,
  UPDATE_PLACE_VISITED,
  UPDATE_PLACE_VISITED_SUCCESS,
} from "./actionTypes";
import { RootState } from "./reducers";

export const fetchPlacesEpic: Epic<PlacesAction, PlacesAction, RootState> = (
  action$
) => {
  return action$.pipe(
    ofType(FETCH_PLACES),
    switchMap(() => {
      return from(fetchPlacesApi()).pipe(
        map(
          (response) => fetchPlacesSuccess(response),
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
          (response) =>
            response
              ? fetchPlaceDetailSuccess(response)
              : fetchPlaceDetailError("Place not found"),
          catchError((err) => of(fetchPlaceDetailError(err.message)))
        )
      );
    })
  );
};

export const updatePlaceDetailEpic: Epic<
  PlacesAction,
  PlacesAction,
  RootState
> = (action$) => {
  return action$.pipe(
    ofType(UPDATE_PLACE_VISITED),
    switchMap((action) => {
      return from(updatePlaceVisitedApi(action.payload)).pipe(
        map(
          (response) =>
            response
              ? updatePlaceVisitedSuccess(response)
              : updatePlaceVisitedError("Something went wrong"),
          catchError((err) => of(updatePlaceVisitedError(err.message)))
        )
      );
    })
  );
};

export const fetchVisitedPlacesEpic: Epic<
  PlacesAction,
  PlacesAction,
  RootState
> = (action$) => {
  return action$.pipe(
    ofType(FETCH_VISITED_PLACES),
    switchMap(() => {
      return from(fetchVisitedPlacesApi()).pipe(
        map(
          (response) =>
            response
              ? fetchVisitedPlacesSuccess(response)
              : fetchVisitedPlacesError("Something went wrong"),
          catchError((err) => of(fetchVisitedPlacesError(err.message)))
        )
      );
    })
  );
};

export const refetchPlacesAfterVisitedUpdateEpic: Epic<
  PlacesAction,
  PlacesAction,
  RootState
> = (action$) => {
  return action$.pipe(
    ofType(UPDATE_PLACE_VISITED_SUCCESS),
    mergeMap(() => [{ type: FETCH_PLACES }, { type: FETCH_VISITED_PLACES }])
  );
};

export const fetchAddressByIdEpic: Epic<
  PlacesAction,
  PlacesAction,
  RootState
> = (action$) => {
  return action$.pipe(
    ofType(FETCH_ADDRESS_BY_ID),
    mergeMap((action) => {
      return from(fetchAddressByIdApi(action.payload)).pipe(
        map(
          (response) =>
            response
              ? fetchAddressByIdSuccess(response)
              : fetchAddressByIdError("Something went wrong"),
          catchError((err) => of(fetchAddressByIdError(err.message)))
        )
      );
    })
  );
};
