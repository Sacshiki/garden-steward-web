import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { makeStyles } from "@material-ui/core/styles";
import Header from "../components/Header/Header.js";
import HeaderLinks from "../components/Header/HeaderLinks.js";
import Footer from "../components/Footer/Footer.js";
import { useRouter } from 'next/router'
import GridContainer from "../components/Theme/Grid/GridContainer.js";
import GridItem from "../components/Theme/Grid/GridItem.js";
import Card from "../components/Theme/Card/Card.js";

import styles from "../assets/jss/nextjs-material-kit/pages/componentsSections/loginStyle.js";

const useStyles = makeStyles(styles);

export default function ContactPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const [pass, setPass] = React.useState('')
  const [passConf, setPassConf] = React.useState('')
  const [error, setError] = React.useState(false)
  const [disabled, setDisabled] = React.useState(false)

  const router = useRouter()
  // const queryParams = router.query;
  const {code}= router.query
  if (!code && !disabled) {
    setDisabled(true)
    setError("Something is wrong. Please come back from the link in your email.")
  }



  return (
    <div>
      <Header
        brand="Garden Steward"
        rightLinks={<HeaderLinks />}
        fixed
        color="black"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />

      <div className={classNames(classes.main, classes.mainRaised)}>
      <div className={classes.section}>

      <div className={classNames(classes.container,"contactform")}>

            <iframe width="550" height="575" src="https://cdn.forms-content.sg-form.com/c519ddcb-0c48-11ec-9088-ba45a34625b6"/>
      </div>
    </div>
      </div>
      <Footer />
    </div>
  );
}
