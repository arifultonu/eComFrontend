import { TestBed } from '@angular/core/testing';

import { OrderReceivedService } from './order-received.service';

describe('OrderReceivedService', () => {
  let service: OrderReceivedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderReceivedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
