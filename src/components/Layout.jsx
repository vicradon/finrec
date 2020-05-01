import React from "react";
import {
  Button,
  Avatar,
  Box,
  Grid,
  Flex,
  Text,
  useColorMode,
  LightMode,
} from "@chakra-ui/core";
import { FaWallet } from "react-icons/fa";
import { Link } from "@reach/router";

const AsideNav = () => {
  return (
    <Grid
      height="100vh"
      width="200px"
      position="fixed"
      gridTemplateRows="1fr 4fr 4fr 3fr"
    >
      <LightMode>
        <Flex bg="gray.600" justify="space-evenly" align="center">
          <Avatar size="sm" name="F R" />
          <Text color="white" fontSize="2xl">
            FinRec
          </Text>
        </Flex>
      </LightMode>
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
        <Link to="/">
          <Button className="go-to-dashboard">Dashboard</Button>
        </Link>
        <Link to="/transactions">
          <Button className="go-to-transactions">Transactions</Button>
        </Link>
        <Link to="/settings">
          <Button className="go-to-profile">Settings</Button>
        </Link>
        <Link to="/about">
          <Button className="go-to-about">About</Button>
        </Link>
      </Flex>
    </Grid>
  );
};

const NavBar = () => {
  return (
    <Box bg="gray.600" color="white">
      <Text>FinRec</Text>
    </Box>
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
  const [width, setWidth] = React.useState(window.innerWidth);
  const { colorMode } = useColorMode();

  const myBgColor = {
    light: "#eef4f8",
    dark: "#1a202c",
  };

  window.addEventListener("resize", (e) => setWidth(e.target.innerWidth));

  return (
    <div>
      {width < 768 ? (
        <>
          <NavBar />
          <Box background={myBgColor[colorMode]} padding="1rem">
            {children}
          </Box>
        </>
      ) : (
        <>
          <AsideNav />
          <Box
            background={myBgColor[colorMode]}
            height="100%"
            marginLeft="200px"
            padding="1rem"
          >
            {children}
          </Box>
        </>
      )}
    </div>
  );
};

export default Layout;
