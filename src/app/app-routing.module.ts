import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertiesComponent } from './components/properties/properties.component';
import { PropertyComponent } from './components/property/property.component';

const routes: Routes = [
  {
    path:'',
    component: PropertiesComponent
  },
  { path: 'property', component: PropertyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
