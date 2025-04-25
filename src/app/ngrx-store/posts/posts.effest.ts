import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { fetchPosts, fetchPostsSuccess, LOAD_BLOGS } from "./posts.action";
import { catchError, EMPTY, exhaustMap, map } from "rxjs";
import { blogModel, MasterServices } from "src/app/services/master.service";
// import { Actions } from "@ngrx/store-devtools/src/reducer";

@Injectable()

export class PostsEffect {
    constructor(private actions$: Actions, private masterServices: MasterServices) { }

    fetchPosts$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(LOAD_BLOGS),
            exhaustMap((action: blogModel) => {
                return this.masterServices.getAllPosts().pipe(
                    map((data) => {
                        return fetchPostsSuccess({ posts: data })
                    }),
                    catchError(() => EMPTY)
                )
            }),
        )
    })

}