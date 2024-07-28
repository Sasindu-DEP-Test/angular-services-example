import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {Customer} from "../customer.model";

@Injectable({
  providedIn: 'root'
})
export class ValueService {

  private customerList = new BehaviorSubject<Customer[]>([]);
  private selectedCustomerList = new BehaviorSubject<Customer[]>([]);

  addCustomer(customer: Customer | undefined, isSelectedList: boolean) {

    if (!isSelectedList) {
      const newCustomers = [...this.customerList.getValue(), customer];
      // @ts-ignore
      this.customerList.next(newCustomers);
    } else {
      const newCustomers = [...this.selectedCustomerList.getValue(), customer];
      // @ts-ignore
      this.selectedCustomerList.next(newCustomers);
    }

  }

  removeCustomer(customerId: string) {

    if (this.customerList.getValue().some(customer => customer.id === customerId)) {
      this.addCustomer(this.customerList.getValue().find(customer => customer.id == customerId), true)

      this.customerList.next(
        this.customerList.getValue().filter(customer => customer.id !== customerId)
      );
    } else {
      this.addCustomer(this.selectedCustomerList.getValue().find(customer => customer.id == customerId), false)

      this.selectedCustomerList.next(
        this.selectedCustomerList.getValue().filter(customer => customer.id !== customerId)
      );
    }
  }

  getCustomers(): Subject<Customer[]> {
    return this.customerList;
  }

  getSelectedCustomers(): Subject<Customer[]> {
    return this.selectedCustomerList;
  }

}
