import { GET_PRODUCTS, SHOW_LOADER, HIDE_LOADER, INC_PAGE } from "../constants";

const initialState = {
    loading: true,
    alert: null,
    products: [],
    productTitle: ['Some Products List'],
    pagePagination: 1,
    pageItemsNum: 20
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {...state, products: action.payload}
        case SHOW_LOADER:
            return {...state, loading: true}
        case HIDE_LOADER:
            return {...state, loading: false}
        case INC_PAGE:
            return {...state, pagePagination: +state.pagePagination+1}
        default: return state
    }
}