import { IMerchant } from './interfaces/merchant.interface';
export declare class MerchantsService {
    private readonly merchants;
    get(id: string): IMerchant;
    getAll(): IMerchant[];
}
