import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-menu-item',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './view-menu-item.component.html',
  styleUrl: './view-menu-item.component.scss',
})
export class ViewMenuItemComponent {
  @Input() menuItemId: string = '';
  @Output() close = new EventEmitter<void>();
  @Output() menuUpdated = new EventEmitter<void>(); // Emit event when updated
  menuItem: any = null;

  constructor(private http: HttpClient) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['menuItemId'] && this.menuItemId) {
      this.fetchMenuItem();
    }
  }

  fetchMenuItem() {
    this.http
      .get(`http://localhost:5165/api/CafeMenu/GetById/${this.menuItemId}`)
      .subscribe((response: any) => {
        this.menuItem = response.data;
      });
  }

  updateMenuItem() {
    this.http
      .put(
        `http://localhost:5165/api/CafeMenu/${this.menuItem.id}`,
        this.menuItem
      )
      .subscribe(() => {
        alert('Menu item updated successfully!');
        this.menuUpdated.emit(); // Notify parent component
        this.closeModal(); // Close modal after update
      });
  }

  closeModal() {
    this.close.emit(); // Emit event to close modal
  }
}
