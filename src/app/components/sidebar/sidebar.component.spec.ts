import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { SidebarComponent } from './sidebar.component';
import { PLATFORM_ID } from '@angular/core';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [SidebarComponent],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: PLATFORM_ID, useValue: 'browser' }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    mockRouter = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle sidebar state', () => {
    spyOn(component.sidebarToggle, 'emit');

    const initialState = component.isCollapsed;
    component.toggleSidebar();

    expect(component.isCollapsed).toBe(!initialState);
    expect(component.sidebarToggle.emit).toHaveBeenCalledWith(!component.isCollapsed);
  });

  it('should handle responsive behavior', () => {
    expect(component.isMobile).toBeDefined();
    expect(component.isCollapsed).toBeDefined();
  });
});
