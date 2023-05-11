import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvtemplateoneComponent } from './cvtemplateone.component';

describe('CvtemplateoneComponent', () => {
  let component: CvtemplateoneComponent;
  let fixture: ComponentFixture<CvtemplateoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvtemplateoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvtemplateoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
