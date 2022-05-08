import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedLinesComponent } from './red-lines.component';

describe('RedLinesComponent', () => {
  let component: RedLinesComponent;
  let fixture: ComponentFixture<RedLinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedLinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
