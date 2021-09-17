import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Card from "../Theme/Card/Card.js";
import CardBody from "../Theme/Card/CardBody.js";
import Info from "../Typography/Info.js";
import Clearfix from "../Theme/Clearfix/Clearfix";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import EmojiPeople from '@material-ui/icons/EmojiPeople';
import Divider from "@material-ui/core/Divider";
import {updateGarden, getGardenTasks} from "../../controllers/GardenController"
import styles from "../../assets/jss/nextjs-material-kit/pages/componentsSections/typographyStyle.js";
import { Button } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function GardenerAdmin(props) {
  const classes = useStyles();
  const { title, garden, session } = props;
  const [loading, setLoading] = React.useState(false);
  const [gardenState, setGardenState] = React.useState(garden)
  const [gardenTasks, setGardenTasks] = React.useState([])

  const handleClose = () => {
    setLoading(false);
  };


  const leaderAction = (userId) => {
    if(!session) {
      console.log("no session")
      return
    }
    setLoading(true)
    let leader = gardenState.leaders.find(l=>l.id == userId)
    if (leader) {
      let filteredLeaders = gardenState.leaders.filter(l=> l.id != leader.id)
      gardenState.leaders = filteredLeaders
    } else {
      // not a leader we add
      gardenState.leaders.push(userId)
    }
    updateGarden(session, gardenState.id, {leaders: gardenState.leaders}).then(res=> {
      setGardenState(res)
      setLoading(false)
    })
  }

  if (!gardenTasks.length) {
    setLoading(true)
    setGardenTasks([1]) // or else infinite loop
    getGardenTasks(session,gardenState.id).then(res=>{
      console.log("res: ",res)
      setGardenTasks(res)
      setLoading(false)
    })
  }
  
  gardenState.users.map((u)=> {
    let leader = gardenState.leaders.find(l=>l.id == u.id)
    if (leader) {
      u.leader = true
    }
    console.log("garden tasks:", gardenTasks)
    let userTasks = gardenTasks.filter(t=> t.user && t.user.id == u.id)
    let completeTasks = userTasks.filter(t=>t.status === "FINISHED")
    u.tasks = userTasks
    u.completeTasks = completeTasks
  })
  
  return (
    <Card>

      <CardBody>
        <Backdrop className={classes.backdrop} open={loading} onClick={handleClose}>
          <CircularProgress color="inherit" />
        </Backdrop>
        <div className={classes.typo}>
          <div className={classes.note}>
            <EmojiPeople style={{textAlign: 'center'}} fontSize="large" />
            <Clearfix />
            {title}
          </div>

        {gardenState.users.length ? 
            <Info>
            {gardenState.users.map(u=> (
              <div key={u.id}>
              <p className={classes.description}><strong>Name: </strong> {u.firstName} {u.lastName}</p>
              <p className={classes.description}>{u.bio}</p>
              <p className={classes.description}><strong>Registered: </strong>{u.createdAt}</p>
              <p className={classes.description}><strong>Total Tasks Accepted: </strong>{u.tasks.length}</p>
              <p className={classes.description}><strong>Total Tasks Completed: </strong>{u.completeTasks.length}</p>
              {u.leader ? 
                <>
                  <p className={classes.description}><strong>Garden Leader!</strong></p>
                  <Button color="primary" size="lg" onClick={()=>leaderAction(u.id)} data-id={u.id}>Remove Leadership</Button>
                </>
                :
                <Button color="primary" size="lg" onClick={()=>leaderAction(u.id)} data-id={u.id}>Make Leader</Button>
              }
              
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

GardenerAdmin.defaultProps = {
  iconColor: "gray"
};

GardenerAdmin.propTypes = {
  vertical: PropTypes.bool
};
