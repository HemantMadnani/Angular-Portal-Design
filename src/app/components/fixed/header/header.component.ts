import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  headerTitle: string;
  constructor(private router: Router) {
  }
  ngOnInit() {
    this.headerTitle = 'Home';
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.setHeaderTitle(this.router.url);
      }
    });

  }

  doLogout() {
    this.router.navigate(['login']);
  }

  setHeaderTitle(fullUrl) {
    switch (fullUrl) {
      case '/dashboard': this.headerTitle = 'Home'; break;
      case '/dashboard/home': this.headerTitle = 'Home'; break;
      case '/dashboard/payments': this.headerTitle = 'Payments'; break;
      case '/dashboard/account': this.headerTitle = 'Account Profile'; break;
      case '/dashboard/propertyinformation': this.headerTitle = 'Property Info'; break;
      case '/dashboard/compliance': this.headerTitle = 'Compliance'; break;
      case '/dashboard/maintainence': this.headerTitle = 'Maintainence'; break;
      case '/dashboard/maintainence/requestmaintenance': this.headerTitle = 'Request Maintainence'; break;
      case '/dashboard/compliance/addcompliance': this.headerTitle = 'Submit New Review'; break;
      case '/dashboard/shareddocument': this.headerTitle = 'Shared Document'; break;
      default: this.headerTitle = 'Home'; break;
    }
  }

}
