import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import EmojiNatureIcon from '@material-ui/icons/EmojiNature';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
// core components
import GridContainer from "../../components/Theme/Grid/GridContainer.js";
import GridItem from "../../components/Theme/Grid/GridItem.js";
import InfoArea from "../../components/Theme/InfoArea/InfoArea.js";
import Image from 'next/image'
import styles from "../../assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">

        <GridItem xs={12} sm={12} md={8}>
        <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <h2 className={classes.title}>Let{"'"}s talk gardening</h2>
          <h5 className={classes.description}>
            After starting a garden in a high pedestrian traffic hill in Oakland California I noticed that there were a lot of people that wanted to get involved, but I didn't have a good solution on how to put them to work. This is the solution on getting volunteers educated and organized to make sure things can be accomplished without the oversite and time commitment it would otherwise require. 
          </h5>
          </GridItem>

          <GridItem xs={12} sm={12} md={6}>
            <InfoArea
              title="Gardens"
              description="Getting involved in the creation of food is magical. Become a member of multiple gardens in your area and be the most helpful where it's most needed."
              icon={EmojiNatureIcon}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <InfoArea
              title="Volunteers Wanted"
              description="Your neighborhood rocks, but it needs our help to make it the best it can be. Join other forward-thinking community members with picking up some of the much needed garden tasks on your own, and then join in on the volunteer days as the arise!"
              icon={AccessibilityNewIcon}
              iconColor="success"
              vertical
            />
          </GridItem>
        </GridContainer>

        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
            <Image layout='intrinsic' width={250} height={500} src={require("../../assets/img/gspixel1x.png")} />
        </GridItem>
      </GridContainer>
      <div>
      </div>
    </div>
  );
}
