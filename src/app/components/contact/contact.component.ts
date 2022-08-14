import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IContactRequests } from 'src/app/models/contact-requests';
import { ContactService } from 'src/app/services/contact.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  contact!: IContactRequests;
  id!: string;

  constructor(private contactService: ContactService, private fb: FormBuilder, private route: ActivatedRoute) {
    this.form = fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]],
      phone: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.id = params['param1'];
      }
    );
  }

  postContactRequests(contact: IContactRequests){
    this.contactService.postContactRequests(contact).subscribe(data => {
      console.log(data);
      Swal.fire({
        title: 'Status contact requset',
        text: data.status,
        icon: 'info',
        confirmButtonText: 'Confirm'
      })
    });
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    if(this.form.value.name !== '' &&
       this.form.value.email !== '' &&
       this.form.value.phone !== '' &&
       this.form.value.message !== ''){
        this.contact = {
          "name": this.form.value.name,
          "phone": this.form.value.phone,
          "email": "correoprueba@example.com",
          "property_id": this.id,
          "message": this.form.value.message,
          "source": "pruebatecnica-irais.com"
        }
        console.log(this.contact);
        this.postContactRequests(this.contact);
    }
  }

}
