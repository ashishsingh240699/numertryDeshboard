import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HomeComponent } from './pages/home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { AuthInterceptorProviders } from './services/auth.interceptor';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';

import {MatListModule} from '@angular/material/list';
import { ProfileComponent } from './pages/user/profile/profile.component';
import { ApplicationformComponent } from './pages/user/applicationform/applicationform.component';
import { UploadDocumentComponent } from './pages/user/upload-document/upload-document.component';
import { ShortlistCollegeComponent } from './pages/user/shortlist-college/shortlist-college.component';
import { OnlinePaymentComponent } from './pages/user/online-payment/online-payment.component';
import { QuieryComponent } from './pages/user/quiery/quiery.component';
import { ReviewComponent } from './pages/user/review/review.component';
import { ChangePasswordComponent } from './pages/user/change-password/change-password.component';
import { CashbankComponent } from './pages/user/cashbank/cashbank.component';
import { SidebarComponent } from './pages/user/user-dashboard/sidebar/sidebar.component';
import { ApplynowComponent } from './pages/user/applicationform/applynow/applynow.component';
import { LogoutComponent } from './pages/user/logout/logout.component';
import { ViewbankComponent } from './pages/user/cashbank/viewbank/viewbank.component';
import { ShowReviewComponent } from './pages/user/review/show-review/show-review.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    UserDashboardComponent,
    ProfileComponent,
    ApplicationformComponent,
    UploadDocumentComponent,
    ShortlistCollegeComponent,
    OnlinePaymentComponent,
    QuieryComponent,
    ReviewComponent,
    ChangePasswordComponent,
    CashbankComponent,
    SidebarComponent,
    ApplynowComponent,
    LogoutComponent,
    ViewbankComponent,
    ShowReviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,MatCardModule,
    MatToolbarModule,MatIconModule,MatListModule
  ],
  providers: [AuthInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
