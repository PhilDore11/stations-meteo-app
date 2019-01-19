import React from "react";
import PropTypes from "prop-types";

import {
  withStyles,
  Card,
  CardHeader,
  IconButton,
  Divider,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  CardActions,
  Grid,
} from "@material-ui/core";

import {
  CheckCircle as CheckCircleIcon,
  Error as ErrorIcon,
  LocationSearching as LocationSearchingIcon,
  Memory as DeviceIcon,
  Room as PinIcon,
} from "@material-ui/icons";

import { green, red } from "@material-ui/core/colors";

const styles = theme => ({
  successIcon: {
    color: green[600]
  },
  errorIcon: {
    color: red[600]
  }
});

const StationCard = ({ classes, station }) => (
  <Card>
    <CardHeader
      avatar={
        station.status === "ON" ? (
          <CheckCircleIcon
            fontSize="large"
            className={classes.successIcon}
          />
        ) : (
          <ErrorIcon fontSize="large" className={classes.errorIcon} />
        )
      }
      title={station.name}
      action={<IconButton>{station.battery}</IconButton>}
    />
    <Divider />
    <CardContent>
      <List>
        <ListItem>
          <ListItemIcon>
            <LocationSearchingIcon />
          </ListItemIcon>
          <ListItemText primary={station.ipAddress} />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <DeviceIcon />
          </ListItemIcon>
          <ListItemText primary={station.deviceType} />
        </ListItem>
      </List>
    </CardContent>
    <Divider />
    <CardActions>
      <Grid container justify="flex-end">
        <Grid item>
          <IconButton aria-label="Add to favorites">
            <PinIcon />
          </IconButton>
        </Grid>
      </Grid>
    </CardActions>
  </Card>
);

StationCard.propTypes = {
  classes: PropTypes.object.isRequired,
  station: PropTypes.object.isRequired,
};

export default React.memo(withStyles(styles)(StationCard));
