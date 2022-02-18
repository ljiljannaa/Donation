import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './core/about/about.component';
import { HomeComponent } from './core/home/home.component';
import { DonorsComponent } from './donors/donors.component';
import { NewDonorComponent } from './new-donor/new-donor.component';

const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path: "about", component: AboutComponent},
  {path: "donors", component: DonorsComponent},
  {path: "new-donor", component: NewDonorComponent},
  {path: "new-donor/:id", component: NewDonorComponent},
  {path: "", redirectTo: "home", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
