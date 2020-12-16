import React from "react";
import styled from "styled-components";
import { Formik } from "formik";
import { media } from "../utils";

const StyledForm = styled.form`
  width: 80%;
`;

const StyledInput = styled.input`
  display: block;
  border: 0.2rem solid ${({ theme }) => theme.navyText};
  border-radius: 0.8rem;
  background: none;
  font-size: 1.6rem;
  height: ${({ as }) => (as ? "20vh" : "auto")};
  width: ${({ as }) => (as ? "100%" : "85%")};
  margin-bottom: ${({ as }) => as && "40px"};

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
  display: inline-block;
  margin: 0;
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

const ContactForm = () => {
  return (
    <Formik
      initialValues={{ email: "", name: "", message: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(
            `The message has been sent to: ${JSON.stringify(
              values.name,
              null,
              2
            )}`
          );
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <StyledForm onSubmit={handleSubmit}>
          <StyledLabel htmlFor="name">Name</StyledLabel>
          <StyledInput
            id="name"
            type="name"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />
          <StyledLabel htmlFor="e-mail">E-mail</StyledLabel>
          <StyledInput
            id="email"
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
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
          <ButtonsFrame>
            <Button type="submit" disabled={isSubmitting}>
              send message
            </Button>
          </ButtonsFrame>
        </StyledForm>
      )}
    </Formik>
  );
};

export default ContactForm;
