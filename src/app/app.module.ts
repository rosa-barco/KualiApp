import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PrincipalComponent } from './Vistas/principal/principal.component';
import { ListaComponent } from './Vistas/lista/lista.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule, routing } from './app-routing.module';
import { SkuFilterPipe } from './Pipes/sku-filter.pipe';
import { CatFilterPipe } from './Pipes/cat-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    ListaComponent,
    MenuComponent,
    SkuFilterPipe,
    CatFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
