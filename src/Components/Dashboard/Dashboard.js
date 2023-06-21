import React from "react";
import PageLayout from "../../HOC/PageLayout";
import Home from "./Home";
import "./Dashboard.css";
const Dashboard = () => {
    return (
        <PageLayout>
            <div className="home_holder">
                <Home />
            </div>
        </PageLayout>
    );
};

export default Dashboard;
