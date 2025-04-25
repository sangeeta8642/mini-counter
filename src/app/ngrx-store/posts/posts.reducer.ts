import { createReducer, on } from "@ngrx/store";
import { initialPostState, postState } from "./posts.state";
import { fetchPosts, fetchPostsSuccess } from "./posts.action";

export const _postReducer = createReducer(
    initialPostState,
     on(fetchPosts, (state) => {
        return {
            ...state
        }
    }), on(fetchPostsSuccess, (state, action) => {
        return {
            ...state,
            posts: action.posts
        }
    })
)

export function PostReducer(state: postState = initialPostState, action: any) {
    return _postReducer(state, action)
}