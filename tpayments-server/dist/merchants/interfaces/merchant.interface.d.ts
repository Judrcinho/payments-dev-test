import { ITransaction } from './transaction.interface';
export interface IMerchant {
    id: string;
    name: string;
    isTrading: boolean;
    currency: string;
    transactions: ITransaction[];
}
