import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.css']
})
export class FullComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logOut() : void{
    this.router.navigate(['login']);
  }

  back() : void{
    this.router.navigate(['abonamente']);
  }
}
