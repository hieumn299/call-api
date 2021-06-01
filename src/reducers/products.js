import * as Types from '../constants/ActionType';
var initialState = [];

const products = (state = initialState, action) => {
    if (action.type) {
        switch (action.type) {
            case Types.FETCH_PRODUCT:
                state = action.products
                return [...state];

            case Types.DELETE_PRODUCT:
                var result = state.filter((item, index) => {
                    return item.id !== action.id;
                })
                return [...result]
            case Types.ADD_PRODUCT:
                console.log(action);
                state.push(action.product)
                return [...state]

            case Types.UPDATE_PRODUCT:
                console.log(action);
                var index = (state.findIndex((item) => {
                    return item.id === action.product.id;
                }));
                state[index] = action.product;
                return [...state]
            default:
                return [...state];
        }
    }
}
export default products;