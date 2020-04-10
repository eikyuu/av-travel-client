import { Component, OnInit, Input } from '@angular/core';
import { Tours } from 'src/app/shared/models/tours';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.scss']
})
export class ToursComponent implements OnInit {

  @Input() tours: Tours;

  constructor() { }

  ngOnInit() {
  }

}
