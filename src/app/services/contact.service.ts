import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IContactRequests } from '../models/contact-requests';
import { IResponse } from '../models/response';



@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  BASE_URL = 'https://api.stagingeb.com/v1'

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'X-Authorization': 'l7u502p8v46ba3ppgvj5y2aad50lb9'
  });

  postContactRequests(contact: IContactRequests): Observable<IResponse>{
    return this.http.post<IResponse>(this.BASE_URL+`/contact_requests`, contact, { headers: this.headers });
  }
}
