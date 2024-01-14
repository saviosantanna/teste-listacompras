import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { ItemComponent } from './componentes/item/item.component';
import { ItensListaComponent } from './componentes/itens-lista/itens-lista.component';
import { NovoItemComponent } from './componentes/novo-item/novo-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    FooterComponent,
    ItensListaComponent,
    ItemComponent,
    NovoItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
