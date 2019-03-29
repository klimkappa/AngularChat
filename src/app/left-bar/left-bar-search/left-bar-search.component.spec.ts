import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftBarSearchComponent } from './left-bar-search.component';

describe('LeftBarSearchComponent', () => {
  let component: LeftBarSearchComponent;
  let fixture: ComponentFixture<LeftBarSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LeftBarSearchComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftBarSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
