import {Component, inject} from '@angular/core';
import {CustomerComponent} from "../customer/customer.component";
import {NgForOf} from "@angular/common";
import {Customer} from "../customer.model";
import {ValueService} from "../service/value.service";

@Component({
  selector: 'app-selected-customer-list',
  standalone: true,
  imports: [
    CustomerComponent,
    NgForOf
  ],
  templateUrl: './selected-customer-list.component.html',
  styleUrl: './selected-customer-list.component.css'
})
export class SelectedCustomerListComponent {

  customers: Customer[] = [{id:"C001",name:"Kasun Sampath"},{id:"C001",name:"Kasun Sampath"}];

  valueService = inject(ValueService);

  constructor() {
    this.valueService.getSelectedCustomers().subscribe(
      customers => this.customers = customers
    )
  }

}
