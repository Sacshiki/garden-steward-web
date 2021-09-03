import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import Danger from "../components/Typography/Danger.js";
import Header from "../components/Header/Header.js";
import HeaderLinks from "../components/Header/HeaderLinks.js";
import Footer from "../components/Footer/Footer.js";
import { useRouter } from 'next/router'
import GridContainer from "../components/Theme/Grid/GridContainer.js";
import GridItem from "../components/Theme/Grid/GridItem.js";
import Button from "../components/Theme/CustomButtons/Button";
import Card from "../components/Theme/Card/Card.js";
import CardBody from "../components/Theme/Card/CardBody.js";
import CardFooter from "../components/Theme/Card/CardFooter.js";
import {InputAdornment } from '@material-ui/core';
import CustomInput from "../components/Theme/CustomInput/CustomInput.js";

import styles from "../assets/jss/nextjs-material-kit/pages/componentsSections/loginStyle.js";

const useStyles = makeStyles(styles);

export default function ResetPassword(props) {
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

  const handlePassChange = event => {
    error ? setError(false) : null
    setPass(event.target.value)
  }
  const handlePassConfChange = event => {
    error ? setError(false) : null
    setPassConf(event.target.value)
  }

  const resetPass = event => {
    event.preventDefault()
    console.log(pass.length)
    if (pass !== passConf) {
      setError("Your passwords do not match")
      return
    }
    if (pass.length < 6) {
      setError("You password should be at least 6 characters long")
      return
    }

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code, password: pass, passwordConfirmation: passConf })
    };
    fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/auth/reset-password`, requestOptions)
    .then(response => {
      if (response.status != "200") {
        setError(`There appears to have been an issue. Has your token expired? Error code ${response.status}`)
      } else {
        setSuccess("Your password has been rest successfully.")
      }
      console.log("Your user's password has been reset.", response);
    })
    .catch(error => {
      if (error) {
        console.log('An error occurred:', error.response);
        setError('An error occurred:',error.response)
      }
    });
  }

  return (
    <div>
      <Header
        brand="Garden Steward"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />

      <div className={classNames(classes.main, classes.mainRaised)}>
      <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={6} md={4}>
            <Card>
              <form className={classes.form}>
                <p className={classes.divider}>Reset Password</p>
                <CardBody>
                  <CustomInput
                    disabled={disabled}
                    labelText="Password"
                    id="pass"
                    onChange={handlePassChange}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      type: "password",
                      endAdornment: (
                        <InputAdornment position="end">
                          <Icon className={classes.inputIconsColor}>
                            lock_outline
                          </Icon>
                        </InputAdornment>
                      ),
                      autoComplete: "off"
                    }}
                    />
                  <CustomInput
                    disabled={disabled}
                    labelText="Password Confirmation"
                    id="pass-confirmation"
                    onChange={handlePassConfChange}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      type: "password",
                      endAdornment: (
                        <InputAdornment position="end">
                          <Icon className={classes.inputIconsColor}>
                            lock_outline
                          </Icon>
                        </InputAdornment>
                      ),
                      autoComplete: "off"
                    }}
                  />
                  {error ? 
                      <Danger>
                        {error}
                      </Danger>
                      : <></>
                  
                  }
                </CardBody>
                <CardFooter className={classes.cardFooter}>
                  <Button
                    simple
                    disabled={disabled}
                    onClick={resetPass}
                    color="primary" 
                    size="lg">
                    Submit
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
      </div>
      <Footer />
    </div>
  );
}
