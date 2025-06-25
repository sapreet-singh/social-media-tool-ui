import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'social-media-tool-ui';
  selectedPlatform: 'whatsapp' | 'instagram' | null = null;
  sidebarExpanded = true;

  constructor(private router: Router) {}

  selectPlatform(platform: 'whatsapp' | 'instagram') {
    this.selectedPlatform = platform;
    this.router.navigate([`/${platform}`]);
  }

  onSidebarToggle(expanded: boolean) {
    this.sidebarExpanded = expanded;
  }
}
