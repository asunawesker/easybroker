import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

import { PropertyService } from './property.service';

describe('PropertyService', () => {
  let service: PropertyService;
  let httpController: HttpTestingController;

  let url = 'https://api.stagingeb.com/v1';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(PropertyService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call get property and return a property', () => {
    const mockBookArray = {
      "public_id": "EB-C6484",
      "title": "CASA EN VENTA EN CUMBRES ORO EN MONTERREY",
      "description": "Casa en venta en Monterrey 105 m2 de terreno, 233 m2 de construcción, 3 plantas, 3 recámaras, la principal con clóset de pared y baño, las secundarías clóset de pared y comparten baño, cocina equipada con estufa, y campana, sala, comedor, estancia familiar, cuarto de juegos con baño completo. 2 terrazas, patio, clóset de blancos, lavandería, cuarto de servicio, cochera techada para 2 autos con portón eléctrico. Cerca de parque residencial. \n \n \n Hassaf Bienes Raices\n Dedicados a una asesoría financiera y patrimonial, juntos, multiplicamos resultados. Nuestro compromiso es un servicio profesional y personalizado. Para mas información y grandes resultados, llame!",
      "location": {
          "name": "Cumbres Oro Residencial, Monterrey, Nuevo León",
      },
      "operations": [
          {
              "type": "sale",
          }
      ],
      "property_images": [
        {
          "url": "https://assets.stagingeb.com/property_images/25357/117300/EB-B5357.jpeg?version=1605283914"
        }
      ],
    }
    let id: string = 'EB-B5357';
    service.getProperty(id).subscribe((res) => {
      expect(res).toEqual(mockBookArray);
    });

    const req = httpController.expectOne({
      method: 'GET',
      url: `${url}/properties/${id}`,
    });

    req.flush(mockBookArray);
  });
});
