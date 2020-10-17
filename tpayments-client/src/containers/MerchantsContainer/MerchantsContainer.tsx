import React, { useEffect } from 'react';
import { Select } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { getMerchants } from '../../common/utils/dataProvider';
import { getCurrencyFormatted } from '../../common/utils/currencyConvertor';
import Loading from '../../common/assets/loading.gif';
import './MerchantsContainer.scss';

export const MerchantsContainer: React.FC = () => {
    const [merchantsData, updateMerchantsData] = React.useState<any>([]);
    const [currentActiveMerchant, changeActiveMerchant] = React.useState<any>();

    async function getMerhantsData() {
        let merchantsData = await getMerchants();
        changeActiveMerchant(merchantsData[0]);
        updateMerchantsData(merchantsData);
    }

    function onChange(value: string) {
        let newActiveMerchant = merchantsData.find((merchant:any) => merchant.id === value);
        changeActiveMerchant(newActiveMerchant);
    }

    useEffect(() => {
        getMerhantsData()
    }, [])



return <div className="merchantsContainer">
    { merchantsData.length !== 0 ?
    <div className="merchantsContainer__inner">
        <Select
            style={{width: 250}}
            defaultValue={merchantsData[0].name}
            placeholder="Select a merchant"
            className="merchantsContainer__select"
            onChange={onChange}
            >
            {merchantsData.map((merchant: any) =>   <Select.Option 
                                                        value={merchant.id} 
                                                        key={merchant.id}
                                                    >
                                                            {merchant.name}
                                                    </Select.Option>)}
        </Select>
        <h2 className="merchantsContainer__inner_header">List of transactions:</h2>
        <br />
        {merchantsData
            .find((merchant: any) => merchant.id === currentActiveMerchant.id)
            .transactions
                .map((transaction:any) => 
                    <div className="merchantsContainer__transaction" key={transaction.id}>
                        <h4 className="merchantsContainer__transaction_description">{transaction.description}</h4>
                        <h4 className="merchantsContainer__transaction_amount">{getCurrencyFormatted(transaction.amount, currentActiveMerchant.currency)}</h4>
                    </div>)}
    </div>
    : 
    <img className="loadingGif" src={Loading}/>}
</div>
}