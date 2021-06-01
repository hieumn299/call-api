import * as Types from '../constants/ActionType';
import callApi from '../utils/apiCaller';

export const acFetchProductsRequest = () => {
    return (dispatch) => {
        return callApi('products', 'GET', null).then(res => {
            dispatch(acFetchProducts(res.data))
        });
    }
}

export const acFetchProducts = (products) => {
    return {
        type: Types.FETCH_PRODUCT,
        products
    }
}

export const acDeleteProductRequest = (id) => {
    return (dispatch) => {
        return callApi(`products/${id}`, 'DELETE', null).then(res => {
            dispatch(acDeleteProduct(id))
        })
    }
}

export const acDeleteProduct = (id) => {
    return {
        type: Types.DELETE_PRODUCT,
        id
    }
}

export const acAddProductRequest = (product) => {
    return (dispatch) => {
        return callApi(`products`, 'POST', product).then(res => {
            dispatch(acAddProduct(res.data))
        })
    }
}
export const acAddProduct = (product) => {
    return {
        type: Types.ADD_PRODUCT,
        product
    }
}
export const acGetProductRequest = (id) => {
    return (dispatch) => {
        return callApi(`products/${id}`, 'GET', null).then(res => {
            console.log(res.data);
            dispatch(acGetProduct(res.data))
        })
    }
}
export const acGetProduct = (product) => {
    return {
        type: Types.EDIT_PRODUCT,
        product
    }
}
export const acUpdateProductRequest = (product) => {
    return (dispatch) => {
        return callApi(`products/${product.id}`, 'GET', {
            id: product.id,
            name: product.name,
            price: product.price,
            status: product.status
        }).then(res => {
            console.log(res.data);
            dispatch(acGetProduct(res.data))
        })
    }
}
export const acUpdateProduct = (product) => {
    return {
        type: Types.EDIT_PRODUCT,
        product
    }
}