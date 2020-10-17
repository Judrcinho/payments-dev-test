import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { ICustomer } from './interfaces/customer.interface';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Controller('customers')
export class CustomersController {
    constructor(private customerService: CustomersService) {}

    @Get(':id')
    getCustomer(@Param('id') id: string): ICustomer {
        return this.customerService.get(id);
    }

    @Get()
    getAllCustomers(): ICustomer[] {
        return this.customerService.getAll();
    }

    @Post()
    createNewCustomer(@Body() createCustomerDto: CreateCustomerDto): ICustomer {
        console.log("the data is");
        console.log(createCustomerDto);
        return this.customerService.createCustomer(createCustomerDto.name, createCustomerDto.merchantId);
    }

}
