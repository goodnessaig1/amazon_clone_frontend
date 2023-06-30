import "./App.css";
import { Switch, Route } from "react-router-dom";
import AdminRoute from "./Auth/AdminRoute";
import Dashboard from "./Components/Dashboard/Dashboard";
import Register from "./Components/Register_Login/SignUp/SignUp";
import SignIn from "./Components/Register_Login/SignIn/SignIn";
import SignUpSuccess from "./Components/Register_Login/SignUp/SignUpSuccess";
import NoPage from "./HOC/NoPage";
import addProduct from "./Components/Admin/addProduct";
import addBrand from "./Components/Admin/addBrand";
import addCategory from "./Components/Admin/addCategory";
import UserAccount from "./Components/Users/User/UserAccount";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUserAuth } from "./Auth/Actions/userActions";
import ProductsCategory from "./Components/Products/ProductsCategory/ProductsCategory";
import { GetCategories } from "./Auth/Actions/productActions";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserAuth());
        dispatch(GetCategories());
    }, []);

    return (
        <>
            <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/sign_in" exact component={SignIn} />
                <Route path="/sign_up" exact component={Register} />
                <Route
                    path="/sign_up_success"
                    exact
                    component={SignUpSuccess}
                />
                <AdminRoute
                    path="/user/admin/add_product"
                    exact
                    component={addProduct}
                />
                <Route path="/user/account" exact component={UserAccount} />
                <Route
                    path="/products/department/:categoryId"
                    exact
                    component={ProductsCategory}
                />

                <AdminRoute
                    path="/user/admin/add_category"
                    exact
                    component={addCategory}
                />
                <AdminRoute
                    path="/user/admin/add_brand"
                    exact
                    component={addBrand}
                />

                <Route path="*" exact component={NoPage} />
            </Switch>
        </>
    );
}

export default App;
