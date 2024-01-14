import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ItensService } from '../itens.service';
import { Item } from './../item';


@Component({
  selector: 'app-novo-item',
  templateUrl: './novo-item.component.html',
  styleUrls: ['./novo-item.component.css']
})
export class NovoItemComponent implements OnInit {

  formulario!: FormGroup;

  @Input() Item: Item[] = []
  @Output() evento: EventEmitter<boolean> = new EventEmitter()
  edicao: boolean = false;

  constructor(
    private service: ItensService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.limpar()
  }

  criarItem(){
    this.service.criar(this.formulario.value).subscribe(() => {
      this.evento.emit(true);
      this.limpar()
    })
  }

  limpar(){
    this.formulario = this.formBuilder.group({
      descricao: [''],
      qtd: [],
      und: [''],
      check: false
    })
  }

  editar(item: Item){
    this.formulario = this.formBuilder.group({
      descricao: [item.descricao],
      qtd: [item.qtd],
      und: [item.und],
      check: [item.check],
      id: [item.id]
    })
    this.edicao = !this.edicao
  }

  editarItem(){
    this.service.editar(this.formulario.value).subscribe(() => {
      this.evento.emit(true);
      this.limpar()
    })
    this.edicao = !this.edicao
  }

  cancelar(){
    this.limpar()
    this.edicao = !this.edicao
  }
}
