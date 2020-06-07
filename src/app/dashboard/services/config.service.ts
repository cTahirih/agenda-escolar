import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  urlBase = environment.api;
  endpoints = environment.endpoints;
  constructor(
    private http: HttpClient
  ) { }

  getCourses() {
    return this.http
      .get(this.urlBase + this.endpoints.config.course);
  }

  getGrade() {
    return this.http.get(this.urlBase + this.endpoints.config.grade);
  }

  getSection() {
    return this.http.get(this.urlBase + this.endpoints.config.section);
  }
}
