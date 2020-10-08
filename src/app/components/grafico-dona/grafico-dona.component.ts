import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html'
})
export class GraficoDonaComponent implements OnInit {

  @Input() public chartLabels = [];
  @Input() public chartData = [];
  @Input() public chartType = '';

  constructor() { }

  ngOnInit(): void {
  }

}
