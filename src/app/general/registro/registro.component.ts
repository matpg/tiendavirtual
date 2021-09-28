import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //FORM=====
  email: string = "";
  password: string = "";
  nombre: string = "";
  inputRepetidaPassword: string = "";
  //==========

  mensaje_password: string | null = "";
  mensaje_nombre: string | null = "";
  mensaje_email: string | null = "";
  mensaje_password_repetida: string | null = "";




  insertar(): void {
    console.log(this.email);
    console.log(this.nombre);
    console.log(this.password);
    console.log(this.inputRepetidaPassword);

    if (/^\s+|\s+$/.test(this.nombre)) {
      this.mensaje_nombre = "Introduzca un cadena de texto.";
    } else if (this.nombre.trim() == "") {
      this.mensaje_nombre = " El campo nombre no puede  estar vacio";
    } else if (this.nombre.length < 0 || this.nombre.length > 15) {
      this.mensaje_nombre = "El campo nombre debe tener entre 0 y 15 caracteres";
    } else {
      this.mensaje_nombre = "";
    }

    let regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    if (/^\s+|\s+$/.test(this.email)) {
      this.mensaje_email = "Introduzca un cadena de texto.";
    } else if (!regexp.test(this.email)) {
      this.mensaje_email = "El email debe ser valido";
    } else if (this.email.trim() == "") {
      this.mensaje_email = "El campo email no puede  estar vacio";
    } else if (this.email.length < 0 || this.email.length > 30) {
      this.mensaje_email = "El campo email debe tener entre 5 y 30 caracteres";
    } else {
      this.mensaje_email = "";
    }

    if (/^\s+|\s+$/.test(this.password)) {
      this.mensaje_password = "Introduzca un cadena de texto.";
    } else if (this.password.trim() == "") {
      this.mensaje_password = "El campo password no puede  estar vacio";
    } else if (this.password.length < 0 || this.password.length > 15) {
      this.mensaje_password = "El campo password debe tener entre 5 y 15 caracteres";
    } else {
      this.mensaje_password = "";
    }

    if (/^\s+|\s+$/.test(this.inputRepetidaPassword)) {
      this.mensaje_password_repetida = "Introduzca un cadena de texto.";
    } else if (this.inputRepetidaPassword.trim() == "") {
      this.mensaje_password_repetida = "el campo password repetido no puede  llevar espacios";
    } else if (this.password.length < 0 || this.password.length > 15) {
      this.mensaje_password_repetida = "el campo password repetido no puede ser menor a 0 y mayor a 15 ";
    } else {
      this.mensaje_password_repetida = "";
    }

  }
}
