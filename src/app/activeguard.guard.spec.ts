import { TestBed } from '@angular/core/testing';

import { ActiveguardGuard } from './activeguard.guard';

describe('ActiveguardGuard', () => {
  let guard: ActiveguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ActiveguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
