import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormComponent} from "./form/form.component";
import {CustomerListComponent} from "./customer-list/customer-list.component";
import {SelectedCustomerListComponent} from "./selected-customer-list/selected-customer-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormComponent, CustomerListComponent, SelectedCustomerListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'customer-list';
}
