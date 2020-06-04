import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFormComponent } from './components/input-form/input-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputCheckboxComponent } from './components/input-checkbox/input-checkbox.component';
import { InputRadioComponent } from './components/input-radio/input-radio.component';



@NgModule({
  declarations: [InputFormComponent, InputCheckboxComponent, InputRadioComponent],
  exports: [
    InputFormComponent,
    InputCheckboxComponent,
    InputRadioComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
