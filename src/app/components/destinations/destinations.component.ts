import { Component, OnInit, Input } from '@angular/core';
import { Destination } from 'src/app/shared/models/destination';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss']
})
export class DestinationsComponent implements OnInit {

  @Input() destinations: Destination;

  constructor() { }

  ngOnInit() {
  }

}
