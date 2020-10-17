import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { CustomersContainer } from '../CustomersContainer/CustomersContainer';
import { MerchantsContainer } from '../MerchantsContainer/MerchantsContainer';
import { NavigationBar } from '../../components/NavigationBar/NavigationBar';
import 'antd/dist/antd.css'
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <NavigationBar />
      <Switch>
        <Route path="/" component={CustomersContainer} exact />
        <Route path="/merchants" component={MerchantsContainer} />
      </Switch>
    </div>
  );
}

export default App;
