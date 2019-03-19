import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftBarContactsComponent } from './left-bar-contacts.component';

describe('LeftBarContactsComponent', () => {
  let component: LeftBarContactsComponent;
  let fixture: ComponentFixture<LeftBarContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftBarContactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftBarContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
