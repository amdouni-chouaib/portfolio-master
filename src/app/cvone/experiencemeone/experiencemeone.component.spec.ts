import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencemeoneComponent } from './experiencemeone.component';

describe('ExperiencemeoneComponent', () => {
  let component: ExperiencemeoneComponent;
  let fixture: ComponentFixture<ExperiencemeoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperiencemeoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperiencemeoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
