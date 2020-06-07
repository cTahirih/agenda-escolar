import { Component, Input, OnInit } from '@angular/core';
import { ISelectOptions } from '../../interfaces/elementHTML.interface';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  @Input() labelText: string;
  @Input() options: ISelectOptions[];
  constructor() { }

  ngOnInit(): void {
  }

}
