import React from "react";
import { Formik, Field } from "formik";
import Airtable from "airtable";
import "./Form.css";
import { toast } from "react-toastify";

var base = new Airtable({ apiKey: "key8wpavQxjaqU3JG" }).base(
    "applPl2B8QqxhBUX8"
);

const Form = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="wrap_box">
                    <h1 className="mt-3">Anywhere in your app!</h1>
                    <Formik
                        initialValues={{
                            Name_of_initiative: "",
                            Description_EN: "",
                            Link: "",
                            Location: "",
                        }}
                        validate={(values) => {
                            const errors = {};
                            if (!values.Category_EN) {
                                errors.Category_EN = "Required";
                            }

                            if (!values.Description_EN) {
                                errors.Description_EN = "Required";
                            }
                            if (!values.Link) {
                                errors.Link = "Required";
                            }
                            if (!values.Location) {
                                errors.Location = "Required";
                            }

                            if (!values.Name_of_initiative) {
                                errors.Name_of_initiative = "Required";
                            }
                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            // {
                            //     console.log(values);
                            // }
                            setSubmitting(false);
                            base("Actions").create(
                                [
                                    {
                                        fields: {
                                            Category_EN: values.Category_EN,
                                            Category_NL: values.Category_NL,
                                            Name_of_initiative:
                                                values.Name_of_initiative,
                                            Description_EN:
                                                values.Description_EN,
                                            Omschrijving_NL:
                                                values.Omschrijving_NL,
                                            Link: values.Link,
                                            Location: values.Location,
                                        },
                                    },
                                ],
                                function (err, records) {
                                    if (err) {
                                        console.error(err);
                                        return;
                                    } else {
                                        toast.success('Your initiative has been submited!', {
                                            position: "top-right",
                                            autoClose: 5000,
                                            hideProgressBar: false,
                                            closeOnClick: true,
                                            pauseOnHover: true,
                                            draggable: true,
                                            progress: undefined,
                                        });
                                        props.history.push("/");
                                    }
                                }
                            );
                        }}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting,
                            /* and other goodies */
                        }) => (
                                <div className="form_section">
                                    <form onSubmit={handleSubmit}>
                                        <div className="boxes_main">
                                            <hr />
                                            <div className="feild_box">
                                                <p>Name</p>
                                                <input
                                                    type="text"
                                                    name="Name_of_initiative"
                                                    required
                                                    placeholder="Enter name of initiative"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={
                                                        values.Name_of_initiative
                                                    }
                                                    className={
                                                        errors.Name_of_initiative &&
                                                            touched.Name_of_initiative &&
                                                            errors.Name_of_initiative
                                                            ? "red_border"
                                                            : ""
                                                    }
                                                />
                                                <br />
                                            </div>
                                        </div>
                                        <div className="boxes_main">
                                            <hr />
                                            <div className="feild_box">
                                                <p>Link</p>
                                                <input
                                                    type="text"
                                                    name="Link"
                                                    required
                                                    placeholder="Copy a link to their page"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.Link}
                                                    className={
                                                        errors.Link &&
                                                            touched.Link &&
                                                            errors.Link
                                                            ? "red_border"
                                                            : ""
                                                    }
                                                />
                                                <br />
                                            </div>
                                        </div>
                                        <div className="boxes_main">
                                            <hr />
                                            <div className="feild_box">
                                                <p>Category</p>
                                                <Field
                                                    name="Category_EN"
                                                    as="select"
                                                    required
                                                    className={
                                                        errors.Category_EN &&
                                                            touched.Category_EN &&
                                                            errors.Category_EN
                                                            ? "my-select red_border"
                                                            : "my-select"
                                                    }
                                                >
                                                    <option>
                                                        --Select Category--
                                                </option>
                                                    <option value="Central Information">
                                                        Central Information
                                                </option>
                                                    <option value="Companies offering their services">
                                                        Companies offering their
                                                        services
                                                </option>
                                                    <option value="Donating / petitions">
                                                        Donating / petitions
                                                </option>
                                                    <option value="Central Information">
                                                        Central Information
                                                </option>
                                                    <option value="Companies offering their services">
                                                        Companies offering their
                                                        services
                                                </option>
                                                    <option value="Donating">
                                                        Donating
                                                </option>
                                                    <option value="Handbooks and guides">
                                                        Handbooks and guides
                                                </option>
                                                    <option value="Health care">
                                                        Health care
                                                </option>
                                                    <option value="Homeschooling">
                                                        Homeschooling
                                                </option>
                                                    <option value="Music, arts, and culture">
                                                        Music, arts, and culture
                                                </option>
                                                    <option value="Reading and audiobooks">
                                                        Reading and audiobooks
                                                </option>
                                                    <option value="Volunteering in your community">
                                                        Volunteering in your
                                                        community
                                                </option>
                                                    <option value="Volunteering medically">
                                                        Volunteering medically
                                                </option>
                                                    <option value="Sports">
                                                        Sports
                                                </option>
                                                    <option value="Working from home">
                                                        Working from home
                                                </option>
                                                </Field>
                                                <br />
                                            </div>
                                        </div>
                                        <div className="boxes_main">
                                            <hr />
                                            <div className="feild_box">
                                                <p>Location</p>
                                                <input
                                                    type="text"
                                                    name="Location"
                                                    required
                                                    placeholder="Where are they based?"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.Location}
                                                    className={
                                                        errors.Location &&
                                                            touched.Location &&
                                                            errors.Location
                                                            ? "red_border"
                                                            : ""
                                                    }
                                                />
                                                <br />
                                            </div>
                                        </div>
                                        <div className="boxes_main">
                                            <hr />
                                            <div className="feild_box">
                                                <p>note</p>
                                                <input
                                                    type="text"
                                                    name="Description_EN"
                                                    required
                                                    placeholder="Tell us something cool about them"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.Description_EN}
                                                    className={
                                                        errors.Description_EN &&
                                                            touched.Link &&
                                                            errors.Link
                                                            ? "red_border"
                                                            : ""
                                                    }
                                                />
                                                <br />
                                            </div>
                                        </div>
                                        <div className="boxes_main">
                                            <hr />
                                        </div>
                                        <div className="Submit">
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                            >
                                                Submit
                                        </button>
                                        </div>
                                    </form>
                                </div>
                            )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};
export default Form;
