import { blogModel } from "src/app/services/master.service"

export interface postState {
    posts: blogModel[]
}

export const initialPostState:postState = {
    posts: []
}