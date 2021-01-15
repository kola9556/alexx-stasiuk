import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import { Formik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { media } from "../utils";

const StyledForm = styled.form`
  width: 80%;
`;

const StyledInput = styled.input`
  display: block;
  position: relative;
  border: 0.2rem solid ${({ theme }) => theme.navyText};
  border-radius: 0.8rem;
  background: ${({ theme }) => theme.pinkBackground};
  font-size: 1.6rem;
  height: ${({ as }) => (as ? "20vh" : "auto")};
  width: ${({ as }) => (as ? "100%" : "85%")};

  z-index: 2000;

  ${media.tablet`
    font-size: 2rem; 
  `}
`;

const StyledLabel = styled.label`
  margin: 2rem 0 1rem;
  color: ${({ theme }) => theme.navyText};
  display: block;
  font-size: 1.6rem;
  font-weight: bold;
`;

const ButtonsFrame = styled.div`
  margin: 0;
  margin-top: 3rem;
  padding: 0;
  width: 12rem;
  height: 3.8rem;
  border: 0.2rem solid ${({ theme }) => theme.navyText};
  border-radius: 0.7rem;

  ${media.tablet`width: 20rem;
    height: 5rem;`}
`;

const Button = styled.button`
  margin: 0;
  padding: 0;
  width: 102%;
  height: 110%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-decoration: none;
  font-size: 1.8rem;
  color: white;
  background-color: ${({ theme }) => theme.navyText};
  border-radius: 0.7rem;
  position: relative;
  bottom: 2px;
  right: 1px;
  transform: translate(-10px, -10px);
  transition: transform 0.5s;

  :hover {
    transform: translate(0, 0);
  }

  :active {
    background-color: ${({ theme }) => theme.pinkBackground};
    color: ${({ theme }) => theme.navyText};
    border: 3px solid ${({ theme }) => theme.navyText};
  }

  ${media.tablet` font-size: 3rem;`}
`;

const StyledContainer = styled(ToastContainer)`
  .Toastify__toast--success {
    background: ${({ theme }) => theme.smokePink};
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    height: 15vh;
    width: 80%;
    margin-bottom: 1rem;
    ${media.tablet`width: auto;
    margin-bottom:0;`}
  }
`;

const StyledError = styled.p`
  font-size: 1.4rem;
  padding: 1rem 3rem 0.5rem 3rem;
  border-radius: 0.5rem;
  display: inline;
  width: 50%;
  color: white;
  background: ${({ theme }) => theme.navyText};
`;

const ContactForm = () => {
  const toastifySuccess = () => {
    toast.success(
      "Email sent! I'll be back with a reply in the blink of an eye!",
      {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        className: "submit-feedback success",
      }
    );
  };

  return (
    <Formik
      initialValues={{ email: "", name: "", message: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }

        if (!values.name) {
          errors.name = "required";
        }

        if (!values.message) {
          errors.message = "required";
        }
        return errors;
      }}
      onSubmit={(values, { resetForm }) => {
        const myData = {
          name: values.name,
          email: values.email,
          message: values.message,
        };

        emailjs
          .send(
            process.env.GATSBY_SERVICE_ID,
            process.env.GATSBY_TEMPLATE_ID,
            myData,
            process.env.GATSBY_USER_ID
          )
          .then((result) => console.log(result.text))
          .catch((error) => console.log("Failed", error.text));

        toastifySuccess();
        resetForm();
      }}
    >
      {({
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        errors,
        touched,
      }) => (
        <>
          <StyledForm onSubmit={handleSubmit} id="myForm">
            <StyledLabel htmlFor="name">Name</StyledLabel>
            <StyledInput
              id="name"
              type="name"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            {errors.name && touched.name && (
              <StyledError>{errors.name}</StyledError>
            )}
            <StyledLabel htmlFor="e-mail">E-mail</StyledLabel>
            <StyledInput
              id="email"
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && (
              <StyledError>{errors.email}</StyledError>
            )}
            <StyledLabel>Message</StyledLabel>
            <StyledInput
              as="textarea"
              type="message"
              name="message"
              id="message"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.message}
            />
            {errors.message && touched.message && (
              <StyledError>{errors.message}</StyledError>
            )}
            <ButtonsFrame>
              <Button type="submit" disabled={isSubmitting}>
                send message
              </Button>
            </ButtonsFrame>
          </StyledForm>
          <StyledContainer />
        </>
      )}
    </Formik>
  );
};

export default ContactForm;
