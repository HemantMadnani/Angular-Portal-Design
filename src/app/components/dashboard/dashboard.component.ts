import { Component, OnInit } from '@angular/core';
declare let $: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor() { }

  ngOnInit() {
      $(document).ready(() => {
        $('#scrollbtn').click((event) => {
          event.preventDefault();
          $('html, body').animate({ scrollTop: 0 }, 'slow');
          return false;
        }
        );
      });
 
  }

}
