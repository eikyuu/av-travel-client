import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { AdminDestinationsComponent } from './pages/admin-destinations/admin-destinations.component';
import { AdminToursComponent } from './pages/admin-tours/admin-tours.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminDashboardComponent },
  { path: 'admin/destinations', component: AdminDestinationsComponent },
  { path: 'admin/tours', component: AdminToursComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
