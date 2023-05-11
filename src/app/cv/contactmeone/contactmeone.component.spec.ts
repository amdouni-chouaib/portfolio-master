import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactmeoneComponent } from './contactmeone.component';

describe('ContactmeoneComponent', () => {
  let component: ContactmeoneComponent;
  let fixture: ComponentFixture<ContactmeoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactmeoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactmeoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
