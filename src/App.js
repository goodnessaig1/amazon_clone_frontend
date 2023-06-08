import "./App.css";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Register from "./Components/Register_Login/SignUp/SignUp";
import SignIn from "./Components/Register_Login/SignIn/SignIn";
import SignUpSuccess from "./Components/Register_Login/SignUp/SignUpSuccess";
import NoPage from "./HOC/NoPage";

function App() {
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
                <Route path="*" exact component={NoPage} />
            </Switch>
        </>
    );
}

export default App;
