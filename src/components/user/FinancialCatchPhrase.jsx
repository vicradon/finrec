import React from "react";
import {
  Flex,
  Editable,
  EditableInput,
  EditablePreview,
  IconButton,
  ButtonGroup,
  Tooltip,
} from "@chakra-ui/core";

const FinancialCatchPhrase = () => {
  /* Here's a custom control */
  const EditableControls = ({
    isEditing,
    onSubmit,
    onCancel,
    onRequestEdit,
  }) => {
    return isEditing ? (
      <ButtonGroup isInline justifyContent="center" size="xs">
        <IconButton icon="check" onClick={onSubmit} />
        <IconButton icon="close" onClick={onCancel} />
      </ButtonGroup>
    ) : (
      <Flex justifyContent="center">
        <IconButton size="xs" icon="edit" onClick={onRequestEdit} />
      </Flex>
    );
  };

  return (
    <Editable
      textAlign="center"
      defaultValue="Always follow the money"
      fontSize="sm"
      isPreviewFocusable={true}
      submitOnBlur={true}
    >
      {(props) => (
        <Tooltip hasArrow bg="gray.500" label="Financial Catch Phrase">
          <Flex>
            <EditablePreview />
            <EditableInput />
            <EditableControls {...props} />
          </Flex>
        </Tooltip>
      )}
    </Editable>
  );
};

export default FinancialCatchPhrase;
