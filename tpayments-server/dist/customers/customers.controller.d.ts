import { ICustomer } from './interfaces/customer.interface';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
export declare class CustomersController {
    private customerService;
    constructor(customerService: CustomersService);
    getCustomer(id: string): ICustomer;
    getAllCustomers(): ICustomer[];
    createNewCustomer(createCustomerDto: CreateCustomerDto): ICustomer;
}
