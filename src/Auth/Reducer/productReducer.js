import * as types from "../Actions/constants";

const initialState = {
    GetCategories: {
        requesting: false,
        error: null,
        success: false,
    },
    GetBrands: {
        requesting: false,
        error: null,
        success: false,
    },
    AddCategory: {
        requesting: false,
        error: null,
        success: false,
    },
    AddProduct: {
        requesting: false,
        error: null,
        success: false,
    },
    AddBrand: {
        requesting: false,
        error: null,
        success: false,
    },
    GetProductByCategory: {
        requesting: false,
        error: null,
        success: false,
    },
    GetSingleProduct: {
        requesting: false,
        error: null,
        success: false,
    },
    SearchProductName: {
        requesting: false,
        error: null,
        success: false,
    },
};

//eslint-disable-next-line
export default function (state = initialState, action) {
    switch (action.type) {
        case types.GET_CATEGORIES_REQUEST:
            return Object.assign({}, state, {
                GetCategories: {
                    requesting: true,
                    error: null,
                    success: false,
                },
            });

        case types.GET_CATEGORIES_SUCCESS:
            return Object.assign({}, state, {
                GetCategories: {
                    requesting: false,
                    error: null,
                    success: true,
                },
                categories: action.payload,
            });

        case types.GET_CATEGORIES_FAILURE:
            return Object.assign({}, state, {
                GetCategories: {
                    requesting: false,
                    error: action.payload,
                    success: false,
                },
            });

        case types.GET_BRANDS_REQUEST:
            return Object.assign({}, state, {
                GetBrands: {
                    requesting: true,
                    error: null,
                    success: false,
                },
            });

        case types.GET_BRANDS_SUCCESS:
            return Object.assign({}, state, {
                GetBrands: {
                    requesting: false,
                    error: null,
                    success: true,
                },
                brands: action.payload,
            });

        case types.GET_BRANDS_FAILURE:
            return Object.assign({}, state, {
                GetBrands: {
                    requesting: false,
                    error: action.payload,
                    success: false,
                },
            });

        case types.ADD_PRODUCT_REQUEST:
            return Object.assign({}, state, {
                AddProduct: {
                    requesting: true,
                    error: null,
                    success: false,
                },
            });

        case types.ADD_PRODUCT_SUCCESS:
            return Object.assign({}, state, {
                AddProduct: {
                    requesting: false,
                    error: null,
                    success: true,
                },
                successful: action.payload,
            });

        case types.ADD_PRODUCT_FAILURE:
            return Object.assign({}, state, {
                AddProduct: {
                    requesting: false,
                    error: action.payload,
                    success: false,
                },
            });
        case types.ADD_BRAND_REQUEST:
            return Object.assign({}, state, {
                AddBrand: {
                    requesting: true,
                    error: null,
                    success: false,
                },
            });

        case types.ADD_BRAND_SUCCESS:
            return Object.assign({}, state, {
                AddBrand: {
                    requesting: false,
                    error: null,
                    success: true,
                },
                successBrand: action.payload,
            });

        case types.ADD_BRAND_FAILURE:
            return Object.assign({}, state, {
                AddBrand: {
                    requesting: false,
                    error: action.payload,
                    success: false,
                },
            });

        case types.ADD_CATEGORY_REQUEST:
            return Object.assign({}, state, {
                AddCategory: {
                    requesting: true,
                    error: null,
                    success: false,
                },
            });

        case types.ADD_CATEGORY_SUCCESS:
            return Object.assign({}, state, {
                AddCategory: {
                    requesting: false,
                    error: null,
                    success: true,
                },
                successCategory: action.payload,
            });

        case types.ADD_CATEGORY_FAILURE:
            return Object.assign({}, state, {
                AddCategory: {
                    requesting: false,
                    error: action.payload,
                    success: false,
                },
            });

        case types.GET_PRODUCT_BY_CATEGORY_REQUEST:
            return Object.assign({}, state, {
                GetProductByCategory: {
                    requesting: true,
                    error: null,
                    success: false,
                },
            });

        case types.GET_PRODUCT_BY_CATEGORY_SUCCESS:
            return Object.assign({}, state, {
                GetProductByCategory: {
                    requesting: false,
                    error: null,
                    success: true,
                },
                products: action.payload,
            });

        case types.GET_PRODUCT_BY_CATEGORY_FAILURE:
            return Object.assign({}, state, {
                GetProductByCategory: {
                    requesting: false,
                    error: action.payload,
                    success: false,
                },
            });
        case types.GET_SINGLE_PRODUCT_REQUEST:
            return Object.assign({}, state, {
                GetSingleProduct: {
                    requesting: true,
                    error: null,
                    success: false,
                },
            });

        case types.GET_SINGLE_PRODUCT_SUCCESS:
            return Object.assign({}, state, {
                GetSingleProduct: {
                    requesting: false,
                    error: null,
                    success: true,
                },
                product: action.payload,
            });

        case types.GET_SINGLE_PRODUCT_FAILURE:
            return Object.assign({}, state, {
                GetSingleProduct: {
                    requesting: false,
                    error: action.payload,
                    success: false,
                },
            });

        case types.SEARCH_PRODUCT_REQUEST:
            return Object.assign({}, state, {
                SearchProductName: {
                    requesting: true,
                    error: null,
                    success: false,
                },
            });

        case types.SEARCH_PRODUCT_SUCCESS:
            return Object.assign({}, state, {
                SearchProductName: {
                    requesting: false,
                    error: null,
                    success: true,
                },
                productResults: action.payload,
            });

        case types.SEARCH_PRODUCT_FAILURE:
            return Object.assign({}, state, {
                SearchProductName: {
                    requesting: false,
                    error: action.payload,
                    success: false,
                },
            });

        default:
            return state;
    }
}
