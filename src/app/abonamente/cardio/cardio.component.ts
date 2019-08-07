import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-cardio',
  templateUrl: './cardio.component.html',
  styleUrls: ['./cardio.component.css']
})
export class CardioComponent implements OnInit {

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
