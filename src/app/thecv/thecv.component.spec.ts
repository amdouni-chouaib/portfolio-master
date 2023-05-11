import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThecvComponent } from './thecv.component';

describe('ThecvComponent', () => {
  let component: ThecvComponent;
  let fixture: ComponentFixture<ThecvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThecvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThecvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
