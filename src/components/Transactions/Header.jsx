import React from "react";
import { Flex, Input, Button, useDisclosure } from "@chakra-ui/core";
import { useSelector } from "react-redux";
import FilterDrawer from "./FilterDrawer";
import AddModal from "../Table/AddModal";

const Header = () => {
  const { width, bp2 } = useSelector((state) => state.resizeReducer);
  const {
    isOpen: filterIsOpen,
    onOpen: filterOnOpen,
    onClose: filterOnClose,
  } = useDisclosure();
  const {
    isOpen: addIsOpen,
    onOpen: addOnOpen,
    onClose: addOnClose,
  } = useDisclosure();

  return (
    <Flex my="1rem" className="transactionHeader">
      <style>{`.transactionHeader *:not(:last-child) { margin-right: 1rem}`}</style>
      <Input placeholder="eggs and ham" />
      <Button fontSize={width > bp2 ? "1vw" : "20px"} onClick={addOnOpen}>
        {width > bp2 ? "Add transaction" : "+"}
      </Button>
      {width > 900 ? "" : <Button onClick={filterOnOpen}>Filters</Button>}
      <FilterDrawer isOpen={filterIsOpen} onClose={filterOnClose} />
      <AddModal isOpen={addIsOpen} onClose={addOnClose} />
    </Flex>
  );
};

export default Header;
