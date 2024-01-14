import { NovoItemComponent } from './../novo-item/novo-item.component';
import {
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { ItensService } from '../itens.service';
import { Item } from './../item';

@Component({
  selector: 'app-itens-lista',
  templateUrl: './itens-lista.component.html',
  styleUrls: ['./itens-lista.component.css'],
})
export class ItensListaComponent implements OnInit {
  listaItens: Item[] = [];
  listados: boolean = false; //alterar para false
  comprados: boolean = false; //alterar para false
  //@Output() comprados: EventEmitter<boolean> = new EventEmitter()
  existe: boolean = true;
  numItens: number = 0;

  constructor(private service: ItensService) {}

  ngOnInit(): void {
    this.service.listar().subscribe((itens: Item[]) => {
      this.listaItens = itens;
      this.verificar();
    });
  }

  verificar() {
    this.existe = true;
    this.comprados = false;
    this.atualiza();
    this.listaItens.forEach((e) => {
      if (this.existe && e.check) {
        this.existe = false;
        this.comprados = true;
        this.atualiza();
      }
    });
    this.existe = true;
    this.listados = false;
    this.listaItens.forEach((e) => {
      if (this.existe && !e.check) {
        this.existe = false;
        this.listados = true;
        this.atualiza();
      }
    });
    console.log('verificacao realizada')
  }

  atualiza() {
    this.service.listar().subscribe((itens: Item[]) => {
      this.listaItens = itens;
    });
  }
}
