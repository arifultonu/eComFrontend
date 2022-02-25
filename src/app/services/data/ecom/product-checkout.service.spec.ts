import { TestBed } from '@angular/core/testing';

import { ProductCheckoutService } from './product-checkout.service';

describe('ProductCheckoutService', () => {
  let service: ProductCheckoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductCheckoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
