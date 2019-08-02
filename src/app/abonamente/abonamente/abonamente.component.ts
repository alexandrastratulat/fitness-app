import { Component, OnInit } from '@angular/core';
import { TabDirective } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-abonamente',
  templateUrl: './abonamente.component.html',
  styleUrls: ['./abonamente.component.css']
})
export class AbonamenteComponent implements OnInit {
  value: string;
  onSelect(data: TabDirective): void {
    this.value = data.heading;
  }
  constructor() { }

  ngOnInit() {
  }

    abonamente: string[] = ['copii', 'student', 'happy-hour', 'cardio', 'full(piscina + sauna)'];


}
