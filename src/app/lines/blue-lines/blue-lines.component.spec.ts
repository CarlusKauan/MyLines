import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueLinesComponent } from './blue-lines.component';

describe('BlueLinesComponent', () => {
  let component: BlueLinesComponent;
  let fixture: ComponentFixture<BlueLinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlueLinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlueLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
