import {Component, Input, OnInit} from '@angular/core';
import {RoverResult} from "../rover-data-fetch.service";

@Component({
  selector: 'app-rover-images',
  templateUrl: './rover-images.component.html',
  styleUrls: ['./rover-images.component.css']
})
export class RoverImagesComponent implements OnInit {

  @Input() data: RoverResult[];

  constructor() { }

  ngOnInit() {
  }

}
