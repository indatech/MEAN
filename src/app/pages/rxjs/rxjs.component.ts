import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {

    this.subscription =  this.regresaObservable()
                              .subscribe(
                                numero => console.log('Subs ', numero),
                                error => console.error('Error en el observador 2 veces.', error),
                                () => console.log('El observador terminó.')
                              );

  }


  ngOnInit(): void {
  }

  ngOnDestroy(): void {

    this.subscription.unsubscribe();

  }


  regresaObservable(): Observable<any> {

    return new Observable(observer => {

      // tslint:disable-next-line: prefer-const
      let contador = 0;

      // tslint:disable-next-line: prefer-const
      let intervalo = setInterval(() => {

        contador += 1;
        const salida = {
          valor: contador
        };
        observer.next(salida);

        /* if (contador === 3) {

          clearInterval(intervalo);
          observer.complete();
        } */

        /* if (contador === 2) {

          observer.error('Error ...');
        } */

      }, 500);
    })
    .pipe(retry(2),
          map( (resp: any) => {
                  return resp.valor;
                }),
          filter( (valor, index) => {

                    if ( (valor % 2) === 1 ) {

                      return true;
                    } else {

                      return false;
                    }
                  })
          );

  }

}
