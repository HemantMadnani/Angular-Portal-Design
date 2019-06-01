import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare let $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) {
    if (localStorage.getItem('loggedInUser')) {
      this.router.navigate(['dashboard']);
    }
  }

  ngOnInit() {
    $(document).ready(() => {
      $('body').css('background-color', '#eee');
    });
  }
  processLogin() {
    this.router.navigate(['dashboard']);
  }

}
