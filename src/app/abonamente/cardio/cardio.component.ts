import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  email: string;
  validity: Date;
}

const ELEMENT_DATA: PeriodicElement[] = [
  // {position: 1, name: 'Alex', email: 'alex@mail.com', validity: '03/03/2019'},
  // {position: 2, name: 'Marius', email: 'marius@mail.com', symbol: 'He'},
  // {position: 3, name: 'Ioana', email: 'ioana@mail.com', symbol: 'Li'},
];

@Component({
  selector: 'app-cardio',
  templateUrl: './cardio.component.html',
  styleUrls: ['./cardio.component.css']
})
export class CardioComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private router : Router) { }

  ngOnInit() {
  }

  logOut() : void{
    this.router.navigate(['login']);
  }

  back() : void{
    this.router.navigate(['abonamente']);
  }
}
