import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }
  @Input() item: string; 
  @Output() newItemEvent = new EventEmitter<string>();
  ngOnInit(): void {
  }
  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
}
