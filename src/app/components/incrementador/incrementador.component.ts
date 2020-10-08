import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef;

  @Input() leyenda = 'Leyenda';
  @Input() progress = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
    // console.log('Leyenda: ', this.leyenda);
  }

  ngOnInit(): void {
    /* console.log('LEYENDA: ', this.leyenda);
    console.log('Progress: ', this.progress); */
  }


  onChanges(newValue: number) {

    // const elementHtml: any = document.getElementsByName('progress')[0];

    if (newValue >= 100) {
      this.progress = 100;
    } else if (newValue <= 0){
      this.progress = 0;
    } else {
      this.progress = newValue;
    }

    // elementHtml.value = this.progress;
    this.txtProgress.nativeElement.value = newValue;

    this.cambioValor.emit(this.progress);
  }


  cambiarValor(valor) {

    if (this.progress >= 100 && valor > 0) {
      this.progress = 100;
      return;
    }
    if (this.progress <= 0 && valor < 0) {
      this.progress = 100;
      return;
    }
    this.progress += valor;

    this.cambioValor.emit(this.progress);

    this.txtProgress.nativeElement.focus();
  }

}
