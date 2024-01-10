import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from './services/admin.guard';
import { ProfileComponent } from './pages/user/profile/profile.component';
import { ApplicationformComponent } from './pages/user/applicationform/applicationform.component';
import { ApplynowComponent } from './pages/user/applicationform/applynow/applynow.component';
import { LogoutComponent } from './pages/user/logout/logout.component';
import { CashbankComponent } from './pages/user/cashbank/cashbank.component';
import { ViewbankComponent } from './pages/user/cashbank/viewbank/viewbank.component';
import { ReviewComponent } from './pages/user/review/review.component';
import { ShowReviewComponent } from './pages/user/review/show-review/show-review.component';
import { ChangePasswordComponent } from './pages/user/change-password/change-password.component';
import { QuieryComponent } from './pages/user/quiery/quiery.component';
import { UploadDocumentComponent } from './pages/user/upload-document/upload-document.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    pathMatch: "full"
  },
  {
    path: "signup",
    component: SignupComponent,
    pathMatch: "full"
  },
  {
    path: "login",
    component: LoginComponent,
    pathMatch: "full"
  },
  {
    path: "admin",
    component: DashboardComponent,
    pathMatch: "full",
    canActivate: [AdminGuard],
  },
  { path: "user-dashboard",component: UserDashboardComponent, pathMatch: "full"},
  {path:"profile",component:ProfileComponent,pathMatch:"full"},
  {path:"applicationform",component:ApplicationformComponent,pathMatch:"full"},
  {path:"applynow",component:ApplynowComponent,pathMatch:"full"},
  {path:"logout",component:LogoutComponent,pathMatch:"full"},
  {path:"bank",component:CashbankComponent,pathMatch:"full"},
  {path:"viewbank",component:ViewbankComponent,pathMatch:"full"},
  {path:"review",component:ReviewComponent,pathMatch:"full"},
  {path:"showReview",component:ShowReviewComponent,pathMatch:"full"},
  {path:"changePassword",component:ChangePasswordComponent,pathMatch:"full"},
 {path:"queiry",component:QuieryComponent,pathMatch:"full"},
  {path:"upload",component:UploadDocumentComponent,pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
