import React from "react";
import PropTypes from "prop-types";
import {
  TextField,
  Grid,
  MenuItem,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Table,
  Checkbox,
} from "@material-ui/core";
import { EAlertTypes } from "../utils/EAlertTypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StationGaugeTypes = ({ station, onStationChange }) => (
  <Table>
    <TableHead>
      <TableRow>
        {EAlertTypes.map((type) => (
          <TableCell key={type.id} align="center">
            <FontAwesomeIcon
              icon={type.icon}
              fixedWidth
              size="lg"
              color="grey"
            />
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        {EAlertTypes.map((type) => (
          <TableCell key={type.id} align="center">
            <Checkbox
              name={type.prop}
              color="primary"
              checked={station[type.prop]}
              onChange={(event) => onStationChange(event, station)}
              value={type.prop}
            />
          </TableCell>
        ))}
      </TableRow>
    </TableBody>
  </Table>
);
StationGaugeTypes.propTypes = {
  station: PropTypes.object.isRequired,
  onStationChange: PropTypes.func.isRequired,
};

const StationForm = ({
  station,
  error,
  loading,
  onStationChange,
  referenceStations,
  lnStations,
}) => (
  <form noValidate autoComplete="off">
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          required={true}
          select
          error={error}
          disabled={loading}
          fullWidth
          name="stationId"
          label="LN Station"
          type="text"
          margin="dense"
          variant="outlined"
          value={station.stationId}
          onChange={(event) => onStationChange(event, station)}
        >
          {lnStations &&
            lnStations.map((station) => (
              <MenuItem
                key={station.id}
                value={station.id}
                disabled={!!station.stationId}
              >
                {station.name}
              </MenuItem>
            ))}
        </TextField>
      </Grid>
      <Grid item xs={12}>
        <TextField
          required={true}
          error={error}
          disabled={loading}
          autoFocus
          fullWidth
          name="name"
          label="Nom"
          type="text"
          margin="dense"
          variant="outlined"
          value={station.name}
          onChange={(event) => onStationChange(event, station)}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required={true}
          select
          error={error}
          disabled={loading}
          fullWidth
          name="referenceStationId"
          label="Station Reference"
          type="text"
          margin="dense"
          variant="outlined"
          value={station.referenceStationId}
          onChange={(event) => onStationChange(event, station)}
        >
          {referenceStations &&
            referenceStations.map((station) => (
              <MenuItem key={station.id} value={station.id}>
                {station.name}
              </MenuItem>
            ))}
        </TextField>
      </Grid>
      <Grid item xs={6}>
        <TextField
          required={true}
          error={error}
          disabled={loading}
          fullWidth
          name="latitude"
          label="Latitude"
          type="number"
          margin="dense"
          variant="outlined"
          value={station.latitude}
          onChange={(event) => onStationChange(event, station)}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          required={true}
          error={error}
          disabled={loading}
          fullWidth
          name="longitude"
          label="Longitude"
          type="number"
          margin="dense"
          variant="outlined"
          value={station.longitude}
          onChange={(event) => onStationChange(event, station)}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          error={error}
          disabled={loading}
          fullWidth
          name="ipAddress"
          label="Addresse IP"
          type="string"
          margin="dense"
          variant="outlined"
          value={station.ipAddress}
          onChange={(event) => onStationChange(event, station)}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          error={error}
          disabled={loading}
          fullWidth
          name="deviceType"
          label="Type"
          type="string"
          margin="dense"
          variant="outlined"
          value={station.deviceType}
          onChange={(event) => onStationChange(event, station)}
        />
      </Grid>
      <Grid item xs={12}>
        <StationGaugeTypes
          station={station}
          onStationChange={onStationChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          error={error}
          disabled={loading}
          fullWidth
          name="localisation"
          label="Localisation"
          type="string"
          margin="dense"
          variant="outlined"
          value={station.localisation}
          onChange={(event) => onStationChange(event, station)}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          error={error}
          disabled={loading}
          fullWidth
          name="address"
          label="Addresse"
          type="string"
          margin="dense"
          variant="outlined"
          value={station.address}
          onChange={(event) => onStationChange(event, station)}
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          error={error}
          disabled={loading}
          fullWidth
          name="city"
          label="Ville"
          type="string"
          margin="dense"
          variant="outlined"
          value={station.city}
          onChange={(event) => onStationChange(event, station)}
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          error={error}
          disabled={loading}
          fullWidth
          name="province"
          label="Province"
          type="string"
          margin="dense"
          variant="outlined"
          value={station.province}
          onChange={(event) => onStationChange(event, station)}
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          error={error}
          disabled={loading}
          fullWidth
          name="postalCode"
          label="Code Postal"
          type="string"
          margin="dense"
          variant="outlined"
          value={station.postalCode}
          onChange={(event) => onStationChange(event, station)}
        />
      </Grid>
    </Grid>
  </form>
);

StationForm.propTypes = {
  isAdd: PropTypes.bool,
  station: PropTypes.object.isRequired,
  error: PropTypes.bool,
  loading: PropTypes.bool,
  onStationChange: PropTypes.func.isRequired,
  referenceStations: PropTypes.array.isRequired,
  lnStations: PropTypes.array.isRequired,
};

export default React.memo(StationForm);
