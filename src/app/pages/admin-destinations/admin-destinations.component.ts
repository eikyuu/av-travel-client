import { Component, OnInit } from '@angular/core';
import { DestinationService } from 'src/app/shared/services/destination.service';
import { Destination } from 'src/app/shared/models/destination';

@Component({
  selector: 'app-admin-destinations',
  templateUrl: './admin-destinations.component.html',
  styleUrls: ['./admin-destinations.component.scss']
})
export class AdminDestinationsComponent implements OnInit {

  public destinations: Destination[] = [];

  constructor( public destinationService: DestinationService) { }

  ngOnInit() {
    this.getDestinations();
  }

  getDestinations() {
    this.destinationService.getDestinations().subscribe(
      (paramDestinations) => {
         this.destinations =  paramDestinations;
         console.log(this.destinations);
      }
    );
  }
}
