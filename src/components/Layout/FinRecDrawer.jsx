import React from "react";
import { Drawer, DrawerOverlay, DrawerContent } from "@chakra-ui/core";
import Aside from "./Aside";

const FinRecDrawer = ({ isOpen, onClose }) => {
  return (
    <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <Aside closeButton onClose = {onClose} width="100%" />
      </DrawerContent>
    </Drawer>
  );
};

export default FinRecDrawer;
