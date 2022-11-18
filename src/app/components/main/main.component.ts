import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private router: Router) { }
  isSignedIn: boolean = false;
  isAdminUser: boolean = false;

  ngOnInit(): void {
    // this.check();
    // this.router.events.subscribe(() => {
    //   this.check();
    // })
  }
  logout() {
    localStorage.removeItem('token');
  }

  // check() {
  //   const me = JSON.parse(localStorage.getItem('me')) as User;
  //   if (me) {
  //     this.isSignedIn = true;
  //     if (me.isAdmin) {
  //       this.isAdminUser = true;
  //     } else {
  //       this.isAdminUser = false;
  //     }
  //   } else {
  //     this.isSignedIn = false;
  //     this.isAdminUser = false;
  //   }
  // }
}