import React from "react";
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import { useRouter } from 'next/router'
// core components
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import WaiverAdmin from "../../components/Waiver/WaiverAdmin.js";
import GardenerAdmin from "../../components/Gardener/GardenerAdmin";
import TasksAdmin from "../../components/Tasks/TasksAdmin";
import GridContainer from "../../components/Theme/Grid/GridContainer.js";
import GridItem from "../../components/Theme/Grid/GridItem.js";
import Button from "../../components/Theme/CustomButtons/Button.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import styles from "../../assets/jss/nextjs-material-kit/pages/landingPage.js";
import Parallax from "../../components/Theme/Parallax/Parallax.js";
import CustomInput from "../../components/Theme/CustomInput/CustomInput.js";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { useSession, signIn, signOut } from "next-auth/client"
import {getGarden, updateGarden} from "../../controllers/GardenController"
import { SettingsSystemDaydreamRounded } from "@material-ui/icons";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

const GardenAdmin = (props) => {
  const router = useRouter()
  const classes = useStyles()
  const [session] = useSession()
  const [loading, setLoading] = React.useState(false);
  const [blurb, setBlurb] = React.useState(false);
  const [garden, setGarden] = React.useState({title: "Garden Steward"});

  const handleChange = e => {

    console.log("changed: ", e.target.value)
    setBlurb(e.target.value)

  }

  const saveGarden = () => {
    console.log('saving')
    setLoading(true)
    updateGarden(session,garden.id,{blurb:blurb}).then(res=>{
      setLoading(false)
    })
  }

  if (!garden || !garden.id ) {
    getGarden(session, router.query.gId).then(g => {
      console.log("received garden: ", g)
      if (g && g.id) {
        setGarden(g)
        setBlurb(g.blurb)
      }
    })
    return <div>Loading...</div>
  }
  
  console.log("data loading: ", garden)
  
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
      />
      <Parallax filter responsive image={require("../../assets/img/bee-flower-gg.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>{garden.title}</h1>
              <TextareaAutosize aria-label="Garden Blurb" minrows={3} style={{width:500}} placeholder={`${garden.title} needs a blurb!`}
                      labelText="Your Garden Blurb"
                      name="blurb"
                      id="blurb"
                      value={blurb}
                      onChange={handleChange}
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  <br />
                  <Button
                    onClick={saveGarden}
                    color="secondary" 
                    size="sm">
                    Submit
                  </Button>

                  <WaiverAdmin waiver={garden.waiver}/>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
        <GardenerAdmin garden={garden} title="Gardeners" session={session} />
                  <TasksAdmin garden={garden} title="Tasks"/>
          </div>
      </div>

      <Footer />
    </div>
  )
}

export default GardenAdmin