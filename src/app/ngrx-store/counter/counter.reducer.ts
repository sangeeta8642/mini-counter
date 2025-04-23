import { createReducer, on } from "@ngrx/store";
import { counterState, initialCounterState } from "./counter.state";
import { decrement, increment, reset } from "./counter.actions";

// const _counterReducer = createReducer(initialCounterState,
//     on(increment, (state) => {
//         return {
//             ...state,
//             counter: state.counter++
//         }
//     }), on(decrement, (state) => {
//         return {
//             ...state,
//             counter: state.counter--
//         }
//     }), on(reset, (state) => {
//         return {
//             ...state,
//             counter: state.counter = 0
//         }
//     })
// )

const _counterReducer = createReducer(
    initialCounterState,
    on(increment, (state) => ({
        ...state,
        counter: state.counter + 1
    })),
    on(decrement, (state) => ({
        ...state,
        counter: state.counter - 1
    })),
    on(reset, (state) => ({
        ...state,
        counter: 0
    }))
);


export function counterReducer(state: counterState = initialCounterState, action: any) {
    return _counterReducer(state, action)
}