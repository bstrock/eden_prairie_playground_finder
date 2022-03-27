import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from "@mui/material/Typography";
import {Divider} from "@mui/material";

function valuetext(value) {
    return `${value} mi.`;
}

export default function DistanceSlider() {

    return (
        <Box sx={{ width: 'auto', mt: 2}}>

            <Slider sx={{p: 2, ml: 2, width: '75%'}}
                aria-label="Miles"
                defaultValue={5}
                getAriaValueText={valuetext}
                valueLabelDisplay="auto"
                step={.5}
                marks
                min={.5}
                max={5}
            />

        </Box>
    );
}