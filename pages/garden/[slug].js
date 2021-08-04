import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import { useRouter } from 'next/router'
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import styles from "assets/jss/nextjs-material-kit/pages/landingPage.js";
import Parallax from "components/Parallax/Parallax.js";

const fetcher = (url) => fetch(url).then((res) => res.json())
import useSwr from 'swr'

const dashboardRoutes = [];

const useStyles = makeStyles(styles);


const Garden = (props) => {
  const router = useRouter()
  const { data, error } = useSwr(
    router.query.slug ? `${process.env.STRAPI_URL}/garden?slug=${router.query.slug}` : null,
    fetcher
  )
  const classes = useStyles();
  const { ...rest } = props;
  if (!data) return <div>Loading...</div>
  let garden
  if (!data.length){
      garden = {
          title: "Garden Steward"
      }
  } else {
     garden = data[0]
  }
  console.log("data loading: ", data[0], router.query.slug, `${process.env.STRAPI_URL}/garden?slug=${router.query.slug}`)
  
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Garden Steward"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter responsive image={require("assets/img/bee-flower-gg.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>{garden.title}</h1>
              <h4>
                {garden.blurb}
              </h4>
              <br />
              <h4>Currently {garden.title} is looking for more volunteers! Are you interested? We organize through the Garden Steward app, so please take a moment and get started with the app from the links below. Once installed you're able to scan the QR code located at the garden to learn how to help!</h4>
              <a target="_blank" href='https://play.google.com/store/apps/details?id=com.sacshiki.gardenSteward&utm_source=steward-pages&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
                <img alt='Get it on Google Play' className={classes.playButton} src={require("assets/img/google-play-badge.png")}/></a>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <Footer />
    </div>
  )
}

export default Garden