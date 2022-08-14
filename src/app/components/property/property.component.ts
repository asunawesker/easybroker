import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProperty } from 'src/app/models/property';
import { PropertyService } from 'src/app/services/property.service';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

  dataProperty!: IProperty;


  constructor(private propertyService: PropertyService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        console.log(params);
        this.fetchProperty(params['id']);
      }
    );
  }

  fetchProperty(id: string){
    this.propertyService.getProperty(id).subscribe(data => {
      this.dataProperty = data;
      console.log(this.dataProperty);
    });
  }

}
