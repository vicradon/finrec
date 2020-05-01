import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Box, Avatar } from "@material-ui/core";
import { AccountBalance } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    gridTemplateColumns: "2fr 10fr",
    minHeight: "100vh",
  },
  aside: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const AsideNav = () => {
  const cs = useStyles();
  return (
    <div className={cs.aside}>
      <h1>FinRec</h1>
      <div className="userdetails">
        <Avatar className={cs.large}>DU</Avatar>
        <p>Default User</p>
        <Box display="flex" border={1} borderRadius = {10} className="balance">
          <AccountBalance />
        </Box>
        <div className="current-balance"></div>
      </div>
      <hr />
      <Box display="flex" flexDirection="column" className="nav-buttons">
        <Button className="go-to-dashboard">Dashboard</Button>
        <Button className="go-to-transactions">Transactions</Button>
        <Button className="go-to-profile">Profile</Button>
        <Button className="go-to-about">About</Button>
      </Box>
    </div>
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
  const cs = useStyles();
  return (
    <div className={cs.root}>
      <AsideNav />
      <DemoChildren />
    </div>
  );
};

export default Layout;
