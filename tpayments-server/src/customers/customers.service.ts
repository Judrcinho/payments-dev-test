import { Injectable } from '@nestjs/common';
import { ICustomer } from './interfaces/customer.interface';
import { Customers } from './customers.data';

@Injectable()
export class CustomersService {
    private readonly customers: ICustomer[] = Customers;

    get(id: string): ICustomer {
        return this.customers.find(customer => customer.id === id);
    }

    getAll(): ICustomer[] {
        return this.customers;
    }

    createCustomer(name: string, merchantId: string): ICustomer {
        let newCustomerId = Math.max(...this.customers.map(customer => parseInt(customer.id))) + 1;

        let newCustomer: ICustomer = {
            id: newCustomerId.toString(),
            name: name,
            merchantId: merchantId
        }

        this.customers.push(newCustomer);

        return newCustomer;
    }
}
