import { TestBed } from '@angular/core/testing';

import { PokemonsService } from './pokemons.service';

describe('PokemonsServiceService', () => {
  let service: PokemonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
