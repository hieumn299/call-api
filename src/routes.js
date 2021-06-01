import React from 'react';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import ProductListPage from './pages/ProductListPage';
import ProductActionPage from './pages/ProductActionPage';

const routes=[
    {
        path:'/',
        exact:true,
        main:()=>{return <HomePage></HomePage>}
    },
    {
        path:'/products-list',
        exact:false,
        main:({history})=>{return <ProductListPage history={history}></ProductListPage>}
    },
    {
        path:'/product/add',
        exact:false,
        main:({history})=>{ return <ProductActionPage history={history}></ProductActionPage>}
    },
    {
        path:'/product/:id/edit',
        exact:false,
        main:({match,location,history})=>{ return <ProductActionPage match={match} location={location} history={history}></ProductActionPage>}
    },
    {
        path:'',
        exact:false,
        main:()=>{return <NotFoundPage></NotFoundPage>}
    },
    

];

export default routes;