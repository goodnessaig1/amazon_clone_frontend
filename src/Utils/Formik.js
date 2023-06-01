import { useField } from "formik";
import "./Formik.css";

export const TextInput = ({ icon, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <div style={{ position: "relative" }}>
            <div className="input_container">
                <label className="label" htmlFor={props.name}>
                    {props.label}
                </label>

                <input
                    className="inputs _input"
                    {...field}
                    {...props}
                    type={props.type}
                />
            </div>
            {meta.touched && meta.error ? (
                <div className="error_message">{meta.error}</div>
            ) : (
                <div
                    style={{ visibility: "hidden" }}
                    className="error_message"
                ></div>
            )}
        </div>
    );
};
