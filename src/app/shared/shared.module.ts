import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFormComponent } from './components/input-form/input-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [InputFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
