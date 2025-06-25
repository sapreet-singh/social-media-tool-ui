import { Component, Output, EventEmitter, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @Output() sidebarToggle = new EventEmitter<boolean>();

  isCollapsed = false;
  isMobile = false;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    this.checkScreenSize();
  }

  @HostListener('window:resize')
  onResize() {
    if (this.isBrowser) {
      this.checkScreenSize();
    }
  }

  private checkScreenSize() {
    if (this.isBrowser && typeof window !== 'undefined') {
      this.isMobile = window.innerWidth <= 768;
      if (this.isMobile) {
        this.isCollapsed = true;
      } else {
        this.isCollapsed = false;
      }
    } else {
      // Default values for SSR
      this.isMobile = false;
      this.isCollapsed = false;
    }
    this.emitSidebarState();
  }

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
    this.emitSidebarState();
  }

  private emitSidebarState() {
    this.sidebarToggle.emit(!this.isCollapsed);
  }
}
