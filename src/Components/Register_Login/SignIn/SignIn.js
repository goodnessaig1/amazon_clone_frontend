import React, { useState } from "react";
import { StepOne } from "./StepOne";
import { StepTwo } from "./StepTwo";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { connect } from "react-redux";
import { SignInUser } from "../../../Auth/Actions/userActions";

const SignIn = ({ SignInUser, requesting }) => {
    const history = useHistory();
    const [currentStep, setCurrentStep] = useState(0);
    const [data, setData] = useState({
        mobileOrEmail: "",
        password: "",
    });
    const makeRequest = async (formData) => {
        await SignInUser(formData, history);
    };
    const handleNextStep = async (newData, final = false) => {
        setData((prev) => ({ ...prev, ...newData }));
        if (final) {
            return await makeRequest(newData);
        }
        setCurrentStep((prev) => prev + 1);
    };
    const handlePrevStep = async (newData) => {
        setData((prev) => ({ ...prev, ...newData }));
        setCurrentStep((prev) => prev - 1);
    };

    const Steps = [
        <StepOne next={handleNextStep} key={1} data={data} />,
        <StepTwo
            next={handleNextStep}
            prev={handlePrevStep}
            key={2}
            data={data}
            requesting={requesting}
        />,
    ];
    return <div>{Steps[currentStep]}</div>;
};

const mapStateToProps = (state) => {
    return {
        requesting: state.user.SignInUser.requesting,
    };
};

export default connect(mapStateToProps, { SignInUser })(SignIn);
