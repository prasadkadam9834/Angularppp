import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitcComponent } from './gitc.component';

describe('GitcComponent', () => {
  let component: GitcComponent;
  let fixture: ComponentFixture<GitcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GitcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
