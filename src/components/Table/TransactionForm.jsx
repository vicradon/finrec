import React from "react";
import { Formik, Field } from "formik";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  Select,
} from "@chakra-ui/core";

const TransactionForm = ({ initialValues }) => {
  const validateDescription = (value) => {
    if (!value) {
      return "Description is required";
    } else if (value.length > 30) {
      return "Description is too long";
    }
  };
  const validateAmount = (value) => {
    if (!value) {
      return "Amount is required";
    }
  };
  const validateCategory = (value) => {
    if (!value) {
      return "Category is required";
    }
  };
  const validatePaymentMode = (value) => {
    if (!value) {
      return "Payment mode is required";
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {(props) => (
        <form onSubmit={props.handleSubmit}>
          <Field name="category" validate={validateCategory}>
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.category && form.touched.category}
              >
                <FormLabel htmlFor="category">Category</FormLabel>

                <Select {...field} placeholder="Select Category">
                  <option value="feeding">Feeding</option>
                  <option value="clothing">Clothing</option>
                  <option value="entertainment">Entertainment</option>
                </Select>
                <FormErrorMessage>{form.errors.category}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="paymentMode" validate={validatePaymentMode}>
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.paymentMode && form.touched.paymentMode}
              >
                <FormLabel htmlFor="paymentMode">Payment Mode</FormLabel>

                <Select {...field} placeholder="Select Payment Mode">
                  <option value="cash">Cash</option>
                  <option value="debitCard">Debit Card</option>
                  <option value="creditCard">Credit Card</option>
                </Select>
                <FormErrorMessage>{form.errors.paymentMode}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="description" validate={validateDescription}>
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.description && form.touched.description}
              >
                <FormLabel htmlFor="description">Description</FormLabel>
                <Input
                  {...field}
                  id="description"
                  placeholder="Monthly cable subscription"
                />
                <FormErrorMessage>{form.errors.description}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="amount" validate={validateAmount}>
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.amount && form.touched.amount}
              >
                <FormLabel htmlFor="name">Amount</FormLabel>
                <Input
                  type="number"
                  {...field}
                  id="amount"
                  placeholder="2000"
                />
                <FormErrorMessage>{form.errors.amount}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Button
            mt={4}
            variantColor="blue"
            isLoading={props.isSubmitting}
            type="submit"
          >
            Submit
          </Button>
        </form>
      )}
    </Formik>
  );
};

export default TransactionForm;
