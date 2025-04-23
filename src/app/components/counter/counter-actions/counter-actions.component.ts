import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { decrement, increment, reset } from 'src/app/ngrx-store/counter/counter.actions';
import { counterState } from 'src/app/ngrx-store/counter/counter.state';

@Component({
  selector: 'app-counter-actions',
  templateUrl: './counter-actions.component.html',
  styleUrls: ['./counter-actions.component.css']
})
export class CounterActionsComponent {

  constructor(private store: Store<AppState>) { }

  incrementCount() {
    this.store.dispatch(increment())
  }
  decrementCount() {
    this.store.dispatch(decrement())
  }
  resetCount() {
    this.store.dispatch(reset())
  }


}
