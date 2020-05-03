import React from "react";
import {
  Button,
  Avatar,
  Box,
  Flex,
  Text,
  LightMode,
  CloseButton
} from "@chakra-ui/core";

import { FaWallet } from "react-icons/fa";
import { Link } from "@reach/router";


const Aside = ({width, closeButton, onClose}) => {
  return (
    <Box overflow = "auto" width={width || "200px"} position="fixed" height="100vh">
      <LightMode>
        <Flex height="60px" bg="gray.600" justify="space-evenly" align="center">
          <Avatar size="sm" name="F R" />
          <Text color="white" fontSize="2xl">
            FinRec
          </Text>
          {
            closeButton ?
            <CloseButton onClick = {onClose}  />: ''
          }
        </Flex>
      </LightMode>

      <Flex
        direction="column"
        justifyContent="space-evenly"
        align="center"
        height="200px"
        margin = "2rem 0"
      >
        <Avatar size="xl" name="Default User" />
        <Text fontSize="lg">Default User</Text>
        <Box alignItems = "center" width = "80px" justifyContent = "space-around" display="flex" border={1} borderRadius={10} className="balance">
          <Box as={FaWallet}></Box>
          <Flex justifyContent="center" alignItems="center">
            <Text currencyType>N</Text>
            <Text>3000</Text>
          </Flex>
          <hr />
        </Box>
      </Flex>

      <Flex
        height="200px"
        alignItems="center"
        justifyContent="space-evenly"
        direction="column"
      >
        <Link to="/">
          <Button className="go-to-dashboard">Dashboard</Button>
        </Link>
        <Link to="/transactions">
          <Button className="go-to-transactions">Transactions</Button>
        </Link>
        <Link to="/settings">
          <Button className="go-to-profile">Settings</Button>
        </Link>
        <Link to="/about">
          <Button className="go-to-about">About</Button>
        </Link>
      </Flex>
    </Box>
  );
};


export default Aside