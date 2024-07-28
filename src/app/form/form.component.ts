import { Component } from '@angular/core';
import {ValueService} from "../service/value.service";
import {Customer} from "../customer.model";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  id: string = "C001";
  name: string = "Kasun Sampath";

  constructor(private customerService: ValueService) {}

  addCustomer() {
    const customer: Customer = { id: this.id, name: this.name };
    console.log(customer);
    this.customerService.addCustomer(customer, false);
    // // Clear form fields (optional)
    // this.id = 0;
    // this.name = '';
  }

  updateID(value: string) {
    this.id = value;
  }

  updateName(value: string) {
    this.name=value;
  }
}
