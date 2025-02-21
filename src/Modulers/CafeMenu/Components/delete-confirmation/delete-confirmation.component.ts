import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-delete-confirmation',
  standalone: true,
  imports: [],
  templateUrl: './delete-confirmation.component.html',
  styleUrl: './delete-confirmation.component.scss',
})
export class DeleteConfirmationComponent {
  @Input() itemId: string = '';
  @Output() confirm = new EventEmitter<string>();
  @Output() close = new EventEmitter<void>();

  confirmDelete() {
    this.confirm.emit(this.itemId);
  }
}
