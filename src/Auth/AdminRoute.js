import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

const AdminRoute = ({ component: Component, user, ...rest }) => {
    const isAdmin = user?.userAuth?.isAdmin;

    return (
        <Route
            {...rest}
            render={(props) =>
                isAdmin ? <Component {...props} /> : <Redirect to="/" />
            }
        />
    );
};
const mapStateToProps = (state) => {
    return {
        user: state.user?.userData,
    };
};

export default connect(mapStateToProps)(AdminRoute);
