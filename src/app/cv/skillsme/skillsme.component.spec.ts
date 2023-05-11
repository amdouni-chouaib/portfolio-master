import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsmeComponent } from './skillsme.component';

describe('SkillsmeComponent', () => {
  let component: SkillsmeComponent;
  let fixture: ComponentFixture<SkillsmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsmeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
