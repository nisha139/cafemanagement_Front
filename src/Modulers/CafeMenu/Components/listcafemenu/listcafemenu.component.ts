import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AddMenuModalComponent } from '../add-menu-modal/add-menu-modal.component';
import { ViewMenuItemComponent } from '../view-menu-item/view-menu-item.component';

@Component({
  selector: 'app-listcafemenu',
  standalone: true,
  imports: [CommonModule,AddMenuModalComponent,ViewMenuItemComponent],
  templateUrl: './listcafemenu.component.html',
  styleUrl: './listcafemenu.component.scss',
})
export class ListCafeMenuComponent implements OnInit {
  menuItems: any[] = [];
  isModalOpen = false;
  isViewModalOpen = false;
  selectedMenuItem: any = null;
  selectedMenuItemId: string = '';
  apiUrl = 'http://localhost:5165/api/CafeMenu/GetAll';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchCafeMenu();
  }

  fetchCafeMenu(): void {
    this.http.get<any>(this.apiUrl).subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.menuItems = response.data;
        }
      },
      error: (error) => console.error('Error fetching menu:', error),
    });
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  openViewModal(item: any) {
    this.selectedMenuItemId = item.id;
    this.isViewModalOpen = true;
  }

  closeViewModal() {
    this.isViewModalOpen = false;
    this.selectedMenuItemId = '';
  }
  handleMenuUpdate() {
    this.fetchCafeMenu(); // Refresh menu list
    this.closeViewModal(); // Close modal after update
  }
}
