import {Component, EventEmitter, Inject, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-rover-search',
  templateUrl: './rover-search.component.html',
  styleUrls: ['./rover-search.component.css']
})
export class RoverSearchComponent {
  search: RoverSearch;
  roverForm: FormGroup;
  @Output() searchQuery = new EventEmitter<RoverSearch>();

  constructor(@Inject(FormBuilder) private  formBuilder: FormBuilder) {
    this.roverForm = formBuilder.group(
      {
        date: ['', Validators.required],
        camera: ['FHAZ']
      }
    )
  }

  addPost(value: RoverSearch) {
    if (this.roverForm.valid) {
      this.searchQuery.emit(value);
    }
  }
}

export interface RoverSearch {
  date: Date;
  camera: string;
}
