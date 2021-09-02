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
import ListAltIcon from '@material-ui/icons/ListAlt';
import Divider from "@material-ui/core/Divider";

import styles from "../../assets/jss/nextjs-material-kit/pages/componentsSections/typographyStyle.js";

const useStyles = makeStyles(styles);

export default function TasksAdmin(props) {
  const classes = useStyles();
  const { title, garden } = props;
  console.log(garden.recurringtasks)

  const getFrequency = (task) => {
      if (task.always_available) {
          return "Always"
      } else {
          return task.frequency
      }
  }
  return (
    <Card variant="outlined">

      <CardBody>
        <div className={classes.typo}>
          <div className={classes.note}>
            <ListAltIcon style={{textAlign: 'center'}} fontSize="large" />
            <Clearfix />
            {title}
          </div>
        {garden.recurringtasks.length ? 
            <Info>
            {garden.recurringtasks.map(t=> (
              <div key={t.id} className="taskLink" >
                <a href={"task/"+t.id}>
                <p className={classes.description}><strong>Title: </strong> {t.title}</p>
                <p className={classes.description}>{t.overview}</p>
                <p className={classes.description}><strong>Repeat: </strong>{getFrequency(t)}</p>
              </a>
              <Divider />
              </div>
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

TasksAdmin.defaultProps = {
  iconColor: "gray"
};

TasksAdmin.propTypes = {
  vertical: PropTypes.bool
};
