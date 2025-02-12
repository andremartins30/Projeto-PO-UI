import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentoFiscalEntradaComponent } from './documento-fiscal-entrada.component';

describe('DocumentoFiscalEntradaComponent', () => {
  let component: DocumentoFiscalEntradaComponent;
  let fixture: ComponentFixture<DocumentoFiscalEntradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentoFiscalEntradaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentoFiscalEntradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
