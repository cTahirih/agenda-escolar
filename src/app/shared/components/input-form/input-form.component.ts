import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent implements OnInit {
  @Input() fControl: FormControl;
  @Input() placeHolder: string;
  @Input() type: string;
  @Input() error: string;
  constructor() { }

  ngOnInit(): void {
  }

}
