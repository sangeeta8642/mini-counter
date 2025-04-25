import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.state';
import { fetchPosts } from './ngrx-store/posts/posts.action';
import { getPosts } from './ngrx-store/posts/posts.selector';
import { blogModel } from './services/master.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ngrx-practice';
  posts: blogModel[] = []

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(fetchPosts())
    this.store.select(getPosts).subscribe((posts) => {
      this.posts = posts
      console.log("posts", this.posts);

    })
  }


}
