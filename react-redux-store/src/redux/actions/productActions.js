import { ActionTypes } from "../constants/action-types"

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    };
};

export const selectedProduct = (selectedProduct) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: selectedProduct,
    };
};

export const removeSelectedProduct = (selectedProduct) => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    };
};
