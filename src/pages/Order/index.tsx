import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import useFetcher from '@/hooks/useFetcher';
import useContainer from '@/hooks/useContainer';
import userInstance from '@/containers/user';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import FaceIcon from '@material-ui/icons/Face';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CircularProgress from '@material-ui/core/CircularProgress';
import { getOrders } from '@/services/order';
import { navigate } from '@/utils/history';
import { Drawer, TextField } from '@material-ui/core';
import StarComponent from 'rc-rate'

const styles = theme => ({
  root: {
    width: '100%',
  },
  drawer: {
    padding: '10px 20px 100px 20px',
  },
  button: {
    width: '50px',
    alignSelf: 'flex-end',
  },
  progress: {
    margin: theme.spacing.unit,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  star: {
    marginTop: '10px',
    marginBottom: '10px',
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
    marginLeft: '20px',
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '8px 12px 12px',
  },
  column1: {
    flexBasis: '60%',
  },
  span: {
    float: 'left',
    width: '70px',
    lineHeight: '47px',
    marginRight: '50px',
  },
  column2: {
    flexBasis: '20%',
  },
  column3: {
    flexBasis: '20%',
  },
  helper: {
    borderLeft: `2p]x solid ${theme.palette.divider}`,
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
});
const CardE = ({classes, data, action}) => {
  console.log(data)
  return (
<ExpansionPanel>
<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
  <div className={classes.column}>
    <Typography className={classes.heading}>2019-01-9</Typography>
  </div>
  <div className={classes.column}>
    <Typography className={classes.secondaryHeading}>{data.order.house.address}</Typography>
  </div>
</ExpansionPanelSummary>
<ExpansionPanelDetails className={classes.details}>
  <div className={classes.column1}>
    <Typography className={classes.secondaryHeading}>Total {data.items.length} items in repairing</Typography>
    <Typography className={classes.secondaryHeading}>Fee: ${data.order.price}</Typography>
    <Typography className={classes.secondaryHeading}>About 10 day left</Typography>
  </div>
  <div className={classNames(classes.column3, classes.helper)}>
    <Typography variant="caption">
      <CircularProgress
        className={classes.progress}
        color="secondary"
        variant="static"
        value={data.order.closedata !== null ? 100 : parseInt(Math.random()*100)+1}
      />
    </Typography>
  </div>
</ExpansionPanelDetails>
<Divider />
<ExpansionPanelActions>
  <Button size="small" >Cancel</Button>
  <Button 
    size="small"
    onClick={()=>{
      navigate('orderDetail');
    }}
  >Check</Button>
  <Button
    size="small"
    color="secondary"
    onClick={action}
  >
    Comment
  </Button>
</ExpansionPanelActions>
</ExpansionPanel>)
}

function DetailedExpansionPanel(props) {
  const { classes } = props;
  const { state: user } = useContainer(userInstance)
  if (!user.myInfo) return <></>;
  const [orderList, setOrderList] = useFetcher(() => getOrders(user.myInfo.clent_id));
  const [open, setOpen] = React.useState(false);
  const [dialogText, setDialogText] = React.useState('');
  const [drawerState, setDrawerState] = React.useState(false);
  const handleClickOpen = (content) => () => {
    setDialogText(content)
    setOpen(true);
  };
  const drawerClose = () => {
    setDrawerState(false)
  }
  const drawerOpen = () => {
    setDrawerState(true)
  }
  function handleClose() {
    setOpen(false);
  }
  console.log('orderList', orderList);
  return (
    <>
    <div className={classes.root}>
      <Drawer
        classes={{
          paper: classes.drawer,
        }}
        anchor="bottom"
        open={drawerState}
        onClose={drawerClose}
      >
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            // TODO: 添加评论提交逻辑
            drawerClose()
          }}
          classes={{
            root: classes.button,
          }}
        >
          submit
        </Button>
        <TextField
          id="standard-required"
          label="comment"
          placeholder="Add comment"
          className={classes.textField}
          margin="normal"
        />
        <div>
        <span className={classes.span}>Attitud:  </span>
        <StarComponent className={classes.star} defaultValue={4} />
        </div>
        <div>
        <span className={classes.span}>Speed:   </span>
        <StarComponent className={classes.star} defaultValue={4} />
        </div>
        <div>
        <span className={classes.span}>Quality: </span>
        <StarComponent className={classes.star} defaultValue={4} />
        </div>
      </Drawer>
      {orderList && orderList.data.orders && orderList.data.orders.map(e => (
        <CardE classes={classes} data={e} action={drawerOpen}/>
      ))}
    </div>

    </>
  );
}

DetailedExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DetailedExpansionPanel);