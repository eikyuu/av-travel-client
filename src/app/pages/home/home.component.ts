import { Component, OnInit } from '@angular/core';
import { Destination } from 'src/app/shared/models/destination';
import { DestinationService } from 'src/app/shared/services/destination.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public destinations: Destination[] = [];

  constructor(public destinationService: DestinationService) { }

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
