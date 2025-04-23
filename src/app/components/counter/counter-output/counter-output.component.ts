import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getCounter } from 'src/app/ngrx-store/counter/counter.selector';
import { counterState } from 'src/app/ngrx-store/counter/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit {
  counter: number = 0
  constructor(private store: Store<counterState>) { }

  ngOnInit(): void {
    this.store.select(getCounter).subscribe((count) => {
      this.counter = count
    })
  }
}
