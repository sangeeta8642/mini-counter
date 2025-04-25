import { createFeatureSelector, createSelector } from "@ngrx/store"
import { postState } from "./posts.state"


const getPostState = createFeatureSelector<postState>('posts')

export const getPosts = createSelector(getPostState, (state) => state.posts)