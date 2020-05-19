import React from "react";
import { Drawer, DrawerOverlay, DrawerContent } from "@chakra-ui/core";
import Filters from "./Filters";

const FilterDrawer = ({ isOpen, onClose }) => {
  return (
    <Drawer placement={"right"} onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent >
        <Filters closeButton onClose = {onClose} />
      </DrawerContent>
    </Drawer>
  );
};

export default FilterDrawer;
