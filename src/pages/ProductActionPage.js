import React, { Component } from 'react';
import callApi from '../utils/apiCaller';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import * as Action from '../actions/index';


class ProductActionPage extends Component {
    state={
        id:'',
        nameProduct:'',
        priceProduct:'',
        chkbstt:false
    }
    componentDidMount=()=>{
        var {match}=this.props;
        if(match){
            var id=match.params.id;
            console.log(id);
            // callApi(`products/${id}`,'GET',null).then(res=>{
            //     this.setState({
            //         id:res.data.id,
            //         nameProduct:res.data.name,
            //         priceProduct:res.data.price,
            //         chkbstt:res.data.status
            //     })
            // })
            this.props.onEditProduct(id);

        }
    }
    componentDidUpdate=(prevProps,prevState)=>{
        if(this.state===prevState){
            this.setState({
                id:this.props.itemEditing.id,
                nameProduct:this.props.itemEditing.name,
                priceProduct:this.props.itemEditing.price,
                chkbstt:this.props.itemEditing.status
            })
        }
    }
    onChange=(e)=>{
        var target=e.target;
        var name=target.name;
        var value=target.type!=='checkbox'?target.value:target.checked;
        this.setState({
            [name]:value
        })
    }
    onSubmit=(e)=>{
        e.preventDefault();
        var {history}=this.props;
        var product={
            id:this.state.id,
            name:this.state.nameProduct,
            price:this.state.priceProduct,
            status:this.state.chkbstt
        }
        if(this.state.id){
            callApi(`products/${this.state.id}`,'PUT',{
                name:this.state.nameProduct,
                price:this.state.priceProduct,
                status:this.state.chkbstt
            }).then(res=>{
                history.goBack();
            })
        }
        else{
            // callApi('products','POST',{
            //     name:this.state.nameProduct,
            //     price:this.state.priceProduct,
            //     status:this.state.chkbstt
            // }).then((res)=>{
            //     console.log(res.data);
            //     // history.goBack(); // trở về trang trước đó
            //     history.push("/"); //muốn đi về trang nào thì push về trang đó
            // })
            this.props.onAddProduct(product);
            history.goBack();

        }
        
    }
    render() {
        var {nameProduct,priceProduct,chkbstt}=this.state;
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <form onSubmit={this.onSubmit} method="POST">
                    <legend>Form title</legend>
                    <div className="form-group">
                        <label>Tên sản phẩm:</label>
                        <input onChange={this.onChange} value={nameProduct} type="text" className="form-control" placeholder="Input field" name="nameProduct" />
                    </div>
                    <div className="form-group">
                        <label>Giá</label>
                        <input onChange={this.onChange} type="number" value={priceProduct} className="form-control" placeholder="Input field" name="priceProduct" />
                    </div>
                    <div className="form-group">
                        <label>label</label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input onChange={this.onChange} type="checkbox" checked={chkbstt} name="chkbstt" value={chkbstt} id=""/>Còn Hàng
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary mb-10">Submit</button>
                </form>
                <Link to="/products-list" className="btn btn-danger">Trở về trang chủ</Link>
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    console.log(state.itemEditing);
    return{
        itemEditing:state.itemEditing
    }
}
const mapDisPatchToProps=(dispatch,props)=>{
    return{
        onAddProduct:(product)=>{
            dispatch(Action.acAddProductRequest(product))
        },
        onEditProduct:(id)=>{
            dispatch(Action.acGetProductRequest(id));
        }
    }
}
export default connect(mapStateToProps,mapDisPatchToProps)(ProductActionPage);