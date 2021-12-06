import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatAreaWindowComponent } from './chat-area-window.component';

describe('ChatAreaWindowComponent', () => {
  let component: ChatAreaWindowComponent;
  let fixture: ComponentFixture<ChatAreaWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatAreaWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatAreaWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
