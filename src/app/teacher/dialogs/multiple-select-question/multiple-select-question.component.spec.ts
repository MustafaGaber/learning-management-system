import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleSelectQuestionComponent } from './multiple-select-question.component';

describe('MultipleSelectQuestionComponent', () => {
  let component: MultipleSelectQuestionComponent;
  let fixture: ComponentFixture<MultipleSelectQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleSelectQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleSelectQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
