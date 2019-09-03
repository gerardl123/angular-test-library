import { TestBed } from '@angular/core/testing';

import { AngularGdlService } from './angular-gdl.service';

describe('AngularGdlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularGdlService = TestBed.get(AngularGdlService);
    expect(service).toBeTruthy();
  });
});
