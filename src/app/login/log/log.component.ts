import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import { MatDialog, MatDialogRef } from "@angular/material";
import { Observable } from "rxjs";

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  hide = true;
  username: string;
  password: string;

  constructor(private router: Router) {}

  // constructor(private router: Router, private dialog: MatDialog
  //   ) {
  //     let observable = new Observable(this.myObservable);
  //     this.showProgressSpinnerUntilExecuted(observable);
  //   }


  ngOnInit() {
  }

  login() : void {
    if (this.username === 'admin' && this.password === 'admin') {
     this.router.navigate(['abonamente']);
    }else {
      alert('Invalid credentials');
    }
  }

  // myObservable(observer) {
  //   setTimeout(() => {
  //     observer.next("done waiting for 5 sec");
  //     observer.complete();
  //   }, 5000);
  // }

  // showProgressSpinnerUntilExecuted(observable: Observable<Object>) {
  //   let dialogRef: MatDialogRef<LogComponent> = this.dialog.open(LogComponent, {
  //     panelClass: 'transparent',
  //     disableClose: true
  //   });
  //   let subscription = observable.subscribe(
  //     (response: any) => {
  //       subscription.unsubscribe();
  //       //handle response
  //       console.log(response);
  //       dialogRef.close();
  //     },
  //     (error) => {
  //       subscription.unsubscribe();
  //       //handle error
  //       dialogRef.close();
  //     }
  //   );
  // }
}


