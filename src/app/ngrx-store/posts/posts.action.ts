import { createAction, props } from "@ngrx/store";
import { blogModel } from "src/app/services/master.service";

export const LOAD_BLOGS = '[posts component] fetch posts'

export const fetchPosts = createAction(LOAD_BLOGS)
export const fetchPostsSuccess = createAction('[posts component] fetch posts success', props<{ posts: blogModel[] }>())