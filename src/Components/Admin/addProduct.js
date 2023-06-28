import React, { useEffect, useState } from "react";
import { Formik, Field, ErrorMessage } from "formik";
import "./addProduct.css";
import { connect, useDispatch } from "react-redux";
import Header from "../Header/Header";
import {
    AddProduct,
    GetBrands,
    GetCategories,
} from "../../Auth/Actions/productActions";
import { AddToPhotos, Close } from "@mui/icons-material";
import MobileHeader from "../Header/MobileHeader";

const NewProduct = ({ categories, brands, AddProduct, requesting }) => {
    const dispatch = useDispatch();
    const [selectedImages, setSelectedImages] = useState([]);
    const [imageFile, setImageFile] = useState([]);
    useEffect(() => {
        dispatch(GetCategories());
        dispatch(GetBrands());
    }, []);
    const handleImageSelect = (event, setFieldValue) => {
        const files = Array.from(event.currentTarget.files);
        const images = [];
        setFieldValue("images", [...imageFile, ...files]);
        files.forEach((file) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                images.push(e.target.result);
                if (images.length === files.length) {
                    setSelectedImages((prevImages) => [
                        ...prevImages,
                        ...images,
                    ]);
                }
            };
            reader.readAsDataURL(file);
        });
    };

    const handleDeleteImage = (index, setFieldValue, values) => {
        const updatedImages = [...imageFile];
        updatedImages.splice(index, 1);
        setImageFile(updatedImages);
        const updatedFileValues = [...values.images];
        updatedFileValues.splice(index, 1);
        setFieldValue("images", updatedFileValues);
        setSelectedImages((prevImages) => {
            const updatedImages = [...prevImages];
            updatedImages.splice(index, 1);
            return updatedImages;
        });
    };
    const handleSubmit = async (values) => {
        const formData = new FormData();
        formData.append("name", values.name);
        formData.append("price", values.price);
        formData.append("about", values.about);
        formData.append("description", values.description);
        formData.append("features", values.features);
        formData.append("category", values.category);
        formData.append("brand", values.brand);
        formData.append("available", values.available);
        formData.append("publish", values.publish);
        values.images.forEach((image) => {
            formData.append("images", image);
        });

        try {
            AddProduct(formData);
        } catch (error) {
            console.error("Error creating product", error);
        }
    };

    return (
        <div>
            <div className="header">
                <Header />
            </div>
            <div className="mobile_header">
                <MobileHeader />
            </div>
            <Formik
                initialValues={{
                    name: "",
                    price: "",
                    about: "",
                    features: "",
                    description: "",
                    category: "",
                    available: true,
                    brand: "",
                    publish: "Public",
                    images: [],
                }}
                onSubmit={handleSubmit}
            >
                {({ values, handleChange, handleSubmit, setFieldValue }) => (
                    <form onSubmit={handleSubmit}>
                        <div className="add_product_container">
                            <div>
                                <h3>Product Management</h3>
                            </div>
                            <div className="add_product__container">
                                <div className="img_container">
                                    <div className="upload_image_center">
                                        <div className="image_dropzone_container">
                                            <label className="upload_middle">
                                                <AddToPhotos className="icon" />
                                                <span>Add Images</span>
                                                <input
                                                    className="upload_input"
                                                    name="image"
                                                    accept="image/*"
                                                    type="file"
                                                    multiple
                                                    onChange={(e) => {
                                                        handleImageSelect(
                                                            e,
                                                            setFieldValue
                                                        );
                                                    }}
                                                />
                                            </label>
                                        </div>
                                        <ErrorMessage
                                            name="images"
                                            component="div"
                                        />
                                    </div>
                                    {selectedImages &&
                                        selectedImages.map((image, index) => (
                                            <div
                                                key={index}
                                                className="image-preview"
                                            >
                                                <img
                                                    src={image}
                                                    className="selected_image"
                                                    alt={`Preview ${index + 1}`}
                                                />
                                                <span
                                                    className="remove_img"
                                                    onClick={() =>
                                                        handleDeleteImage(
                                                            index,
                                                            setFieldValue,
                                                            values
                                                        )
                                                    }
                                                >
                                                    <Close />
                                                </span>
                                            </div>
                                        ))}
                                </div>
                                <div className="product_container">
                                    <label htmlFor="name">Product Name</label>
                                    <Field
                                        type="text"
                                        className="product_input"
                                        id="name"
                                        name="name"
                                        placeholder="Product Name"
                                    />
                                    <ErrorMessage name="name" component="div" />
                                </div>
                                <div className="product_container">
                                    <label htmlFor="price">Price</label>
                                    <Field
                                        className="product_input"
                                        type="number"
                                        id="price"
                                        name="price"
                                        placeholder="Price"
                                    />
                                    <ErrorMessage
                                        name="price"
                                        component="div"
                                    />
                                </div>
                                <div className="product_container">
                                    <label htmlFor="about">About</label>
                                    <Field
                                        type="text"
                                        id="about"
                                        className="product_input"
                                        name="about"
                                        placeholder="About"
                                    />
                                    <ErrorMessage
                                        name="about"
                                        component="div"
                                    />
                                </div>
                                <div className="product_container">
                                    <label htmlFor="features">Features</label>
                                    <Field
                                        className="product_input"
                                        type="test"
                                        id="features"
                                        name="features"
                                        placeholder="Features"
                                    />
                                    <ErrorMessage
                                        name="features"
                                        component="div"
                                    />
                                </div>
                                <div className="product_container">
                                    <label htmlFor="description">
                                        Description
                                    </label>
                                    <Field
                                        as="textarea"
                                        id="description"
                                        className="text__area"
                                        name="description"
                                        placeholder="Description"
                                    />
                                    <ErrorMessage
                                        name="description"
                                        component="div"
                                    />
                                </div>
                                <div className="product_container">
                                    <label htmlFor="">Category</label>
                                    <Field
                                        as="select"
                                        className="product_select"
                                        style={{ color: "black" }}
                                        id="category"
                                        name="category"
                                    >
                                        <option defaultValue="">
                                            Select category
                                        </option>
                                        {categories &&
                                            categories.map((category) => (
                                                <option
                                                    key={category?._id}
                                                    value={category?._id}
                                                >
                                                    {category?.name}
                                                </option>
                                            ))}
                                    </Field>
                                </div>
                                <div className="product_container">
                                    <label htmlFor="brand">Brand</label>
                                    <Field
                                        as="select"
                                        className="product_select"
                                        id="brand"
                                        name="brand"
                                    >
                                        <option defaultValue="">
                                            Select brands
                                        </option>
                                        {brands &&
                                            brands.map((brand) => (
                                                <option
                                                    key={brand?._id}
                                                    value={brand?._id}
                                                >
                                                    {brand?.name}
                                                </option>
                                            ))}
                                    </Field>
                                </div>
                                <div className="product_container">
                                    <label htmlFor="publish">Available</label>
                                    <Field
                                        as="select"
                                        className="product_select"
                                        id="publish"
                                        name="publish"
                                    >
                                        <option defaultValue>Publish</option>
                                        <option value="Public">Public</option>
                                        <option value="Hidden">Hidden</option>
                                    </Field>
                                </div>
                                <div className="upload_button">
                                    {!requesting && (
                                        <button
                                            className="upload_btn"
                                            type="submit"
                                        >
                                            Create Product
                                        </button>
                                    )}
                                    {requesting && <div>Loading</div>}
                                </div>
                            </div>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        categories: state.products.categories,
        brands: state.products.brands,
        requesting: state.products.AddProduct?.requesting,
    };
};

export default connect(mapStateToProps, { AddProduct })(NewProduct);
