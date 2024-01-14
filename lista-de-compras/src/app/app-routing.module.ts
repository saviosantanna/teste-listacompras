import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItensListaComponent } from './componentes/itens-lista/itens-lista.component';
import { NovoItemComponent } from './componentes/novo-item/novo-item.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'listarItens',
    component: ItensListaComponent
  },
  {
    path: 'adicionarItem',
    component: NovoItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
