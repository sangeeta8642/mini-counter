import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CounterComponent } from './components/counter/counter.component';
import { CounterActionsComponent } from './components/counter/counter-actions/counter-actions.component';
import { counterReducer } from './ngrx-store/counter/counter.reducer';
import { CounterOutputComponent } from './components/counter/counter-output/counter-output.component';
// import { HttpModudle} from '@angular/h'
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects'
import { appReducer, AppState } from './app.state';
import { PostsEffect } from './ngrx-store/posts/posts.effest';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterOutputComponent,
    CounterActionsComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({ logOnly: !isDevMode() }),
    EffectsModule.forRoot([PostsEffect])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
