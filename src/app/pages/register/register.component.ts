import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare let $: any;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    $(document).ready(() => {
      $('body').css('background-color', '#eee');
    });
  }

  doRegistration() {
this.router.navigate(['login']);
  }
}
