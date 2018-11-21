import { Component, OnInit, Input } from '@angular/core';
import { GeneralServiceService } from '../general-service.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  classes: any;
  @Input() type: string;

  constructor(private generalService: GeneralServiceService) {

  }

  ngOnInit() {
    if (this.type === 'Lecciones') {
      this.classes = this.generalService.getLessons();
    } else {
      this.classes = this.generalService.getPractices();
    }
  }

}
