import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFormComponent } from './components/input-form/input-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputCheckboxComponent } from './components/input-checkbox/input-checkbox.component';
import { InputRadioComponent } from './components/input-radio/input-radio.component';
import { SelectComponent } from './components/select/select.component';
import { MatSelectModule } from '@angular/material/select';
import { PopupErrorComponent } from './components/popup-error/popup-error.component';



@NgModule({
  declarations: [InputFormComponent, InputCheckboxComponent, InputRadioComponent, SelectComponent, PopupErrorComponent],
  exports: [
    InputFormComponent,
    InputCheckboxComponent,
    InputRadioComponent,
    SelectComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSelectModule
  ]
})
export class SharedModule { }
