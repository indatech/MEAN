import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  progress1 = 20;
  progress2 = 30;

  constructor() { }

  ngOnInit(): void {
  }

  actualizar(event: number) {
    this.progress1 = event;
  }


}
