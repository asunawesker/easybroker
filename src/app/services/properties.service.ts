import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IProperties } from 'src/app/models/properties';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {

  constructor(private http: HttpClient) { }

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'X-Authorization': 'l7u502p8v46ba3ppgvj5y2aad50lb9'
  });

  getProperties(url: string = 'https://api.stagingeb.com/v1/properties?limit=15&page=1'): Observable<IProperties>{
    return this.http.get<IProperties>(url, { headers: this.headers });
   }
}
