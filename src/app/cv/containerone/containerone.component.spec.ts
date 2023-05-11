import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaineroneComponent } from './containerone.component';

describe('ContaineroneComponent', () => {
  let component: ContaineroneComponent;
  let fixture: ComponentFixture<ContaineroneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContaineroneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContaineroneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
