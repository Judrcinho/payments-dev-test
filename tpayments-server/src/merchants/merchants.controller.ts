import { Controller, Get, Param } from '@nestjs/common';
import { IMerchant } from './interfaces/merchant.interface';
import { MerchantsService } from './merchants.service';

@Controller('merchants')
export class MerchantsController {
    constructor(private merchantService: MerchantsService){}

    @Get(':id')
    getMerchant(@Param('id') id: string): IMerchant {
        return this.merchantService.get(id);
    } 

    @Get()
    getAllMerchants(): IMerchant[] {
        return this.merchantService.getAll();
    }
}
