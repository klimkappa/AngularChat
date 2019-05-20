import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LeftBarChatsComponent } from './left-bar-chats.component';

describe('LeftBarChatsComponent', () => {
  let component: LeftBarChatsComponent;
  let fixture: ComponentFixture<LeftBarChatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LeftBarChatsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftBarChatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
