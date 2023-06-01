import "./App.css";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import SignIn from "./Components/Register_Login/SignIn/SignIn";

function App() {
    return (
        <>
            <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/sign_in" exact component={SignIn} />
            </Switch>
        </>
    );
}

export default App;
