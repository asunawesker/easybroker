import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ContactService } from './contact.service';
import { IResponse } from '../models/response';
import { IContactRequests } from '../models/contact-requests';

describe('ContactService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let contactService: ContactService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ContactService
      ]
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    contactService = TestBed.inject(ContactService);
  });
  afterEach(() => {
    httpTestingController.verify();
  });

  it('should create', () => {
    expect(contactService).toBeTruthy();
  });

  it('should post a contact request and return a IResponse', () => {
    const newContactRequest: IContactRequests = {
      "name": "Maricela Arenas",
      "phone": "2721670898",
      "email": "correoprueba@example.com",
      "property_id": "EB-C6484",
      "message": "I'm interested in this property. Please contact me.",
      "source": "pruebatecnica-irais.com"
    }
    const response: IResponse = { status: 'successful' };
    contactService.postContactRequests(newContactRequest).subscribe(
      data => expect(data).toBe(response),
      fail
    );
    const req = httpTestingController.expectOne(contactService.BASE_URL+'/contact_requests');
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(newContactRequest);

    const expectedResponse = new HttpResponse({ status: 200, body: response });
    req.event(expectedResponse);
  });
});
