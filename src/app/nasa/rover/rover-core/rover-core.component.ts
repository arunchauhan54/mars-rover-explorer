import {Component, OnInit} from '@angular/core';
import {RoverSearch} from "../rover-search/rover-search.component";
import {RoverDataFetchService, RoverResult} from "../rover-data-fetch.service";

@Component({
  selector: 'app-rover-core',
  templateUrl: './rover-core.component.html',
  styleUrls: ['./rover-core.component.css']
})
export class RoverCoreComponent implements OnInit {

  data : RoverResult[] = [];

  constructor(private roverService: RoverDataFetchService) {
  }

  ngOnInit() {
  }

  callService(roverSearch: RoverSearch) {
    this.data = [];
    this.roverService.fetchData(roverSearch)
      .subscribe(result => {
          this.data.push(result);
        },
        (error: any) => {
          console.log('error', error);
        })
  }
}
