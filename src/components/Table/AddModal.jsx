import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  // useDisclosure,
} from "@chakra-ui/core";
// import { useSelector } from "react-redux";
import TransactionForm from "./TransactionForm";

const AddModal = ({ isOpen, onClose }) => {
  const finalRef = React.useRef();

  return (
    <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add transaction</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <TransactionForm
            initialValues={{
              description: "",
              amount: "",
              category: "",
              paymentMode: "",
            }}
            mode="add"
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AddModal;
