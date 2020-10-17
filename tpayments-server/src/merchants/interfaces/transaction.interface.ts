export interface ITransaction {
    id: string,
    amount: number,
    description: string,
    ccLastFour: string,
    ccToken: string,
    ccExpiry: string,
    customerId: string,
    date: string
}