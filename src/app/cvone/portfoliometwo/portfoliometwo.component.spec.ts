import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfoliometwoComponent } from './portfoliometwo.component';

describe('PortfoliometwoComponent', () => {
  let component: PortfoliometwoComponent;
  let fixture: ComponentFixture<PortfoliometwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfoliometwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfoliometwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
