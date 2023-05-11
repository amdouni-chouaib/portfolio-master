import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsmeoneComponent } from './skillsmeone.component';

describe('SkillsmeoneComponent', () => {
  let component: SkillsmeoneComponent;
  let fixture: ComponentFixture<SkillsmeoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsmeoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsmeoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
