import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YellowLinesComponent } from './yellow-lines.component';

describe('YellowLinesComponent', () => {
  let component: YellowLinesComponent;
  let fixture: ComponentFixture<YellowLinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YellowLinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YellowLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
