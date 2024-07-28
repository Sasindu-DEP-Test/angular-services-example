import {Component, inject, Input} from '@angular/core';
import {Customer} from "../customer.model";
import {FormsModule} from "@angular/forms";
import {ValueService} from "../service/value.service";

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {

  @Input() customer?: Customer;

  valueService = inject(ValueService);

  removeCustomer(id: string) {
    this.valueService.removeCustomer(id);
  }
}
