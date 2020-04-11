import { Component, OnInit } from '@angular/core';
import { Tours } from 'src/app/shared/models/tours';
import { ToursService } from 'src/app/shared/services/tours.service';

@Component({
  selector: 'app-admin-tours',
  templateUrl: './admin-tours.component.html',
  styleUrls: ['./admin-tours.component.scss']
})
export class AdminToursComponent implements OnInit {

  public tours: Tours[] = [];

  constructor( public toursService: ToursService) { }

  ngOnInit() {
    this.getTours();
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
