import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutmeoneComponent } from './aboutmeone.component';

describe('AboutmeoneComponent', () => {
  let component: AboutmeoneComponent;
  let fixture: ComponentFixture<AboutmeoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutmeoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutmeoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
