import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-menu-modal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-menu-modal.component.html',
  styleUrl: './add-menu-modal.component.scss'
})
export class AddMenuModalComponent {
  @Output() menuAdded = new EventEmitter<void>();
  @Output() close = new EventEmitter<void>();

  menuItem = { name: '', price: 0, description: '' };
  apiUrl = 'http://localhost:5165/api/CafeMenu';

  constructor(private http: HttpClient) {}

  saveMenuItem() {
    this.http.post(this.apiUrl, this.menuItem).subscribe({
      next: () => {
        this.menuAdded.emit(); 
        this.closeModal();
      },
      error: (error) => console.error('Error adding menu item:', error),
    });
  }

  closeModal() {
    this.close.emit(); 
  }
}
