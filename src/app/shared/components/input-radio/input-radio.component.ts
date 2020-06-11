import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-radio',
  templateUrl: './input-radio.component.html',
  styleUrls: ['./input-radio.component.scss']
})
export class InputRadioComponent implements OnInit {
  @Input() text: string;
  @Input() control: FormControl;
  @Input() value: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
