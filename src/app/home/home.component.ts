import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoPageModule, PoWidgetModule } from '@po-ui/ng-components';
import { PoTableModule } from '@po-ui/ng-components';
import { PoModalModule } from '@po-ui/ng-components';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, PoWidgetModule, PoTableModule, PoModalModule, PoPageModule],
  templateUrl: './home.component.html'
})
export class HomeComponent {
columns: any;;
}