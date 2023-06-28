import React from "react";
import PageLayout from "../../../HOC/PageLayout";
import "./User.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { connect } from "react-redux";
import Admin from "../../Admin/admin";

const UserAccount = ({ user }) => {
    const isAdmin = user?.userAuth?.isAdmin;
    return (
        <PageLayout>
            <div className="user_account">
                <h4>Your Account</h4>
                <div className="account_container">
                    <div>
                        <Link to="" className="account_detail_container">
                            <div>
                                <img
                                    src="https://ik.imagekit.io/nz8zngrxv/amazon-image/account._CB660668669__jaUdBasQW.png?updatedAt=1687123547302"
                                    alt=""
                                />
                            </div>
                            <div className="account_detail">
                                <h5>Your Profiles</h5>
                                <span>
                                    Manage, add, or remove user profules for
                                    personalized experiences
                                </span>
                            </div>
                        </Link>
                        <Link
                            to="/user/orders&history"
                            className="account_detail_container"
                        >
                            <div>
                                <img
                                    src="https://ik.imagekit.io/nz8zngrxv/amazon-image/10_archived_orders._CB654640573__hDB9cXeaC.png?updatedAt=1687123715346"
                                    alt=""
                                />
                            </div>
                            <div className="account_detail">
                                <h5>Your Orders</h5>
                                <span>
                                    View Orders and your history of purchases
                                    from Us at Amazon
                                </span>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link
                            to="/login&security"
                            className="account_detail_container"
                        >
                            <div>
                                <img
                                    src="https://ik.imagekit.io/nz8zngrxv/amazon-image/login_NqJdZa6gg.png?updatedAt=1687123547316"
                                    alt=""
                                />
                            </div>
                            <div className="account_detail">
                                <h5>Login & security</h5>
                                <span>Edit login, name and mobile number</span>
                            </div>
                        </Link>
                        <Link
                            to="/user/cart"
                            className="account_detail_container"
                        >
                            <div>
                                <img
                                    src="https://ik.imagekit.io/nz8zngrxv/amazon-image/order._CB660668735__Is4630l-5.png?updatedAt=1687123547301"
                                    alt=""
                                />
                            </div>
                            <div className="account_detail">
                                <h5>Your Cart</h5>
                                <span>
                                    View products in your cart and proceed to
                                    make payments
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>

                {isAdmin && <Admin />}
            </div>
        </PageLayout>
    );
};

const mapStateToProps = (state) => {
    return {
        user: state.user?.userData,
    };
};

export default connect(mapStateToProps)(UserAccount);
