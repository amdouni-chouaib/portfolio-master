import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationmeoneComponent } from './educationmeone.component';

describe('EducationmeoneComponent', () => {
  let component: EducationmeoneComponent;
  let fixture: ComponentFixture<EducationmeoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationmeoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationmeoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
