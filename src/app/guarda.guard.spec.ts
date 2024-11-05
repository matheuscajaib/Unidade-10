import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { guarda } from './guarda.guard';

describe('guarda', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => guarda(...guardParameters));
  
  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
