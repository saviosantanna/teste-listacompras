import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItensListaComponent } from './itens-lista.component';

describe('ItensListaComponent', () => {
  let component: ItensListaComponent;
  let fixture: ComponentFixture<ItensListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItensListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItensListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
