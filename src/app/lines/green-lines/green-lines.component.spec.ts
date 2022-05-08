import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenLinesComponent } from './green-lines.component';

describe('GreenLinesComponent', () => {
  let component: GreenLinesComponent;
  let fixture: ComponentFixture<GreenLinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreenLinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
