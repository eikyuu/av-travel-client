import { Component, OnInit } from '@angular/core';
import { Destination } from 'src/app/shared/models/destination';
import { DestinationService } from 'src/app/shared/services/destination.service';
import { ToursService } from 'src/app/shared/services/tours.service';
import { Tours } from 'src/app/shared/models/tours';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public destinations: Destination[] = [];
  public tours: Tours[] = [];

  constructor(public destinationService: DestinationService, public toursService: ToursService) { }

  ngOnInit() {
    this.getDestinations();
    this.getTours();
  }

  getDestinations() {
    this.destinationService.getDestinations().subscribe(
      (paramDestinations) => {
         this.destinations =  paramDestinations;
         console.log(this.destinations);
      }
    );
  }

  getTours() {
    this.toursService.getTours().subscribe(
      (paramTours) => {
         this.tours =  paramTours;
         console.log(this.tours);
      }
    );
  }
}
