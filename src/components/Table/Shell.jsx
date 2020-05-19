import React from "react";
import {
  Flex,
  useDisclosure,
  Text,
  Checkbox,
  Grid,
  Icon,
  useColorMode,
} from "@chakra-ui/core";
import TableItem from "./TableItem";
import { useSelector } from "react-redux";
import styles from "./shell.module.css";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";

export const EmptyShell = ({ name }) => {
  return (
    <Flex
      direction="column"
      backgroundColor="white"
      boxShadow=""
      padding="0.5rem 1rem"
      width="100%"
    >
      <Flex>{name}</Flex>
      <Grid gridTemplateColumns="0.5fr 3fr 1.5fr 2fr 4fr 1fr" width="100%">
        <Checkbox />
        <Text>Category</Text>
        <Text>Date</Text>
        <Text>Payment Mode</Text>
        <Text>Description</Text>
        <Text>Amount</Text>
      </Grid>
      <Flex direction="column" justifyContent="center" alignItems="center">
        <p>Loading...</p>
      </Flex>
    </Flex>
  );
};

const Shell = ({ data, name }) => {
  const { width } = useSelector((state) => state.resizeReducer);
  const { currentlySelected } = useSelector((state) => state.financeReducer);

  const deleteColor = currentlySelected.length > 0 ? "red.500" : "gray.300";
  const editColor = currentlySelected.length === 1 ? "" : "gray.300";
  const {
    isOpen: editIsOpen,
    onOpen: editOnOpen,
    onClose: editClose,
  } = useDisclosure();
  const {
    isOpen: deleteIsOpen,
    onOpen: deleteOnOpen,
    onClose: deleteClose,
  } = useDisclosure();

  const { colorMode } = useColorMode();
  const tableHeaderColor = colorMode === 'light'? 'gray.700': 'gray.50'

  return (
    <Flex
      direction="column"
      backgroundColor={colorMode === "light" ? "white" : "gray"}
      boxShadow="0px 0px 15px -2px rgba(0,0,0,0.35)"
      padding="0.5rem 1rem"
      width="100%"
    >
      <Flex justify="space-between">
        <Text>{name}</Text>
        <Flex>
          <Icon
            color={editColor}
            mx="5px"
            aria-label="edit transaction"
            name="edit"
            cursor={Boolean(editColor) ? "" : "pointer"}
            onClick={Boolean(editColor) ? null : editOnOpen}
          />
          <Icon
            color={deleteColor}
            mx="5px"
            aria-label="delete transaction"
            name="delete"
            cursor={deleteColor === "red.500" ? "pointer" : ""}
            onClick={deleteColor === "red.500" ? deleteOnOpen : null}
          />
        </Flex>
      </Flex>
      <EditModal isOpen={editIsOpen} onClose={editClose} />
      <DeleteModal isOpen={deleteIsOpen} onClose={deleteClose} />
      <Grid marginBottom="0.5rem" className={styles.tableHead}>
        <Checkbox isIndeterminate={true} />
        <Text color={tableHeaderColor} fontWeight="600">
          Category
        </Text>
        {width > 1100 ? (
          <Text color={tableHeaderColor} fontWeight="600">
            Date
          </Text>
        ) : (
          ""
        )}
        <Text justifyItems="end" color={tableHeaderColor} fontWeight="600">
          Payment Mode
        </Text>
        {width > 1100 ? (
          <Text color={tableHeaderColor} fontWeight="600">
            Description
          </Text>
        ) : (
          ""
        )}
        <Text justifySelf="end" color={tableHeaderColor} fontWeight="600">
          Amount
        </Text>
      </Grid>
      <Grid rowGap=".8rem">
        {data.data.map((x, i) => {
          return <TableItem key={x.id} dataObject={x} />;
        })}
      </Grid>
    </Flex>
  );
};

export default Shell;
