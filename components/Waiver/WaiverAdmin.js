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

export default function WaiverAdmin(props) {
  const classes = useStyles();
  const { waiver } = props;
  return (
    <Card>

      <CardBody>
        <div className={classes.typo}>
          <div className={classes.note}>
            <AssignmentIcon style={{textAlign: 'center'}} fontSize="large" />
            <Clearfix />
            Waiver
          </div>
        {waiver ? 
        <Info>
          <p className={classes.description}><strong>Title: </strong>{waiver.title}</p>
          <p className={classes.description}><strong>Dated: </strong>{waiver.date}</p>
          <p className={classes.description}><strong>Signed By: </strong>{waiver.users.length} volunteer</p>
        </Info>
        :
        <p className={classes.description}>This garden has no active waivers</p>
      
      }
        </div>
      </CardBody>
    </Card>
  );
}

WaiverAdmin.defaultProps = {
  iconColor: "gray"
};

WaiverAdmin.propTypes = {
  vertical: PropTypes.bool
};
