import "./App.css";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";

function App() {
    return (
        <>
            <Switch>
                <Route path="/" exact component={Dashboard} />
            </Switch>
        </>
    );
}

export default App;
