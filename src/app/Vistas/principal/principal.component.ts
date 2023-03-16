import { Component, OnInit } from '@angular/core';
import { KualiService } from '../../kuali.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})

export class PrincipalComponent implements OnInit {

  productos = null;
  filterSku = '';
  filterCar = '';

  imagenUrl = '';

  product = 'none';
  edit = 'none';

  producto = {
    product_id: 0,
    sku: 0,
    stock_quantity: 0,
    max_price: 0,
    post_title: '',
    term_taxonomy_id: 0
  };

  constructor(private kualiService: KualiService ){}

  ngOnInit() {
    this.mostrarTodos();
  }
  
  mostrarTodos() {
    this.kualiService.mostrarTodos().subscribe(
      (result:any) => this.productos = result
      );
  }

  seleccionar(codigo:number) {
    this.kualiService.seleccionar(codigo).subscribe(
      (result:any) => this.producto = result[0]
      );

    this.seleccionarFoto(codigo);    
  }

  activarP(){
    this.product = 'inline';
    this.edit = 'none';
  }

  activarE(){
    this.product = 'none';
    this.edit = 'inline';
  }

  hayRegistros() {
    if(this.productos == null) {
      return false;
    } else {
      return true;
    }
  }

  modificar() {
    this.kualiService.update(this.producto).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.mostrarTodos();
      }
    });    
  }

  agregarLista(sku:any, post_title:any) {
    this.kualiService.agregarLista(sku, post_title).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
      }
    });
  }

  seleccionarFoto(codigo:number) {
    this.kualiService.seleccionarFoto(codigo).subscribe(
      (result:any) => this.imagenUrl = result[0]
      );
  }
  
}
