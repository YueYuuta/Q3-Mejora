import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IReadPlayerModel } from '../../models/read-player.model';
import { CustomButtonComponent } from '../molecules/custom-button/custom-button.component';

import { CardComponent } from './card.component';

const mockPlayer: IReadPlayerModel = {
  attack: 10,
  defense: 10,
  firstName: 'leo',
  id: 1,
  idAuthor: 1,
  idPosition: 1,
  image: 'dasdas',
  lastName: 'messi',
  skills: 100,
};

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardComponent, CustomButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should be click edit', () => {
    jest.spyOn(component.clickEdit, 'emit');
    component.onClickButtonEdit(mockPlayer);

    expect(component.clickEdit.emit).toHaveBeenCalled();
  });

  it('should be click delete', () => {
    jest.spyOn(component.clickDelete, 'emit');
    component.onClickButtonDelete(1);

    expect(component.clickDelete.emit).toHaveBeenCalled();
  });
});
