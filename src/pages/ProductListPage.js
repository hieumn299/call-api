import React, { Component } from 'react';
import ProductList from '../components/ProductList/ProductList';
import ProductItem from '../components/ProductItem/ProductItem';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {acDeleteProductRequest, acFetchProductsRequest} from '../actions/index';

class ProductListPage extends Component {
    showProducts = (products) => {
        var result = null;
        if (products.length > 0) {
            result = products.map((item, index) => {
                return (
                    <ProductItem stt={index} key={index} product={item} index={index} onDelete={this.onDelete}></ProductItem>
                )
            })
        }
        return result;
    }   
    componentDidMount=()=>{
        this.props.fetchAllProducts();
    }
    onDelete=(id)=>{
        this.props.deleteProduct(id);
    }
    render() {
        var {products} = this.props;    
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <Link to="/product/add" type="button" className="btn btn-info mb-10">Thêm Sản Phẩm</Link>
                <ProductList>
                    {this.showProducts(products)}
                </ProductList>
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return {
        products:state.products
    }
}
const mapDisPatchToProps=(dispatch,props)=>{
    return{
        fetchAllProducts:()=>{
            dispatch(acFetchProductsRequest());
        },
        deleteProduct:(id)=>{
            dispatch(acDeleteProductRequest(id));
        }
    }
}
export default connect(mapStateToProps,mapDisPatchToProps)(ProductListPage);