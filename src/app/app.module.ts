import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CounterComponent } from './components/counter/counter.component';
import { CounterActionsComponent } from './components/counter/counter-actions/counter-actions.component';
import { counterReducer } from './ngrx-store/counter/counter.reducer';
import { CounterOutputComponent } from './components/counter/counter-output/counter-output.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterOutputComponent,
    CounterActionsComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ counter: counterReducer }, {}),
    StoreDevtoolsModule.instrument({ logOnly: !isDevMode() })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
