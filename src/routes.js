import React from 'react';
import HomePage from './pages/HomePage/HomePage'
import NotFoundPage from './pages/NotFound/NotFound'
import ProductListPage from './pages/ProductListPage/ProductListPage';
import ProductActionPage from './pages/ProductActionPage/ProductActionPage';
import OrderListPage from './components/Order/OrderListPage';
import OrdersCalendarView from './components/Order/OrdersCalendarView'; // Import the OrdersCalendarView component

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/product-list',
        exact: false,
        main: () => <ProductListPage />
    },
    {
        path: '/product/add',
        exact: false,
        main: ({history}) => <ProductActionPage history={history}/>
    },
    {
        path: '/product/:id/edit',
        exact:false,
        main: ({match,history}) => <ProductActionPage match={match} history={history}/>
    },
    {
        path: '/order-list',
        exact: false,
        main: () => <OrderListPage />
    },
    {
        path: '/orders-calendar', // Define route for OrdersCalendarView
        exact: false,
        main: () => <OrdersCalendarView />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage />
    }
]

export default routes;
