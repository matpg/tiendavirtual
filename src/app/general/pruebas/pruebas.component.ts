import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css']
})
export class PruebasComponent implements OnInit {

  fecha: string = formatDate(new Date(), 'dd/MM/yyyy', 'en');
  titulo: string ='Curso de Angular Basico';
  mes: number = new Date().getMonth() + 1;
  dia: number | null | string = null;
  contador: number = 0;
  semana: string[] = ["Domingo", "Lunes", "Miercoles", "Jueves", "Viernes", "Sabado"];
  eliminado: string | null | undefined = null;
  post: any = null;

  //variables del formulario
  email: string | null = null;
  password: string | null = null;

  constructor() {
    console.log("Constructor Pruebas");
  }

  ngOnInit(): void {
    console.log("ngInit Pruebas")
  }

  // set y get
  //metodos


  //metodo o funciones (logica de negocios)
  obtenerDia(){
    this.dia = new Date().getDay();
  }

  get contador_(): number {
    return this.contador;
  }

  sumar(){
    this.contador++;
  }

  restar(){
    this.contador--;
  }

  eliminar(){
    this.eliminado = this.semana.pop();
  }

  agregarDia(nuevodia: string){
    this.semana.push(nuevodia);
  }

  insertar(event: any): void {
    console.log(event);
  }

  insertar2() {
    console.log(this.email, this.password);
  }

}
