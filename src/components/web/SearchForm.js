import * as React from 'react';

import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import {Box} from '@mui/system'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import TextField from '@mui/material/TextField';

import dayjs, { Dayjs } from 'dayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';


export default function SearchForm() {
    const [service, setService] = React.useState("Freight service");
    const [weight, setWeight] = React.useState("Weight in POUND'S");
    const [location, setLocation] = React.useState('');


    const handleChange = (event) => {
        setService(event.target.value);
    };
    const handleChangeWeight = (event)=>{
        setWeight(event.target.value);
    }

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const [date, setDate] = React.useState(
        dayjs(new Date()),
      );
    
      const handleChangeDate = (newValue) => {
        setDate(newValue);
      };

   


  return (
    <React.Fragment>
        <FormControl variant="standard"  sx={{  width:'100%' }}>
         
            <Select
                labelId="service-select-label"
                id="service-type-select"
                value={service}
                label="Service"
                variant="filled" 
                onChange={handleChange}
            >
                <MenuItem value={"Freight service"}>Freight service</MenuItem>
                <MenuItem value={"Sea service"}>Sea service</MenuItem>
                <MenuItem value={"Road service"}>Road service</MenuItem>
            </Select>
        </FormControl>


        <FormControl variant="filled"    sx={{  width:'100%' }}  >
           
            <Select
                labelId="weight-select-label"
                id="weight-select"
                value={weight}
                label="Weight"
                onChange={handleChangeWeight}
            >
                <MenuItem value={"Weight in LB'S"}>Weight in LB'S</MenuItem>
                <MenuItem value={"Weight in POUND'S"}>Weight in POUND'S</MenuItem>
            </Select>
        </FormControl>

        <FormControl  sx={{width:'100%',}}  >
          
                <Button aria-describedby={id} variant="contained" onClick={handleClick}
                    startIcon={<LocationOnIcon />}
                >
                    Origin + Destination
                </Button>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                    }}
                >
                    <TextField id="outlined-basic" label="Origin" variant="outlined" />
                    <TextField id="outlined-basic2" label="Destination" variant="outlined" />
                </Popover>
            
        </FormControl>


        <FormControl  sx={{width:'100%'}}  >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
            inputFormat="MM/DD/YYYY"
            value={date}
            onChange={handleChangeDate}
            renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
        </FormControl>

        <FormControl  sx={{width:'100%',}}  >
            <TextField id="outlined-basic" label="+1 000 000 0000" variant="outlined" />
        </FormControl>

        <FormControl  sx={{width:'100%',}}  >
            <TextField id="outlined-basic" label="wwww.websitename.com" variant="outlined" />
        </FormControl>



       


    </React.Fragment>
  )
}
