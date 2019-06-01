import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/contents/home/home.component';
import { PaymentsComponent } from './pages/contents/payment/payments/payments.component';
import { MaintainenceComponent } from './pages/contents/maintainence/maintainence/maintainence.component';
import { SharedDocumentComponent } from './pages/contents/shared_documents/shared-document/shared-document.component';
import { ComplianceComponent } from './pages/contents/compliances/compliance/compliance.component';
import { PropertyInformationComponent } from './pages/contents/information/property-information/property-information.component';
import { UserProfileComponent } from './pages/contents/account-profile/user-profile.component';
import { AddComplianceComponent } from './pages/contents/compliances/add-compliance/add-compliance.component';
import { NavComponent } from './components/fixed/nav/nav.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { FooterComponent } from './components/fixed/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { HeaderComponent } from './components/fixed/header/header.component';
import { RequestMaintainenceComponent } from './pages/contents/maintainence/request-maintainence/request-maintainence.component';
import { ChangeCursorDirective } from './utils/directives/change-cursor/change-cursor.directive';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  entryComponents: [
    HomeComponent,
    PaymentsComponent,
    MaintainenceComponent,
    SharedDocumentComponent,
    ComplianceComponent,
    PropertyInformationComponent,
    UserProfileComponent,
    AddComplianceComponent
  ],
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    DashboardComponent,
    NotificationsComponent,
    HomeComponent,
    HeaderComponent,
    PaymentsComponent,
    MaintainenceComponent,
    SharedDocumentComponent,
    ComplianceComponent,
    PropertyInformationComponent,
    UserProfileComponent,
    AddComplianceComponent,
    RequestMaintainenceComponent,
    ChangeCursorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  HttpClientModule  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
