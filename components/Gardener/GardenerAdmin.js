import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import Card from "../Theme/Card/Card.js";
import CardBody from "../Theme/Card/CardBody.js";
import Info from "../Typography/Info.js";
import Clearfix from "../Theme/Clearfix/Clearfix";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import EmojiPeople from '@material-ui/icons/EmojiPeople';
import Divider from "@material-ui/core/Divider";

import styles from "../../assets/jss/nextjs-material-kit/pages/componentsSections/typographyStyle.js";

const useStyles = makeStyles(styles);

export default function GardenerAdmin(props) {
  const classes = useStyles();
  const { title, garden } = props;
  console.log(garden.users)
  return (
    <Card>

      <CardBody>
        <div className={classes.typo}>
          <div className={classes.note}>
            <EmojiPeople style={{textAlign: 'center'}} fontSize="large" />
            <Clearfix />
            {title}
          </div>
        {garden.users.length ? 
            <Info>
            {garden.users.map(u=> (
              <>
              <p className={classes.description}><strong>Name: a</strong> {u.firstName} {u.lastName}</p>
              <p className={classes.description}>{u.bio}</p>
              <p className={classes.description}><strong>Registered: </strong>{u.createdAt}</p>
              <Divider />
              </>
            ))}
            </Info>
          :
          <Info>
            <p className={classes.description}><strong>No Leaders yet!</strong></p>
          </Info>
    
        }
        </div>
      </CardBody>
    </Card>
  );
}

GardenerAdmin.defaultProps = {
  iconColor: "gray"
};

GardenerAdmin.propTypes = {
  vertical: PropTypes.bool
};
