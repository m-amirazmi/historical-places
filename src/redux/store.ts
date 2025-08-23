import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { PlacesAction } from "./actions";
import { fetchPlaceDetailEpic, fetchPlacesEpic } from "./epics";
import { rootReducer, RootState } from "./reducers";

const epicMiddleware = createEpicMiddleware<
  PlacesAction,
  PlacesAction,
  RootState
>();

const rootEpic = combineEpics(fetchPlacesEpic, fetchPlaceDetailEpic);

// @ts-expect-error createStore is still valid for this project
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(epicMiddleware))
);

epicMiddleware.run(rootEpic);
