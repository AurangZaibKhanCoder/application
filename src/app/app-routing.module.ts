import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HomepageinfoComponent } from './homepageinfo/homepageinfo.component';

const routes: Routes = [
  //{path:"",component:AppComponent},
  {path:"",component:HomepageComponent},
  {path:"homepageinfo",component:HomepageinfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
