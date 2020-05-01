import React from "react";
import { Button, Avatar, Box, Grid, Flex, Text } from "@chakra-ui/core";
import { FaWallet } from "react-icons/fa";

const AsideNav = () => {
  return (
    <Grid
      height="100vh"
      width="200px"
      position="fixed"
      gridTemplateRows="1fr 4fr 4fr 3fr"
    >
      <Flex bg="#00000009" justify="space-evenly" align="center">
        <Avatar size="sm" name="F R" />
        <Text fontSize="2xl">FinRec</Text>
      </Flex>
      <Flex
        direction="column"
        justifyContent="space-evenly"
        align="center"
        className="userdetails"
      >
        <Avatar size="lg" name="Default User" />
        <Text fontSize="lg">Default User</Text>
        <Box display="flex" border={1} borderRadius={10} className="balance">
          <Box as={FaWallet}></Box>
          <Flex justify="center" alignItems="center">
            <Text currencyType></Text>
            <Text>3000</Text>
          </Flex>
          <hr />
        </Box>
      </Flex>
      <Flex align="center" justify="space-around" direction="column">
        <Button className="go-to-dashboard">Dashboard</Button>
        <Button className="go-to-transactions">Transactions</Button>
        <Button className="go-to-profile">Profile</Button>
        <Button className="go-to-about">About</Button>
      </Flex>
    </Grid>
  );
};

const DemoChildren = () => {
  return (
    <div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
        voluptatum rerum necessitatibus optio, laborum hic. Magni esse nobis
        voluptatum culpa sapiente necessitatibus reprehenderit beatae doloribus,
        inventore nulla dolore perspiciatis suscipit molestias laboriosam maxime
        similique assumenda delectus? Nisi incidunt accusamus, soluta
        consequuntur perspiciatis maxime quos autem repudiandae. Ullam,
        inventore. Deserunt distinctio error, explicabo consequatur vel, neque
        dolorem dolor doloremque sequi reprehenderit ut dolore quae cum et optio
        modi recusandae consequuntur est perspiciatis provident maxime qui
        aliquam. Aspernatur consequuntur nam, dolores, minima, atque ullam earum
        reprehenderit quidem est itaque blanditiis deserunt iusto asperiores?
        Doloribus reiciendis similique voluptate corrupti repudiandae enim
        suscipit dolore?
      </p>
    </div>
  );
};

const Layout = ({ children }) => {
  return (
    <div>
      <AsideNav />
      <Box marginLeft="200px">{children}</Box>
    </div>
  );
};

export default Layout;
