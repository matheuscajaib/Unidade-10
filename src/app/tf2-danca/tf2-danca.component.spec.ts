import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tf2DancaComponent } from './tf2-danca.component';

describe('Tf2DancaComponent', () => {
  let component: Tf2DancaComponent;
  let fixture: ComponentFixture<Tf2DancaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tf2DancaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tf2DancaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
