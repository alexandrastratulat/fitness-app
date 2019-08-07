import { Component, OnInit } from '@angular/core';
import { TabDirective } from 'ngx-bootstrap/tabs';
import {FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';


@Component({
  selector: 'app-abonamente',
  templateUrl: './abonamente.component.html',
  styleUrls: ['./abonamente.component.css']
})
export class AbonamenteComponent implements OnInit {

  // title = 'angular-material-tab-router';
  // navLinks: any[];
  // activeLinkIndex = -1;

  constructor(private router: Router) {
    // this.navLinks = [
    //     {
    //         label: 'Cardio',
    //         link: './cardio',
    //         index: 0
    //     }, {
    //         label: 'Copii',
    //         link: './copii',
    //         index: 1
    //     }, {
    //         label: 'Full',
    //         link: './full',
    //         index: 2
    //     },
    //     {
    //       label: 'Happy-Hour',
    //       link: './happy-hour',
    //       index: 3
    //   },
    //   {
    //     label: 'Student',
    //     link: './student',
    //     index: 4
    // },
    // ];
}
 ngOnInit() {
   };

  logOut() : void{
    this.router.navigate(['login']);
  }

  copii() : void{
    this.router.navigate(['copii']);
  }

  student() : void{
    this.router.navigate(['student']);
  }

  happy() : void{
    this.router.navigate(['happy-hour']);
  }

  cardio() : void{
    this.router.navigate(['cardio']);
  }

  full() : void{
    this.router.navigate(['copii']);
  }

}
