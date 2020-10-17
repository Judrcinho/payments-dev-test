import { ICustomer } from './interfaces/customer.interface';
export declare class CustomersService {
    private readonly customers;
    get(id: string): ICustomer;
    getAll(): ICustomer[];
    createCustomer(name: string, merchantId: string): ICustomer;
}
