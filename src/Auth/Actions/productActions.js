import * as types from "../Actions/constants";
import { apiRequest } from "../../Utils/axios";
import { toast } from "react-toastify";

const getCategoriesRequest = (request) => {
    return {
        type: types.GET_CATEGORIES_REQUEST,
        payload: request,
    };
};

const getCategoriesSuccess = (success) => {
    return {
        type: types.GET_CATEGORIES_SUCCESS,
        payload: success,
    };
};

const getCategoriesFailure = (failure) => {
    return {
        type: types.GET_CATEGORIES_FAILURE,
        payload: failure,
    };
};

const getBrandsRequest = (request) => {
    return {
        type: types.GET_BRANDS_REQUEST,
        payload: request,
    };
};

const getBrandsSuccess = (success) => {
    return {
        type: types.GET_BRANDS_SUCCESS,
        payload: success,
    };
};

const getBrandsFailure = (failure) => {
    return {
        type: types.GET_BRANDS_FAILURE,
        payload: failure,
    };
};

const addProductRequest = (request) => {
    return {
        type: types.ADD_PRODUCT_REQUEST,
        payload: request,
    };
};

const addProductSuccess = (success) => {
    return {
        type: types.ADD_PRODUCT_SUCCESS,
        payload: success,
    };
};

const addProductFailure = (failure) => {
    return {
        type: types.ADD_PRODUCT_FAILURE,
        payload: failure,
    };
};

const addCategoryRequest = (request) => {
    return {
        type: types.ADD_CATEGORY_REQUEST,
        payload: request,
    };
};

const addCategorySuccess = (success) => {
    return {
        type: types.ADD_CATEGORY_SUCCESS,
        payload: success,
    };
};

const addCategoryFailure = (failure) => {
    return {
        type: types.ADD_CATEGORY_FAILURE,
        payload: failure,
    };
};

const addBrandRequest = (request) => {
    return {
        type: types.ADD_BRAND_REQUEST,
        payload: request,
    };
};

const addBrandSuccess = (success) => {
    return {
        type: types.ADD_BRAND_SUCCESS,
        payload: success,
    };
};

const addBrandFailure = (failure) => {
    return {
        type: types.ADD_BRAND_FAILURE,
        payload: failure,
    };
};

const getProductByCategoryRequest = (request) => {
    return {
        type: types.GET_PRODUCT_BY_CATEGORY_REQUEST,
        payload: request,
    };
};

const getProductByCategorySuccess = (success) => {
    return {
        type: types.GET_PRODUCT_BY_CATEGORY_SUCCESS,
        payload: success,
    };
};

const getProductByCategoryFailure = (failure) => {
    return {
        type: types.GET_PRODUCT_BY_CATEGORY_FAILURE,
        payload: failure,
    };
};

export function GetCategories() {
    return (dispatch) => {
        const promise = apiRequest("GET", `api/categories`);
        dispatch(getCategoriesRequest());
        promise.then(
            function (payload) {
                const { data } = payload;
                dispatch(getCategoriesSuccess(data));
            },
            function (error) {
                const errorMsg = error;
                dispatch(getCategoriesFailure(errorMsg));
            }
        );
        return promise;
    };
}

export function GetBrands() {
    return (dispatch) => {
        const promise = apiRequest("GET", `api/brands`);
        dispatch(getBrandsRequest());
        promise.then(
            function (payload) {
                const { data } = payload;
                dispatch(getBrandsSuccess(data));
            },
            function (error) {
                const errorMsg = error;
                dispatch(getBrandsFailure(errorMsg));
            }
        );
        return promise;
    };
}

export function AddProduct(formData) {
    return (dispatch) => {
        const promise = apiRequest(
            "POST",
            `api/products/add_product`,
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Accept: "multipart/form-data",
                },
            }
        );
        dispatch(addProductRequest());
        promise.then(
            function (payload) {
                const { data } = payload;
                dispatch(addProductSuccess(data));
                console.log(data);
                toast.success("Product Added", {
                    position: toast.POSITION.TOP_RIGHT,
                });
            },
            function (error) {
                const errorMsg = error;
                toast.error("An Error occured", {
                    position: toast.POSITION.TOP_RIGHT,
                });
                dispatch(addProductFailure(errorMsg));
            }
        );
        return promise;
    };
}

export function AddCategory(data) {
    return (dispatch) => {
        const promise = apiRequest("POST", `api/categories/add_category`, data);
        dispatch(addCategoryRequest());
        promise.then(
            function (payload) {
                const { data } = payload;
                dispatch(addCategorySuccess(data));
                console.log(data);
            },
            function (error) {
                const errorMsg = error;
                console.log(error);
                dispatch(addCategoryFailure(errorMsg));
            }
        );
        return promise;
    };
}

export function AddBrand(data) {
    return (dispatch) => {
        const promise = apiRequest("POST", `api/brands/add_brand`, data);
        dispatch(addBrandRequest());
        promise.then(
            function (payload) {
                const { data } = payload;
                dispatch(addBrandSuccess(data));
                console.log(data);
            },
            function (error) {
                const errorMsg = error;
                console.log(error);
                dispatch(addBrandFailure(errorMsg));
            }
        );
        return promise;
    };
}

export function GetProductByCategory(categoryId) {
    return (dispatch) => {
        const promise = apiRequest(
            "GET",
            `api/products/product_category${categoryId}`
        );
        dispatch(getProductByCategoryRequest());
        promise.then(
            function (payload) {
                const { data } = payload;
                dispatch(getProductByCategorySuccess(data));
            },
            function (error) {
                const errorMsg = error;
                dispatch(getProductByCategoryFailure(errorMsg));
            }
        );
        return promise;
    };
}
