import React from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  // useDisclosure,
} from "@chakra-ui/core";
import { useSelector } from "react-redux";
import TransactionForm from "./TransactionForm";

const EditModal = ({ isOpen, onClose }) => {
  const finalRef = React.useRef();
  const { currentlySelected } = useSelector((state) => state.financeReducer);
  const getFormData = (data) => {
    console.log(data)
  }

  return (
    <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit transaction</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <TransactionForm initialValues = {{desription: "some description", amount: 2000}} mode="edit" />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default EditModal;
