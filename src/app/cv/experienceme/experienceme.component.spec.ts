import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencemeComponent } from './experienceme.component';

describe('ExperiencemeComponent', () => {
  let component: ExperiencemeComponent;
  let fixture: ComponentFixture<ExperiencemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperiencemeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperiencemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
