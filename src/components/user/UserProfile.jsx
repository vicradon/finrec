import React, { useContext } from "react";
import { Box, Avatar, Flex, Text } from "@chakra-ui/core";
import FinancialCatchPhrase from "./FinancialCatchPhrase";
import { FaSignOutAlt, FaSignInAlt } from "react-icons/fa";
import NotAuthenticatedMessage from "./NotAuthenticatedMessage";
import { Auth0Context } from "../../contexts/Auth0Context";

const UserProfile = () => {
  const auth0 = useContext(Auth0Context);
  return (
    <Box>
      {auth0.message}
      <Box
        bgPos="center"
        bgRepeat="no-repeat"
        height="200px"
        backgroundImage="url(../../images/bicycles.png)"
        backgroundColor="red"
        top="0"
        left="0"
        position="absolute"
      ></Box>
      <Box marginTop="100px"></Box>
      <Flex
        height="200px"
        direction="column"
        justifyContent="space-evenly"
        align="center"
      >
        <Avatar size="2xl" name="D U" />
        <Text fontSize="lg">Default User</Text>
        <Flex alignItems="center">
          <FinancialCatchPhrase />
        </Flex>
        {true ? <NotAuthenticatedMessage /> : ""}
      </Flex>
      <Box height="300px"></Box>
      {true ? (
        <Flex
          onClick={auth0.loginWithRedirect}
          alignItems="center"
          justifyContent="flex-end"
          cursor = "pointer"
        >
          <Text>Log in</Text>
          <Box margin="0 10px" as={FaSignInAlt}></Box>
        </Flex>
      ) : (
        <Flex alignItems="center" justifyContent="flex-end">
          <Text>Sign out</Text>
          <Box margin="0 10px" as={FaSignOutAlt}></Box>
        </Flex>
      )}
    </Box>
  );
};

export default UserProfile;
