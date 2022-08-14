import { of } from 'rxjs';
import { PropertiesService } from './properties.service';

describe('PropertiesService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let propertiesService: PropertiesService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    propertiesService = new PropertiesService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(propertiesService).toBeTruthy();
  })

  it('Should return expected users (HttpClient called once)', () => {
    const properties = [
      {
        "pagination": {
            "limit": 1,
            "page": 1,
            "total": 827,
            "next_page": "https://api.stagingeb.com/v1/properties?limit=1&page=2"
        },
        "content": [
            {
                "public_id": "EB-B5339",
                "title": "Locales en Venta Amadeus Calzada del Valle",
                "title_image_full": "https://assets.stagingeb.com/property_images/25339/49442/EB-B5339.jpg?version=1555543334",
                "title_image_thumb": "https://assets.stagingeb.com/property_images/25339/49442/EB-B5339_thumb.jpg?version=1555543334",
                "location": "Del Valle, San Pedro Garza García, Nuevo León",
                "operations": [
                    {
                        "type": "sale",
                        "amount": 5954400.0,
                        "currency": "MXN",
                        "formatted_amount": "$5,954,400",
                        "commission": {
                            "type": "percentage"
                        },
                        "unit": "total"
                    }
                ],
                "bedrooms": null,
                "bathrooms": null,
                "parking_spaces": 114,
                "property_type": "Local en centro comercial",
                "lot_size": 0.0,
                "construction_size": 49.0,
                "updated_at": "2020-12-14T17:07:37-06:00",
                "agent": "Alejandro Blanco Zivec",
                "show_prices": true,
                "share_commission": false
            }
        ]
    }
    ];

    httpClientSpy.get.and.returnValue(of(properties));

    propertiesService.getProperties();
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });


});
