import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramChatWindowComponent } from './chat-window.component';

describe('InstagramChatWindowComponent', () => {
  let component: InstagramChatWindowComponent;
  let fixture: ComponentFixture<InstagramChatWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstagramChatWindowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstagramChatWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
