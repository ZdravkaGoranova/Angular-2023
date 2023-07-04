import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaineComponent } from './maine.component';

describe('MaineComponent', () => {
  let component: MaineComponent;
  let fixture: ComponentFixture<MaineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaineComponent]
    });
    fixture = TestBed.createComponent(MaineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
