import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ItensService } from '../itens.service';
import { Item } from '../item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item = {
    id: 0,
    descricao: '',
    qtd: 1,
    und: '',
    check: false
  }

  @Output() excluir: EventEmitter<boolean> = new EventEmitter();
  @Output() edicao: EventEmitter<boolean> = new EventEmitter();
  @Output() verificar: EventEmitter<boolean> = new EventEmitter();

  constructor(private service: ItensService) { }

  ngOnInit(): void {
  }

  clickCheck(){
    this.service.editarCheck(this.item).subscribe();
    this.verificar.emit(true);
  }

  excluirItem(){
    this.service.excluir(this.item).subscribe(() => {
      this.excluir.emit(true);
    });
  }

  editarItem(item: Item){
    this.edicao.emit(true);
  }
}
