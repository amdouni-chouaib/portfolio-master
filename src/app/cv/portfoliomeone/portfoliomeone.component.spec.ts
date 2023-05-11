import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfoliomeoneComponent } from './portfoliomeone.component';

describe('PortfoliomeoneComponent', () => {
  let component: PortfoliomeoneComponent;
  let fixture: ComponentFixture<PortfoliomeoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfoliomeoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfoliomeoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
