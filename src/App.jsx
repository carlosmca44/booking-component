import React, { useState } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography
} from "@mui/material";
import { Box, Container } from "@mui/system";

import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import SearchIcon from '@mui/icons-material/Search';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const App = () => {

  //Flight Type selector
  const [flightType, setFlightType] = useState('Round trip');

  const handleSetFlightType = (event) => {
    setFlightType(event.target.value);
  };

  //Passenger selector
  const [passengerCount, setPassengerCount] = useState('1 adult/s');

  const handleSetPassengerCount = (event) => {
    setPassengerCount(event.target.value);
  };

  //Travel class
  const [travelClass, setTravelClass] = useState('Economy');

  const handleSetTravelClass = (event) => {
    setTravelClass(event.target.value);
  };

  //Change destinations
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const handleChangeFrom = (event) => {
    setFrom(event.target.value);
  };

  const handleChangeTo = (event) => {
    setTo(event.target.value);
  };

  const hendleClickChangeDestination = (event) => {
    setFrom(to);
    setTo(from)
  };

  //Departure date
  const [departureDate, setDepartureDate] = useState(null);

  //Return date
  const [returnDate, setReturnDate] = useState(null);

  return (
    <Container sx={{ display: "flex", flexDirection: "column", alignItems: "center" }} maxWidth="max-content">
      <Typography variant="h3" mb={2}>
        Search hundreds of travel sites at once
      </Typography>
      <Box display="flex" flexDirection="column" rowGap={2}>
        <Box display="flex" rowGap={2} columnGap={1} flexDirection={{ xs: "column", md: "row" }}>
          <FormControl>
            <InputLabel id="flightTypeLabel">Flight type</InputLabel>
            <Select
              value={flightType}
              labelId="flightTypeLabel"
              label="Flight type"
              onChange={handleSetFlightType}
              size="small"
            >
              <MenuItem value='Return'>Return</MenuItem>
              <MenuItem value='Round trip'>Round trip</MenuItem>
            </Select>
          </FormControl>

          <FormControl>
            <InputLabel id="passengers">Passengers</InputLabel>
            <Select
              value={passengerCount}
              labelId="passengers"
              label="Passengers"
              onChange={handleSetPassengerCount}
              size="small"
            >
              <MenuItem value='1 adult/s'>1 adult/s</MenuItem>
              <MenuItem value='2 adult/s'>2 adult/s</MenuItem>
              <MenuItem value='3 adult/s'>3 adult/s</MenuItem>
            </Select>
          </FormControl>

          <FormControl>
            <InputLabel id="flightTypeLabel">Flight type</InputLabel>
            <Select
              value={travelClass}
              label="Travel Class"
              onChange={handleSetTravelClass}
              size="small"
            >
              <MenuItem value='Economy'>Economy</MenuItem>
              <MenuItem value='Premium economy'>Premium economy</MenuItem>
              <MenuItem value='Business'>Business</MenuItem>
              <MenuItem value='First class'>First class</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box display="flex" columnGap={1} rowGap={1} flexDirection={{ xs: "column", md: "row" }}>
          <Box display="flex" columnGap={1}>
            <TextField
              onChange={handleChangeFrom}
              value={from}
              placeholder="From?"
              InputProps={{ startAdornment: <FlightTakeoffIcon /> }}
            />
            <Button
              onClick={hendleClickChangeDestination}
              variant="contained"
              sx={{ backgroundColor: "#d3d3d3" }}
              disableElevation
            >
              <SwapHorizIcon />
            </Button>
            <TextField
              onChange={handleChangeTo}
              value={to}
              placeholder="To?"
              InputProps={{ startAdornment: <FlightLandIcon /> }}
            />
          </Box>
          <Box display="flex">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Departure date"
                value={departureDate}
                onChange={(newValue) => {
                  setDepartureDate(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Return date"
                value={returnDate}
                onChange={(newValue) => {
                  setReturnDate(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Box>
          <Button
            disableElevation
            color="secondary"
            variant="contained"
            sx={{ backgroundColor: "#D74214" }}>
            <SearchIcon />
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default App;
