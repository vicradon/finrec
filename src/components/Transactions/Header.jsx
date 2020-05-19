import React from "react";
import { Flex, Input, Button, useDisclosure } from "@chakra-ui/core";
import { useSelector } from "react-redux";
import FilterDrawer from "./FilterDrawer";

const Header = () => {
  const width = useSelector((state) => state.resizeReducer.width);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex my="1rem" className="transactionHeader">
      <style>{`.transactionHeader *:not(:last-child) { margin-right: 1rem}`}</style>
      <Input placeholder="eggs and ham" />
      <Button>Add transaction</Button>
      {width > 900 ? "" : <Button onClick = {onOpen}>Filters</Button>}
      <FilterDrawer  isOpen = {isOpen} onClose = {onClose} />
    </Flex>
  );
};

export default Header;
