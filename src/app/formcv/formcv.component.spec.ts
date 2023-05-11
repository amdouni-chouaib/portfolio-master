import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcvComponent } from './formcv.component';

describe('FormcvComponent', () => {
  let component: FormcvComponent;
  let fixture: ComponentFixture<FormcvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormcvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormcvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
