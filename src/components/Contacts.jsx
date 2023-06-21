import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Contacts = () => {
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        values
      );
      console.log(response.data);
      resetForm();
      setSubmitSuccess(true);
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 2800); 
    } catch (error) {
      console.error(error);
    }
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    phone: Yup.string()
      .required("Phone number is required")
      .test(
        "startsWith+380",
        "Should start with '+380'",
        (value) => value.startsWith("+380")
      )
      .matches(/^\+380\d{9}$/, "Invalid phone number"),
    message: Yup.string()
      .required("Message is required")
      .min(30, "Message should be at least 30 characters long"),
  });

  return (
    <div className="contacts">
      <div className="container">
        <div className="contacts__title">Contact Us</div>
        <div className="contacts__subtitle">
          Feel free to contact us with questions, potential partnerships or media inquiries
        </div>
        <div className="contacts__form">
          <Formik
            initialValues={{ name: "", phone: "", message: "" }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            <Form className="form_wrapper">
              <div className="upper-inputs">
                <div className="name-block">
                  <Field
                    className="name__input"
                    type="text"
                    name="name"
                    placeholder="Name"
                    autoComplete="off"
                  />{" "}
                  <br />
                  <ErrorMessage name="name" component="span" className="error" />
                </div>

                <div className="phone-block">
                  <Field
                    className="phone__input"
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    autoComplete="off"
                  />{" "}
                  <br />
                  <ErrorMessage name="phone" component="span" className="error" />
                </div>
              </div>

              <div className="textarea-block">
                <Field
                  className="textarea__input"
                  as="textarea"
                  name="message"
                  placeholder="Message"
                  autoComplete="off"
                /> 
            
                <ErrorMessage name="message" component="div" className="error" />
                {submitSuccess && (
                <div className="success-message">Sent successfully! Thank you!</div>
              )}
              </div>

             

              <button className="form-btn" type="submit">
                Submit
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
