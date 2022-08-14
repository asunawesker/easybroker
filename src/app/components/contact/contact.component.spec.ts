import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
      declarations: [ ContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a form with four controls', () => {
    expect(component.form.contains('name')).toBeTruthy();
    expect(component.form.contains('email')).toBeTruthy();
    expect(component.form.contains('phone')).toBeTruthy();
    expect(component.form.contains('message')).toBeTruthy();
  });

  it('name should be required', () => {
      let control : any;
      control = component.form.get('name');
      control.setValue('');
      expect(control.valid).toBeFalsy();
  });

  it('email should be required', () => {
      let control : any;
      control = component.form.get('email');
      control.setValue('');
      expect(control.valid).toBeFalsy();
  });

  it('phone should be required', () => {
      let control : any;
      control = component.form.get('phone');
      control.setValue('');
      expect(control.valid).toBeFalsy();
  });

  it('message should be required', () => {
      let control : any;
      control = component.form.get('message');
      control.setValue('');
      expect(control.valid).toBeFalsy();
  });
});
