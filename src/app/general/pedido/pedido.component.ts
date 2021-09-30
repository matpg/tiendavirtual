import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //FORM 1 =====
  pais: string = "";
  calle: string = "";
  ciudad: string = "";
  region: string = "";
  codPostal: number = 0;
  //==========
  tipoTarjeta: string = "";
  nomCliente: string = "";
  mesAno: string = "";
  numCliente: number = 0;
  codSeg: number = 0;

  //MENSAJES VALIDACIONES
  mensaje_pais: string | null = "";
  mensaje_calle: string | null = "";
  mensaje_ciudad: string | null = "";
  mensaje_region: string | null = "";
  mensaje_codPostal: string | null = "";

  mensaje_tipoTarjeta: string | null = "";
  mensaje_nomCliente: string | null = "";
  mensaje_numCliente: string | null = "";
  mensaje_codSeg: string | null = "";

  insertar(): void {
    var valido = 0;
    if (this.pais.trim() == "") {
      this.pais = "";
      this.mensaje_pais = "El campo Pais no puede estar vacio";
    } else if (this.pais.length < 4 || this.pais.length > 10) {
      this.pais = "";
      this.mensaje_pais = "El campo Pais debe tener entre 4 y 10 caracteres";
    } else {
      this.mensaje_pais = "";
      valido++;
    }

    if (this.calle.trim() == "") {
      this.calle = "";
      this.mensaje_pais = "El campo Calle no puede estar vacio";
    } else if (this.calle.length < 4 || this.calle.length > 10) {
      this.calle = "";
      this.mensaje_pais = "El campo Calle debe tener entre 4 y 10 caracteres";
    } else {
      this.mensaje_pais = "";
      valido++;
    }

    if (this.ciudad.trim() == "") {
      this.ciudad = "";
      this.mensaje_ciudad = "El campo Ciudad no puede estar vacio";
    } else if (this.ciudad.length < 4 || this.ciudad.length > 20) {
      this.ciudad = "";
      this.mensaje_ciudad = "El campo Ciudad debe tener entre 4 y 20 caracteres";
    } else {
      this.mensaje_ciudad = "";
      valido++;
    }

    if (this.region.trim() == "") {
      this.region = "";
      this.mensaje_region = "El campo Region no puede estar vacio";
    } else if (this.region.length < 4 || this.region.length > 20) {
      this.region = "";
      this.mensaje_region = "El campo Region debe tener entre 4 y 20 caracteres";
    } else {
      this.mensaje_region = "";
      valido++;
    }

    if (this.tipoTarjeta.trim() == "") {
      this.tipoTarjeta = "";
      this.mensaje_tipoTarjeta = "El campo Tipo de Tarjeta no puede estar vacio";
    } else if (!(this.tipoTarjeta.includes("Débito") || this.tipoTarjeta.includes("Crédito"))) {
      this.tipoTarjeta = "";
      this.mensaje_tipoTarjeta = "Debes elegir entre Débito o Crédito";
    } else {
      this.mensaje_tipoTarjeta = "";
      valido++;
    }

    if (this.codSeg.toString.length < 3 || this.codSeg.toString.length > 3) {
      this.mensaje_codPostal = "Solo debes escribir los 3 numeros de tu codigo de seguridad";

    } else if (this.codSeg > 999 || this.codSeg < 0) {
      this.mensaje_codSeg = "Ingresa un codigo de seguridad válido";
    }

  }
}