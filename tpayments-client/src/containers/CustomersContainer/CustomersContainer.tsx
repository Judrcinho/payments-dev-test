import React, { useEffect } from 'react';
import { Collapse } from 'antd';
import { getCustomers, getMerchant } from '../../common/utils/dataProvider';
import { getCurrencyFormatted } from '../../common/utils/currencyConvertor';
import Loading from '../../common/assets/loading.gif';
import './CustomersContainer.scss';

export const CustomersContainer: React.FC = () => {
    const [customersData, updateCustomersDataList] = React.useState<any>([]);

    async function getCustomersData() {
        const customers = await getCustomers();
        let customersData = [];

        for (let customer of customers) {
            let merchant = await getMerchant(customer.merchantId);

            customersData.push( 
                {
                    customerName: customer.name,
                    merchantName: merchant.name,
                    currency: merchant.currency,
                    transactions: merchant.transactions
                                                .filter((transaction: any) => transaction.customerId === customer.id)
                                                .map((transaction: any) => ({
                                                    description: transaction.description,
                                                    amount: transaction.amount}))
            })
        }

        updateCustomersDataList(customersData)
    }

    useEffect(() => {
        getCustomersData();
    },[]);

return <div className="customersContainer">
        { customersData.length !== 0 ?
            <Collapse accordion defaultActiveKey={['0']}>
                {customersData.map((customer: any, index: number) => 
                    <Collapse.Panel 
                        key={index} 
                        header={customer.customerName}
                    >
                        <h3>Merchant: {customer.merchantName}</h3>
                        <br />
                        {customer.transactions.map((transaction:any) => <div className="customersContainer__transaction" key={transaction.description}>
                            <h4 className="customersContainer__transaction_description">{transaction.description}</h4>
                            <h4 className="customersContainer__transaction_amount">{getCurrencyFormatted(transaction.amount, customer.currency)}</h4>
                        </div>)}
                        <br/><br/>
                        <div className="customersContainer__transaction">
                            <h3 className="customersContainer__transaction_description">Total:</h3>
                            <h3 className="customersContainer__transaction_amount">
                                {getCurrencyFormatted(customer.transactions.reduce((reducer: number, transaction: any) => reducer + transaction.amount, 0), customer.currency)}
                            </h3>
                        </div>
                    </Collapse.Panel>)}
            </Collapse> : 
            <img className="loadingGif" src={Loading}/>}
        </div>
}