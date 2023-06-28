import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

const Admin = () => {
    return (
        <>
            <h4 className="admin_header">Admin</h4>
            <div className="account_container">
                <div>
                    <Link
                        to="/user/admin/add_product"
                        className="account_detail_container"
                    >
                        <div>
                            <img
                                src="https://ik.imagekit.io/nz8zngrxv/amazon-image/download_MI6ESJ6oT.png?updatedAt=1687125259483"
                                alt=""
                            />
                        </div>
                        <div className="account_detail">
                            <h5>Add Product</h5>
                            <span>
                                As an admin, add a new product with the product
                                description to be available for sale
                            </span>
                        </div>
                    </Link>
                    <Link
                        to="/user/admin/add_category"
                        className="account_detail_container"
                    >
                        <div>
                            <img
                                src="https://ik.imagekit.io/nz8zngrxv/amazon-image/images_Nexp4UsWT.jfif?updatedAt=1687125259689"
                                alt=""
                            />
                        </div>
                        <div className="account_detail">
                            <h5>Add Categories</h5>
                            <span>
                                Categories aids purchase and ease user search
                            </span>
                        </div>
                    </Link>
                </div>
                <div>
                    <Link
                        to="/user/admin/add_brand"
                        className="account_detail_container"
                    >
                        <div>
                            <img
                                src="https://ik.imagekit.io/nz8zngrxv/amazon-image/images__1__Fzu6b4Lec.jfif?updatedAt=1687125259482"
                                alt=""
                            />
                        </div>
                        <div className="account_detail">
                            <h5>Create Brands</h5>
                            <span>
                                Create a new brand to ease product search
                            </span>
                        </div>
                    </Link>
                    <Link to="" className="account_detail_container">
                        <div>
                            <img
                                src="https://ik.imagekit.io/nz8zngrxv/amazon-image/download__1__gDltR8nHv.png?updatedAt=1687126085661"
                                alt=""
                            />
                        </div>
                        <div className="account_detail">
                            <h5>Make Admin</h5>
                            <span>Make a user an admin</span>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Admin;
