import React from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/core";

const NotAuthenticatedMessage = () => {
  return (
    <Alert status="error">
      <AlertIcon />
      <AlertTitle mr={2}>You are not logged in.</AlertTitle>
      <AlertDescription>
         Log in to sync your data
      </AlertDescription>
    </Alert>
  );
};

export default NotAuthenticatedMessage;
