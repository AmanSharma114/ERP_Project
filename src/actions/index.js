import * as Types from './../constants/ActionTypes';
import callAPI from "./../utils/apiCaller";

export const actFetchProductRequest = () => {
    return (dispatch) => {
        return callAPI('products', 'GET', null)
            .then(res => {
                if (res && res.data) {
                    dispatch(actFetchProduct(res.data));
                } else {
                    console.error('Unexpected response format:', res);
                }
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }
}

export const actFetchProduct = (products) => {
    return {
        type: Types.FETCH_PRODUCT,
        products
    }
}

export const actDeleteProductRequest = (id) => {
    return (dispatch) => {
        return callAPI(`products/${id}`, 'DELETE', null)
            .then(res => {
                dispatch(actDeleteProduct(id))
            })
            .catch(error => {
                console.error('Error deleting product:', error);
            });
    }
}

export const actDeleteProduct = (id) => {
    return {
        type: Types.DELETE_PRODUCT,
        id
    }
}

export const actAddProductRequest = (product) => {
    return (dispatch) => {
        return callAPI('products', 'POST', product)
            .then(res => {
                dispatch(actAddProduct(res.data))
            })
            .catch(error => {
                console.error('Error adding product:', error);
            });
    }
}

export const actAddProduct = (product) => {
    return {
        type: Types.ADD_PRODUCT,
        product
    }
}

export const actGetProductRequest = (id) => {
    return dispatch => {
        return callAPI(`products/${id}`, 'GET', null)
            .then(res => {
                dispatch(actGetProduct(res.data))
            })
            .catch(error => {
                console.error('Error getting product:', error);
            });
    }
}

export const actGetProduct = (product) => {
    return {
        type: Types.EDIT_PRODUCT,
        product
    }
}

export const actUpdateProductRequest = (product) => {
    return dispatch => {
        return callAPI(`products/${product.id}`, 'PUT', product)
            .then(res => {
                dispatch(actUpdateProduct(res.data))
            })
            .catch(error => {
                console.error('Error updating product:', error);
            });
    }
}

export const actUpdateProduct = (product) => {
    return {
        type: Types.EDIT_PRODUCT,
        product
    }
}
