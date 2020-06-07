import { Component, OnInit } from '@angular/core';
import { ISelectOptions } from '../../../shared/interfaces/elementHTML.interface';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  courses: ISelectOptions[];
  grade: ISelectOptions[];
  section: ISelectOptions[];
  userName = 'Margarita Flores';
  constructor(
    private configService: ConfigService
  ) { }

  ngOnInit(): void {
    this.getConfig();
  }

  getConfig() {
    this.configService.getCourses().subscribe((response: any) => {
      this.courses = response.map((elm) => {
        return {
          id: elm.id,
          value: elm.materia
        };
      });
    });

    this.configService.getGrade().subscribe((response: any) => {
      this.grade = response.map((elm) => {
        return {
          id: elm.id,
          value: elm.numeroGrado
        };
      });
    });

    this.configService.getSection().subscribe((response: any) => {
      this.section = response.map((elm) => {
        return {
          id: elm.id,
          value: elm.seccion
        };
      });
    });
  }
}
