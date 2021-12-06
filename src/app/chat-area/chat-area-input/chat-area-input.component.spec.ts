import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatAreaInputComponent } from './chat-area-input.component';

describe('ChatAreaInputComponent', () => {
  let component: ChatAreaInputComponent;
  let fixture: ComponentFixture<ChatAreaInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatAreaInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatAreaInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
