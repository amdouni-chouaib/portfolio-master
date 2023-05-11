import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationmeComponent } from './educationme.component';

describe('EducationmeComponent', () => {
  let component: EducationmeComponent;
  let fixture: ComponentFixture<EducationmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationmeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
