import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  @Input()
  backgroundColor: string;
  @Input()
  progressColor: string;
  @Input()
  width: number;
  constructor() {
  }

  ngOnInit() {
  }

}
