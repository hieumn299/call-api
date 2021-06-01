import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class ProductItem extends Component {
    onDelete=(id)=>{
        if(confirm("Bạn có chắc chắn muốn xoá?")){ //eslint-disable-line
            this.props.onDelete(id);
        }
        
    }
    render() {
        var {index,product}=this.props;
        var statusName=product.status?'còn hàng':'hết hàng';
        var statusClass=product.status?'warning':'default';
        return (
            <tr>
                <td>{index+1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    <span className={`label label-${statusClass}`}>{statusName}</span>
                </td>
                <td>
                    <Link to={`/product/${product.id}/edit`} type="button" className="btn btn-success mr-10">Sửa</Link>
                    <button onClick={()=>{this.onDelete(product.id)}} type="button" className="btn btn-danger">Xoá</button>
                </td>
            </tr>
        );
    }
}

export default ProductItem;