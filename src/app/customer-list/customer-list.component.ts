import {Component, effect, inject} from '@angular/core';
import {CustomerComponent} from "../customer/customer.component";
import {Customer} from "../customer.model";
import {ValueService} from "../service/value.service";
import {NgForOf} from "@angular/common";
import {Subject} from "rxjs";

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [
    CustomerComponent,
    NgForOf
  ],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent {

 customers: Customer[] = [{id:"C001",name:"Kasun Sampath"},{id:"C001",name:"Kasun Sampath"}];

  valueService = inject(ValueService);

  constructor() {
    this.valueService.getCustomers().subscribe(
      customers => this.customers = customers
    )
  }

}
