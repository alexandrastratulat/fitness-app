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

  // tabs = ['Copii', 'Student', 'Happy-hour', 'Cardio', 'Full(piscina + sauna)'];
  // selected = new FormControl(0);

  // addTab(selectAfterAdding: boolean) {
  //   this.tabs.push('New');

  //   if (selectAfterAdding) {
  //     this.selected.setValue(this.tabs.length - 1);
  //   }
  // }

  // removeTab(index: number) {
  //   this.tabs.splice(index, 1);
  // }
  title = 'angular-material-tab-router';
  navLinks: any[];
  activeLinkIndex = -1;
  constructor(private router: Router) {
    this.navLinks = [
        {
            label: 'Cardio',
            link: './cardio',
            index: 0
        }, {
            label: 'Copii',
            link: './copii',
            index: 1
        }, {
            label: 'Full',
            link: './full',
            index: 2
        },
        {
          label: 'Happy-Hour',
          link: './happy-hour',
          index: 3
      },
      {
        label: 'Student',
        link: './student',
        index: 4
    },
    ];
}
ngOnInit(): void {
  this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
  });
}
  logOut() : void{
    this.router.navigate(['login']);
  }

  next() : void{
    this.router.navigate(['formular']);
  }

    // abonamente: string[] = ['copii', 'student', 'happy-hour', 'cardio', 'full(piscina + sauna)'];


}
