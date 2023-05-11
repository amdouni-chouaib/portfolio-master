import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MecvoneComponent } from './mecvone.component';

describe('MecvoneComponent', () => {
  let component: MecvoneComponent;
  let fixture: ComponentFixture<MecvoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MecvoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MecvoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
