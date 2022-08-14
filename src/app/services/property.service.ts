import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProperty } from '../models/property';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private http: HttpClient) { }

  BASE_URL = 'https://api.stagingeb.com/v1'

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'X-Authorization': 'l7u502p8v46ba3ppgvj5y2aad50lb9'
  });

  getProperty(id: string): Observable<IProperty>{
    return this.http.get<IProperty>(this.BASE_URL+`/properties/${id}`, { headers: this.headers });
  }
}
