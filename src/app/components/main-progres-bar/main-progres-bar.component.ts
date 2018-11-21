import { Component, OnInit } from '@angular/core';
import { GeneralServiceService } from '../general-service.service';

@Component({
  selector: 'app-main-progres-bar',
  templateUrl: './main-progres-bar.component.html',
  styleUrls: ['./main-progres-bar.component.css']
})
export class MainProgresBarComponent implements OnInit {
  title = 'Mi Progreso';
  actualLevel;
  nextLevel;
  value;

  constructor(private generalService: GeneralServiceService) { }

  ngOnInit() {
    const data = this.generalService.getProgress();
    this.actualLevel = data.currentLevel;
    this.nextLevel = data.nextLevel;
    this.value = parseInt(data.levelProgressPercent);
  }

}
