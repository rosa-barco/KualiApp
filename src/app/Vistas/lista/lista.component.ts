import { Component } from '@angular/core';
import { KualiService } from 'src/app/kuali.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  listas = null;

  lista = {
    id: 0,
    sku: '',
    nombre: ''
  };

  constructor(private kualiService: KualiService){}

  ngOnInit(){
    this.mostrarLista();
  }

  mostrarLista() {
    this.kualiService.mostrarLista().subscribe(
      (result:any) => this.listas = result
      );
  }

  quitarLista(codigo:number) {
    this.kualiService.quitarLista(codigo).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.mostrarLista();
      }
    });
  }

  eliminarLista() {
    this.kualiService.eliminarLista().subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.mostrarLista();
      }
    });
  }

  hayRegistros() {
    if(this.listas == null) {
      return false;
    } else {
      return true;
    }
  }
}
