import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvtemplatetwoComponent } from './cvtemplatetwo.component';

describe('CvtemplatetwoComponent', () => {
  let component: CvtemplatetwoComponent;
  let fixture: ComponentFixture<CvtemplatetwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvtemplatetwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvtemplatetwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
