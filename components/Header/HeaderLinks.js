/*eslint-disable*/
import React, {useContext} from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/nextjs-material-kit/components/headerLinksStyle.js";
import { signOut, useSession } from 'next-auth/client'

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  const [session, loading] = useSession()

  let userLinks
  if (session) {
    userLinks = [            
      <Button
      onClick={()=> {
        signOut()
      }}
      color="transparent"
      target="_blank"
      className={classes.navLink}
      >
        Sign Out
      </Button>
    ]
      session.user.gardens.map(function(garden, i){
        userLinks.push(<Button
          href={`/admin/${garden.id}`}>{garden.title}</Button>)
      })

  }
  return (
    <List className={classes.list}>

      {session ? 
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          buttonText={`Hello ${session.user.name}`}
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={userLinks}
        />
      </ListItem>
       : 
       <ListItem className={classes.listItem}>
        <Button
          href="/login"
          color="transparent"
          className={classes.navLink}
        >
          Sign In
        </Button>
     </ListItem>
       }
      <ListItem className={classes.listItem}>
        <Button
          href="/privacy"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          Privacy Policy
        </Button>
      </ListItem>
      {/* <ListItem className={classes.listItem}> */}
        {/*<Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>*/}
        {/* <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://twitter.com/CreativeTim?ref=creativetim"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/CreativeTim?ref=creativetim"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem> */}
    </List>
  );
}
