import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactmetwoComponent } from './contactmetwo.component';

describe('ContactmetwoComponent', () => {
  let component: ContactmetwoComponent;
  let fixture: ComponentFixture<ContactmetwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactmetwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactmetwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
