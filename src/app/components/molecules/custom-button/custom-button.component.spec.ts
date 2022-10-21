import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomButtonComponent } from './custom-button.component';

describe('CustomButtonComponent', () => {
  let component: CustomButtonComponent;
  let fixture: ComponentFixture<CustomButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be click', () => {
    jest.spyOn(component.btnClick, 'emit');
    const element = fixture.nativeElement;
    const button = element.querySelector('.jg__button');
    const eventType = button.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(component.btnClick.emit).toHaveBeenCalled();
  });
});

// define an event
// when the button dispatch the click event the
// 'save()' method of the component will be called
