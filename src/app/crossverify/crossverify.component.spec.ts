import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossverifyComponent } from './crossverify.component';

describe('CrossverifyComponent', () => {
  let component: CrossverifyComponent;
  let fixture: ComponentFixture<CrossverifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrossverifyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrossverifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
