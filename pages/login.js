import React, { useContext, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
// core components
import Danger from "components/Typography/Danger.js";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import { signIn } from 'next-auth/client'

import styles from "assets/jss/nextjs-material-kit/pages/loginPage.js";

import image from "assets/img/bg7.jpg";

const useStyles = makeStyles(styles);

export default function LoginPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  const [disabled, setDisabled] = React.useState(false)
  const [error, setError] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [pass, setPass] = React.useState('')
  
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;

  const handlePassChange = event => {
    error ? setError(false) : null
    setPass(event.target.value)
  }
  const handleEmailChange = event => {
    error ? setError(false) : null
    setEmail(event.target.value)
  }

  const userLogin = async(event) => {
    event.preventDefault()
    console.log(pass.length)
    if (!email) {
      setError("Please enter your email")
      return
    }
    if (pass.length < 6) {
      setError("You password should be at least 6 characters long")
      return
    }
    signIn('credentials', { username: email, password: pass })

    // if (!user) {
    //   setError("Login unsuccessful, please try again.")
    // } else {
    //   setUser(user)
    //   Router.push("/")
    // }
  }




  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="Garden Steward"
        rightLinks={<HeaderLinks />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={6} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form} action='/api/auth/callback/credentials'>
                 <p className={classes.divider}>Garden Steward Login</p> 
                 {/* <input name='csrfToken' type='hidden' defaultValue={props.csrfToken}/> */}

                  <CardBody>
                    <CustomInput
                      labelText="Email Login"
                      name="username"
                      id="email"
                      onChange={handleEmailChange}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "email",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                  <CustomInput
                    disabled={disabled}
                    labelText="Password"
                    name="password"
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
                    onClick={userLogin}
                    color="primary" 
                    size="lg">
                    Login
                  </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}