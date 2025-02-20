import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListCafeMenuComponent } from '../Modulers/CafeMenu/Components/listcafemenu/listcafemenu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ListCafeMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cafemanagement';
}
