import React from "react";
import { Formik, Field } from "formik";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
} from "@chakra-ui/core";

function TransactionForm() {
  function validateName(value) {
    let error;
    if (!value) {
      error = "Name is required";
    } else if (value !== "Naruto") {
      error = "Jeez! You're not a fan 😱";
    }
    return error;
  }
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Email is required";
    } else if (value !== "email") {
      error = "Wrong email";
    }
    return error;
  }

  return (
    <Formik
      initialValues={{ name: "Sasuke", amount: 459 }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {(props) => (
        <form onSubmit={props.handleSubmit}>
          <Field name="name" validate={validateName}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                <FormLabel htmlFor="name">First name</FormLabel>
                <Input {...field} id="name" placeholder="name" />
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="email" validate={validateEmail}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.email && form.touched.email}>
                <FormLabel htmlFor="name">Email</FormLabel>
                <Input type = "number" {...field} id="email" placeholder="email" />
                <FormErrorMessage>{form.errors.email}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Button
            mt={4}
            variantColor="teal"
            isLoading={props.isSubmitting}
            type="submit"
          >
            Submit
          </Button>
        </form>
      )}
    </Formik>
  );
}

export default TransactionForm;

/*
import React from "react";
import { Formik, Field } from "formik";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
} from "@chakra-ui/core";

const TransactionForm = ({ mode, initialValues }) => {
  function validateDescription(value) {
    let cleanValue;
    if (value) {
      cleanValue = `${value}`.trim();
      if (cleanValue.length > 20) {
        return "Description is too long";
      }
    }
  }
  function validateAmount(value) {
    let cleanValue;
    if (value) {
      cleanValue = `${value}`.trim();
      if (cleanValue.length === 0) {
        return "You supplied no value!";
      }
      if (typeof cleanValue !== "number") {
        return "You supplied a non-numeric value";
      }
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        console.log(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
      }}
    >
      {(props) => (
        <form onSubmit={props.handleSubmit}>
          <Field name="description" validate={validateDescription}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                <FormLabel htmlFor="description">Description</FormLabel>
                <Input
                  {...field}
                  id="description"
                  placeholder="Monthly TV subscription"
                />
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="amount" validate={validateAmount}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                <FormLabel htmlFor="amount">Amount</FormLabel>
                <Input {...field} id="amount" placeholder="2000" />
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Button
            mt={4}
            variantColor="blue"
            isLoading={props.isSubmitting}
            type="submit"
          >
            {mode === "edit" ? "Update" : "Add"}
          </Button>
        </form>
      )}
    </Formik>
  );
};

export default TransactionForm;
*/
