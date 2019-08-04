import { Component, OnInit } from '@angular/core';
import { TabDirective } from 'ngx-bootstrap/tabs';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-abonamente',
  templateUrl: './abonamente.component.html',
  styleUrls: ['./abonamente.component.css']
})
export class AbonamenteComponent implements OnInit {
  // value: string;
  // onSelect(data: TabDirective): void {
  //   this.value = data.heading;
  // }
  tabs = ['Copii', 'Student', 'Happy-hour', 'Cardio', 'Full(piscina + sauna)'];
  selected = new FormControl(0);

  addTab(selectAfterAdding: boolean) {
    this.tabs.push('New');

    if (selectAfterAdding) {
      this.selected.setValue(this.tabs.length - 1);
    }
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }
  constructor() { }

  ngOnInit() {
  }

    // abonamente: string[] = ['copii', 'student', 'happy-hour', 'cardio', 'full(piscina + sauna)'];


}
