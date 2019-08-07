import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-copii',
  templateUrl: './copii.component.html',
  styleUrls: ['./copii.component.css']
})
export class CopiiComponent implements OnInit {

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
