import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progres-bar',
  templateUrl: './progres-bar.component.html',
  styleUrls: ['./progres-bar.component.css']
})
export class ProgresBarComponent implements OnInit {

  @Input() title: string;
  @Input() percentage: number;
  @Input() made: number;
  @Input() totals: number;

  constructor() { }

  ngOnInit() {
  }

}
