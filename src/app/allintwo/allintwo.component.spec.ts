import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllintwoComponent } from './allintwo.component';

describe('AllintwoComponent', () => {
  let component: AllintwoComponent;
  let fixture: ComponentFixture<AllintwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllintwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllintwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
