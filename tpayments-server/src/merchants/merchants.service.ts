import { Injectable } from '@nestjs/common';
import { IMerchant } from './interfaces/merchant.interface';
import { Merchants } from './merchants.data';

@Injectable()
export class MerchantsService {
    private readonly merchants: IMerchant[] = Merchants;

    get(id: string): IMerchant {
        return this.merchants.find(merchant => merchant.id === id);
    }

    getAll(): IMerchant[] {
        return this.merchants;
    }
}
