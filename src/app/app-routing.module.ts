import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './pages/contents/home/home.component';
import { PaymentsComponent } from './pages/contents/payment/payments/payments.component';
import { MaintainenceComponent } from './pages/contents/maintainence/maintainence/maintainence.component';
import { RequestMaintainenceComponent } from './pages/contents/maintainence/request-maintainence/request-maintainence.component';
import { SharedDocumentComponent } from './pages/contents/shared_documents/shared-document/shared-document.component';
import { PropertyInformationComponent } from './pages/contents/information/property-information/property-information.component';
import { ComplianceComponent } from './pages/contents/compliances/compliance/compliance.component';
import { AddComplianceComponent } from './pages/contents/compliances/add-compliance/add-compliance.component';
import { UserProfileComponent } from './pages/contents/account-profile/user-profile.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthGuard } from './guards/Authentication/auth.guard';

const routes: Routes = [{
  path : '',
  component: LoginComponent
},  {
  path: 'dashboard',
  component: DashboardComponent, canActivate: [AuthGuard],
  children: [{
    path: '',
    component: HomeComponent
  }, {
    path: 'home',
    component: HomeComponent
  }, {
    path: 'payments',
    component: PaymentsComponent
  }, {
    path: 'maintainence',
    children: [{
      path: '',
      component: MaintainenceComponent
    }, {
      path: 'requestmaintenance',
      component: RequestMaintainenceComponent
    }]
  }, {
    path: 'shareddocument',
    component: SharedDocumentComponent
  }, {
    path: 'propertyinformation',
    component: PropertyInformationComponent
  }, {
    path: 'compliance',
    children: [{
      path: '',
      component: ComplianceComponent
    },
      {
        path: 'addcompliance',
        component: AddComplianceComponent,
        pathMatch: 'full'
      }
    ]
  }, {
    path: 'account',
    component: UserProfileComponent
  }]
}, {
  path: 'login',
  component: LoginComponent
}, {
  path: 'register',
  component: RegisterComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
