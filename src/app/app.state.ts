import { counterReducer } from "./ngrx-store/counter/counter.reducer";
import { counterState } from "./ngrx-store/counter/counter.state";

export interface AppState {
    counter: counterState
}

export const initialAppState = {
    counter: counterReducer,
}