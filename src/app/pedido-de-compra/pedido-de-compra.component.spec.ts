import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoDeCompraComponent } from './pedido-de-compra.component';

describe('PedidoDeCompraComponent', () => {
  let component: PedidoDeCompraComponent;
  let fixture: ComponentFixture<PedidoDeCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PedidoDeCompraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedidoDeCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
