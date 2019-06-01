import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-maintainence',
  templateUrl: './request-maintainence.component.html',
  styleUrls: ['./request-maintainence.component.css']
})
export class RequestMaintainenceComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  cancelMaintainanceRequest() {
    this.router.navigate(['dashboard/maintainence']);
  }
}
