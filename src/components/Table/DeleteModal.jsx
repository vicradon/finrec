import React from "react";
import {
  Button,
  // Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  // useDisclosure,
} from "@chakra-ui/core";

const DeleteModal = ({ isOpen, onClose }) => {
  const finalRef = React.useRef();

  return (
    <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Delete transactions</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, veritatis, perspiciatis illum earum explicabo velit, sunt recusandae iure placeat dolores molestias ea modi.</p>
        </ModalBody>

        <ModalFooter>
          <Button variantColor="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="ghost">Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DeleteModal;
