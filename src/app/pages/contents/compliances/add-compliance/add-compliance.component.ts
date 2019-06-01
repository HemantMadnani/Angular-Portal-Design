import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-compliance',
  templateUrl: './add-compliance.component.html',
  styleUrls: ['./add-compliance.component.css']
})
export class AddComplianceComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  cancelAddCompliance() {
    this.router.navigate(['dashboard/compliance']);
  }
}
