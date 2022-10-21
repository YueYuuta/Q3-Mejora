import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalService } from '../../services/modal.service';

import { ModalComponent } from './modal.component';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;
  let modalService: ModalService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalComponent],
    }).compileComponents();
    modalService = TestBed.inject(ModalService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be close', () => {
    const spy = jest.spyOn(modalService, 'close');
    component.close();
    expect(spy).toHaveBeenCalled();
  });
});
