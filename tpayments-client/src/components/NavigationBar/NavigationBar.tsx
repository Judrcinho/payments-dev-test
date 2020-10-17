import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../common/assets/till_logo.jpg';
import './NavigationBar.scss';

enum ActiveItemType {
    Customers = "customers",
    Merchants = "merchants"
}

export const NavigationBar: React.FC = () => {
    const [activePage, setActivePage] = React.useState<ActiveItemType>(ActiveItemType.Customers);
    const [activeMenu, setActiveMenu] = React.useState<ActiveItemType>(ActiveItemType.Customers);

    const setActiveClass = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        let isCustomersMenuHovered = (event.target as HTMLAnchorElement).classList.contains(ActiveItemType.Customers);

        if (isCustomersMenuHovered) {
            setActiveMenu(ActiveItemType.Customers);
        } else {
            setActiveMenu(ActiveItemType.Merchants);
        }        
    }

    return <div className="navigationBar">
        <div className="navigationBar__logo">
            <img src={Logo} className="navigationBar__logo_image" />
            <h1 className="navigationBar__logo_text">PAYMENTS</h1>
        </div>
        <div className="navigationBar__links">
            <Link 
                to="/"
                className={`navigationBar__links customers active_${activeMenu === ActiveItemType.Customers}`}
                onMouseOver={setActiveClass}
                onMouseOut={() => setActiveMenu(activePage)}
                onClick={() => setActivePage(ActiveItemType.Customers)}
            >
                Customers
            </Link>
            <Link 
                to="/merchants"
                className={`navigationBar__links merchants active_${activeMenu === ActiveItemType.Merchants}`}
                onMouseOver={setActiveClass}
                onMouseOut={() => setActiveMenu(activePage)}
                onClick={() => setActivePage(ActiveItemType.Merchants)}
            >
                Merchants
            </Link>
        </div>
    </div>
}