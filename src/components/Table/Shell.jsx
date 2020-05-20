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
import { useSelector, useDispatch } from "react-redux";
import styles from "./shell.module.css";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";

export const EmptyShell = ({ name, children }) => {
  const { width } = useSelector((state) => state.resizeReducer);
  const { currentlySelected, dataPoints } = useSelector(
    (state) => state.financeReducer
  );
  const dispatch = useDispatch();

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
  const tableHeaderColor = colorMode === "light" ? "gray.700" : "gray.50";

  /*
    if every item in datapoints is checked, the master should be checked
    if not every item is checked, it should be indeterminate
    if it is clicked when it is indeterminate, all should become checked and it should become checked too
    if it is clicked when it is checked, all should be unchecked, including itself
    if 
  */

  let isChecked;
  let isIndeterminate = false;

  if (
    currentlySelected.length > 0 &&
    !dataPoints.data.every((x) => x.isChecked)
  ) {
    isIndeterminate = true;
  }
  if (dataPoints.data.every((x) => x.isChecked)) {
    isChecked = true;
  }

  const toggleAll = (event) => {
    if (currentlySelected.length > 0) {
      dataPoints.data.forEach((x) => {
        if (!x.isChecked) {
          x.toggleCheck();
        }
      });
      dispatch({ type: "REPAINT_UI" });
    } else if (dataPoints.data.every((x) => x.isChecked)) {
      isChecked = false;
      isIndeterminate = false;
      dataPoints.data.forEach((x) => x.toggleCheck());
      dispatch({ type: "REPAINT_UI" });
    }
    // else if (isIndeterminate && dataPoints.data.every((x) => !x.isChecked)) {
    //   isChecked = true;
    //   isIndeterminate = false;
    //   dataPoints.data.forEach((x) => x.toggleCheck());
    //   dispatch({ type: "REPAINT_UI" });
    // }
    else if (dataPoints.data.every((x) => !x.isChecked)) {
      isChecked = true;
      dataPoints.data.forEach((x) => x.toggleCheck());
      dispatch({ type: "REPAINT_UI" });
    }
    // else {
    //   dataPoints.data.forEach((x) => x.toggleCheck());
    //   dispatch({ type: "REPAINT_UI" });
    // }
  };

  return (
    <Flex
      direction="column"
      backgroundColor={colorMode === "light" ? "white" : "gray"}
      boxShadow="0px 0px 15px -2px rgba(0,0,0,0.35)"
      padding="0.5rem 1rem"
      width="100%"
      borderRadius="10px"
    >
      <Flex m=".5rem 0 1rem 0" justify="space-between">
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
        <Checkbox
          isIndeterminate={isIndeterminate}
          onChange={toggleAll}
          isChecked={isChecked}
        />
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
      {children ? children : ""}
    </Flex>
  );
};

const Shell = ({ data, name }) => {
  const { width } = useSelector((state) => state.resizeReducer);
  const { currentlySelected, dataPoints } = useSelector(
    (state) => state.financeReducer
  );
  const dispatch = useDispatch();

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
  const tableHeaderColor = colorMode === "light" ? "gray.700" : "gray.50";

  /*
    if every item in datapoints is checked, the master should be checked
    if not every item is checked, it should be indeterminate
    if it is clicked when it is indeterminate, all should become checked and it should become checked too
    if it is clicked when it is checked, all should be unchecked, including itself
    if 
  */

  let isChecked;
  let isIndeterminate = false;

  if (
    currentlySelected.length > 0 &&
    !dataPoints.data.every((x) => x.isChecked)
  ) {
    isIndeterminate = true;
  }
  if (dataPoints.data.every((x) => x.isChecked)) {
    isChecked = true;
  }

  const toggleAll = (event) => {
    if (currentlySelected.length > 0) {
      dataPoints.data.forEach((x) => {
        if (!x.isChecked) {
          x.toggleCheck();
        }
      });
      dispatch({ type: "REPAINT_UI" });
    } else if (dataPoints.data.every((x) => x.isChecked)) {
      isChecked = false;
      isIndeterminate = false;
      dataPoints.data.forEach((x) => x.toggleCheck());
      dispatch({ type: "REPAINT_UI" });
    }
    // else if (isIndeterminate && dataPoints.data.every((x) => !x.isChecked)) {
    //   isChecked = true;
    //   isIndeterminate = false;
    //   dataPoints.data.forEach((x) => x.toggleCheck());
    //   dispatch({ type: "REPAINT_UI" });
    // }
    else if (dataPoints.data.every((x) => !x.isChecked)) {
      isChecked = true;
      dataPoints.data.forEach((x) => x.toggleCheck());
      dispatch({ type: "REPAINT_UI" });
    }
    // else {
    //   dataPoints.data.forEach((x) => x.toggleCheck());
    //   dispatch({ type: "REPAINT_UI" });
    // }
  };

  return (
    <Flex
      direction="column"
      backgroundColor={colorMode === "light" ? "white" : "gray"}
      boxShadow="0px 0px 15px -2px rgba(0,0,0,0.35)"
      padding="0.5rem 1rem"
      width="100%"
      borderRadius="10px"
    >
      <Flex m=".5rem 0 1rem 0" justify="space-between">
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
        <Checkbox
          isIndeterminate={isIndeterminate}
          onChange={toggleAll}
          isChecked={isChecked}
        />
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
