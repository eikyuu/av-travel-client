import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { DestinationsComponent } from './components/destinations/destinations.component';
import { ToursComponent } from './components/tours/tours.component';
import { PlayerComponent } from './components/player/player.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { AdminDestinationsComponent } from './pages/admin-destinations/admin-destinations.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AdminToursComponent } from './pages/admin-tours/admin-tours.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    BannerComponent,
    SearchBarComponent,
    DestinationsComponent,
    ToursComponent,
    PlayerComponent,
    AdminDashboardComponent,
    AdminDestinationsComponent,
    AdminToursComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
