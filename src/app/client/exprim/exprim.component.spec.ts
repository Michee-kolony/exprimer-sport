import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExprimComponent } from './exprim.component';

describe('ExprimComponent', () => {
  let component: ExprimComponent;
  let fixture: ComponentFixture<ExprimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExprimComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExprimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
