import { Component, OnInit } from '@angular/core';
import { DestinationService } from 'src/app/shared/services/destination.service';
import { Destination } from 'src/app/shared/models/destination';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin-destinations',
  templateUrl: './admin-destinations.component.html',
  styleUrls: ['./admin-destinations.component.scss']
})
export class AdminDestinationsComponent implements OnInit {


  editMode = false;
  indexToRemove: any;

  public destinations: Destination[] = [];

  constructor( public destinationService: DestinationService, private fb: FormBuilder) { }

  destinationsForm = this.fb.group({
      id: [''],
      title: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      description: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(1000)]],
      pays: [''],
      image: [''],
      ville: ['']
    });

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

  resetForm() {
    this.editMode = false;
    this.destinationsForm.reset();
  }

  onEditDestination(destination: Destination) {
    this.editMode = true;
    this.destinationsForm.get('id').setValue(destination.id);
    this.destinationsForm.get('title').setValue(destination.title);
    this.destinationsForm.get('description').setValue(destination.description);
    this.destinationsForm.get('pays').setValue(destination.pays);
    this.destinationsForm.get('image').setValue(destination.image);
    this.destinationsForm.get('ville').setValue(destination.ville);
  }

  onDeleteDestination(destination: Destination) {
    this.indexToRemove = destination;
  }

  onConfirmDeleteProperty() {
    this.destinationService.deleteDestination(this.indexToRemove).subscribe();
    window.location.reload();
  }

  onSubmit() {
      if (this.editMode) {
        this.destinationService.updateDestination(this.destinationsForm.value, this.destinationsForm.value.id).subscribe(result => result);
        window.location.reload();
      } else {
          this.destinationService.postDestination(this.destinationsForm.value).subscribe(result => result);
          window.location.reload();
      }
    }
}
