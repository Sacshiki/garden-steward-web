import React, {useContext, useEffect} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer.js";
import GridContainer from "../components/Theme/Grid/GridContainer.js";
import GridItem from "../components/Theme/Grid/GridItem.js";
import Button from "../components/Theme/CustomButtons/Button.js";
import HeaderLinks from "../components/Header/HeaderLinks.js";
import Parallax from "../components/Theme/Parallax/Parallax.js";
import styles from "../assets/jss/nextjs-material-kit/pages/landingPage";

// Sections for this page
import ProductSection from "../pages-sections/LandingPage-Sections/ProductSection.js";

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();

  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        brand="Garden Steward"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter responsive image={require("../assets/img/bee-flower-gg.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>A Garden Everywhere.</h1>
              <h4>
                What if every city was so brimming with food that no one went hungry? If we harnessed every bit of our landscape that it provided as much as we could dream for. We would be living so abundantly it's hard to think life existing at all like it does now. Let's make this dream a reality shall we?
            </h4>
              <br />
              <a target="_blank" href='https://play.google.com/store/apps/details?id=com.sacshiki.gardenSteward&utm_source=steward-pages&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
                <img alt='Get it on Google Play' className={classes.playButton} src={require("../assets/img/google-play-badge.png")} />
              </a>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          {/* <WorkSection /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
