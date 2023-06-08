import React from "react";
import PageLayout from "../../HOC/PageLayout";
import Home from "./Home";
import "./Dashboard.css";
const Dashboard = () => {
    return (
        <PageLayout>
            <div>
                <Home />
            </div>
        </PageLayout>
    );
};

export default Dashboard;
