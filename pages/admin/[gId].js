import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import { useRouter } from 'next/router'
// core components
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import WaiverAdmin from "../../components/Waiver/WaiverAdmin.js";
import GardenerAdmin from "../../components/Gardener/GardenerAdmin";
import GridContainer from "../../components/Theme/Grid/GridContainer.js";
import GridItem from "../../components/Theme/Grid/GridItem.js";
import Button from "../../components/Theme/CustomButtons/Button.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import styles from "../../assets/jss/nextjs-material-kit/pages/landingPage.js";
import Parallax from "../../components/Theme/Parallax/Parallax.js";
import CustomInput from "../../components/Theme/CustomInput/CustomInput.js";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

const fetcher = (url) => fetch(url).then((res) => res.json())
import useSwr from 'swr'

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

const GardenAdmin = (props) => {
  const router = useRouter()
  const classes = useStyles()

  const handleChange = () => {c=> {
    console.log("changed: ", c)
  }}
  const saveGarden = () => {
    console.log('saving')
  }
  const { data, error } = useSwr(
    router.query.gId ? `${process.env.NEXT_PUBLIC_STRAPI_URL}/garden/${router.query.gId}` : null,
    fetcher
  )
    console.log(data, `${process.env.NEXT_PUBLIC_STRAPI_URL}/garden/${router.query.gId}`)
  const { ...rest } = props;
  if (!data) return <div>Loading...</div>
  let garden
  if (!data){
      garden = {
          title: "Garden Steward"
      }
  } else {
     garden = data
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
        {...rest}
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
                      value={garden.blurb}
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
                  <GardenerAdmin users={garden.leaders} title="Garden Leaders"/>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <Footer />
    </div>
  )
}

export default GardenAdmin