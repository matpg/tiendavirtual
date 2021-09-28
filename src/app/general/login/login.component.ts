import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string|null = "";
  password: string | null= "";

  mensaje_email: string|null = "";
  mensaje_password: string | null = "";
  constructor() { }

  ngOnInit(): void {
  }

  iniciarSesion(): void{
    console.log(this.email + " - " + this.password);
    if(!this.email){
      this.mensaje_email = this.mensaje_email + "\n El email no puede estar blanco";
    }else if(this.email.length <= 4 || this.email.length >= 30){
      this.mensaje_email  = "El email no puede ser menor a 4 caracteres ni mayor a 30";
    }else if(/^\s+|\s+$/.test(this.email)){
      this.mensaje_email = "Introduzca un cadena de texto.";
    }else if ( this.email.trim() == ""){
      this.mensaje_email =  "El campo Email no puede tener espacios vacios";
    }else{
      this.mensaje_email = "";
    }

    if(!this.password){
      this.mensaje_password = this.mensaje_password + "El password no puede estar blanco";
    }else if(this.password.length <= 0 || this.password.length >= 15){
      this.mensaje_password = "El password no puede ser menor a 4 caracteres ni mayor a 15";
    }else if(/^\s+|\s+$/.test(this.password)){
      this.mensaje_password = "Introduzca un cadena de texto.";
    }else if ( this.password.trim() == ""){
      this.mensaje_password =  "El campo password no puede tener espacios vacios";
    }else{
      this.mensaje_password= ""; 
    }
     

  }
  
}
