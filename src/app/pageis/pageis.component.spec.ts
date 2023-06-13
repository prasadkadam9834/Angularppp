import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageisComponent } from './pageis.component';

describe('PageisComponent', () => {
  let component: PageisComponent;
  let fixture: ComponentFixture<PageisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
