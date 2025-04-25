import { counterReducer } from "./ngrx-store/counter/counter.reducer";
import { counterState } from "./ngrx-store/counter/counter.state";
import { PostReducer } from "./ngrx-store/posts/posts.reducer";
import { postState } from "./ngrx-store/posts/posts.state";

export interface AppState {
    counter: counterState
    posts: postState
}

export const appReducer = {
    counter: counterReducer,
    posts: PostReducer
}