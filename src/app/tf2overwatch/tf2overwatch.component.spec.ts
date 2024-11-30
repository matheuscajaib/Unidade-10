import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tf2overwatchComponent } from './tf2overwatch.component';

describe('Tf2overwatchComponent', () => {
  let component: Tf2overwatchComponent;
  let fixture: ComponentFixture<Tf2overwatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tf2overwatchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tf2overwatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
