import { TestBed } from '@angular/core/testing';

import { ModalService } from './modal.service';

describe('ModalService', () => {
  let service: ModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should be close', (done) => {
    service.close();
    service.watch().subscribe((data) => {
      expect(data).toEqual('close');
      done();
    });
  });

  it('should be open', (done) => {
    service.open();
    service.watch().subscribe((data) => {
      expect(data).toEqual('open');
      done();
    });
  });
});
