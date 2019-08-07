import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-happy-hour',
  templateUrl: './happy-hour.component.html',
  styleUrls: ['./happy-hour.component.css']
})
export class HappyHourComponent implements OnInit {

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
