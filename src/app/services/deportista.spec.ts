import { TestBed } from '@angular/core/testing';

import { Deportista } from './deportista';

describe('Deportistas', () => {
  let service: Deportista;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Deportista);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
