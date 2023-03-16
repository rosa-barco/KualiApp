import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './Vistas/lista/lista.component';
import { PrincipalComponent } from './Vistas/principal/principal.component';

const appRoutes: Routes = [
    {path:'lista', component: ListaComponent},
    {path:'', component: PrincipalComponent}
];

export const routing = RouterModule.forRoot(appRoutes);

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {};