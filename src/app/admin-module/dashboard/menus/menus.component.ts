import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menus',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menus.component.html',
  styleUrl: './menus.component.scss'
})
export class MenusComponent {
  menuCollapsed: boolean = false;
  toggleMenu() {
    this.menuCollapsed = !this.menuCollapsed;
  }
}
