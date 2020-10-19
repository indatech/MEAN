import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare function customInitFunctions();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( public router: Router) { }

  ngOnInit(): void {
    customInitFunctions();
  }


  ingresar() {
    this.router.navigate(['/dashboard']);
  }

}
