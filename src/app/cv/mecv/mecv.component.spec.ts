import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MecvComponent } from './mecv.component';

describe('MecvComponent', () => {
  let component: MecvComponent;
  let fixture: ComponentFixture<MecvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MecvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MecvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
