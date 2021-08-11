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
import AssignmentIcon from '@material-ui/icons/Assignment';

import styles from "../../assets/jss/nextjs-material-kit/pages/componentsSections/typographyStyle.js";

const useStyles = makeStyles(styles);

export default function GardenerAdmin(props) {
  const classes = useStyles();
  const { title, users } = props;
  return (
    <Card>

      <CardBody>
        <div className={classes.typo}>
          <div className={classes.note}>
            <AssignmentIcon style={{textAlign: 'center'}} fontSize="large" />
            <Clearfix />
            {title}
          </div>
        {users.length ? 
            <Info>
            <p className={classes.description}><strong>Name:</strong></p>
            </Info>
        :
        <p className={classes.description}>This garden has no {title}</p>
      
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
