import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KualiService {
  url = 'KualiPHP/';
  
  constructor(private http: HttpClient) { }

  mostrarTodos(){
    return this.http.get(`${this.url}mostrarTodos.php`);
  }

  seleccionar(product_id:number){
    return this.http.get(`${this.url}seleccionar.php?product_id=${product_id}`);
  }

  update(producto:any){
    return this.http.post(`${this.url}update.php`, JSON.stringify(producto));
  }

  mostrarLista(){
    return this.http.get(`${this.url}mostrarLista.php`);
  }

  quitarLista(producto:any){
    return this.http.get(`${this.url}quitarLista.php?id=${producto}`);
  }

  agregarLista(sku:any, post_title:any) {
    return this.http.get(`${this.url}agregarLista.php?sku=${sku}&post_title=${post_title}`);    
  }

  eliminarLista(){
    return this.http.get(`${this.url}eliminarLista.php?`);
  }

  seleccionarFoto(product_id:number){
    return this.http.get(`${this.url}seleccionarFoto.php?product_id=${product_id}`);
  }

}