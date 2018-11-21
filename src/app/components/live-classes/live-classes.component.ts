import { Component, OnInit, Input } from '@angular/core';
import { GeneralServiceService } from '../general-service.service';

@Component({
  selector: 'app-live-classes',
  templateUrl: './live-classes.component.html',
  styleUrls: ['./live-classes.component.css']
})
export class LiveClassesComponent implements OnInit {

  canClick: boolean;
  timer: boolean;
  per: number;
  mad: number;
  tot: number;
  classes: any;

  @Input() backColor: string;

  onFinish() {
    this.canClick = false;
  }

  inicTimer() {
    this.timer = true;
  }

  goToUrl(url: string): void {
    window.location.href = url;
}

  constructor(private generalService: GeneralServiceService) {

   }

  ngOnInit() {
    this.canClick = true;
    this.timer = false;
    const data = this.generalService.getProgress();
    this.classes = this.generalService.getLiveClasses();
    this.per = parseInt(data.liveClassProgressPercent);
    this.mad = data.liveClassTaken;
    this.tot = data.liveClassRequired;
}
}
