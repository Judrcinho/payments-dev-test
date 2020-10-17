import { IMerchant } from './interfaces/merchant.interface';
import { MerchantsService } from './merchants.service';
export declare class MerchantsController {
    private merchantService;
    constructor(merchantService: MerchantsService);
    getMerchant(id: string): IMerchant;
    getAllMerchants(): IMerchant[];
}
