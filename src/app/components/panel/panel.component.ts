import { Component, OnInit, Input } from '@angular/core';
import { GeneralServiceService } from '../general-service.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  tit: string;
  per: number;
  mad: number;
  tot: number;

  @Input() backColor: string;
  @Input() data: string;

  constructor(private generalService: GeneralServiceService) { }

  ngOnInit() {
    this.tit = this.data;
    const progress = this.generalService.getProgress();
    if (this.data === 'Lecciones') {
      this.mad = parseInt(progress.lessonTaken);
      this.tot = parseInt(progress.lessonRequired);
      this.per = parseInt(progress.lessonProgressPercent);
    } else {
      this.mad = parseInt(progress.practiceHoursTaken);
      this.tot = parseInt(progress.practiceHoursRequired);
      this.per = parseInt(progress.practiceProgressPercent);
    }
  }

}
