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
const styles = theme => ({
  root: {
    width: '100%',
  },
  progress: {
    margin: theme.spacing.unit,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
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
  <Button size="small" onClick={()=>{
    action('123132')
  }}>Cancel</Button>
  <Button 
    size="small"
    onClick={()=>{
      navigate('orderDetail');
    }}
  >Check</Button>
  <Button size="small" color="secondary">
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

  const handleClickOpen = (content) => () => {
    setDialogText(content)
    setOpen(true);
  };

  function handleClose() {
    setOpen(false);
  }
  console.log(orderList);
  return (
    <div className={classes.root}>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {dialogText}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose} color="primary">
            Agree
          </Button>
        </DialogActions>
      </Dialog>
      {orderList && orderList.data.orders.map(e => (
        <CardE classes={classes} data={e} />
      ))}
    </div>
  );
}

DetailedExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DetailedExpansionPanel);