import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RoverSearch} from "./rover-search/rover-search.component";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {flatMap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RoverDataFetchService {

  constructor(private http: HttpClient) {
  }

  fetchData(roverSearch: RoverSearch): Observable<RoverResult> {
    return this.http
      .get(`${environment.API_URL}earth_date=${roverSearch.date}&api_key=${environment.API_KEY}`)
      .pipe(flatMap(value => (<Photos>value).photos));
  }
}


export interface Photos {
  photos: RoverResult[];
}

export interface RoverResult {
  img_src: string;
  earth_date: string;
  camera: Camera;
}

export interface Camera {
  full_name: string;
  name: string;

}
