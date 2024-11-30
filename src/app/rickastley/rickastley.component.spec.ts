import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RickastleyComponent } from './rickastley.component';

describe('RickastleyComponent', () => {
  let component: RickastleyComponent;
  let fixture: ComponentFixture<RickastleyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RickastleyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RickastleyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
