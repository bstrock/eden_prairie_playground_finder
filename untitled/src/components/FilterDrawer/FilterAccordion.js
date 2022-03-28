import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DistanceSlider from "./DistanceSlider";
import {Checkbox, Divider} from "@mui/material";
import Box from "@mui/material/Box";
import EquipmentCheckboxList from "./EquipmentCheckboxList";
import {useEffect, useState} from "react";
export default function FilterAccordion() {

    // top-level lists of all filter assets
    const equipList = [
        'Bouncers',
        'Bridges',
        'Cooperative',
        'Climbers',
        'Diggers',
        'Ladders',
        'Musical',
        'Sensory',
        'Slides',
        'Spinners',
        'Accessible Swings',
        'Standard Swings',
        'Toddler Swings'
    ]

    const amenitiesList = [
        'Beach',
        'Benches',
        'Concessions',
        'Grills',
        'Picnic Tables',
        'Indoor Restroom',
        'Shelter',
        'Sun Shades'
    ]

    const sportsList = [
        'Baseball Diamond',
        'Basketball Court',
        'Hockey Rink',
        'Horseshoes',
        'Skate Park',
        'Soccer Field',
        'Tennis Court',
        'Volleyball'
    ]

    // tracks state of the drawer element (closed vs. open)
    const [expanded, setExpanded] = useState(false);

    // tracks value of the slider, so it can be displayed in accordion description
    const [distValue, setDistValue] = useState(5);

    // tracks individual check boxes for filter criteria by category
    const [checkedEquipment, setCheckedEquipment] = useState(equipList)
    const [checkedAmenities, setCheckedAmenities] = useState(amenitiesList)
    const [checkedSports, setCheckedSports] = useState(sportsList)

    // tracks whether all boxes in a category are checked (also if no boxes are checked)
    const [allEquipmentChecked, setAllEquipmentChecked] = useState(true)
    const [allAmenitiesChecked, setAllAmenitiesChecked] = useState(true)
    const [allSportsChecked, setAllSportsChecked] = useState(true)

    // event handler for clicking the filter button
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    // event handler to update display of slider distance value
    const updateDistVal = (val) => setDistValue(val)

    // event handler to update state of checked value lists
    const updateCheckedEquipment = (val) => setCheckedEquipment(val)
    const updateCheckedAmenities = (val) => setCheckedAmenities(val)
    const updateCheckedSports = (val) => setCheckedSports(val)

    // the useEffect calls here allow the checkbox in the accordion summary to track the state of the checked boxes within
    // react literally insists on doing all of this...I tried to shorten up, trust
    useEffect( () => {
            if (checkedEquipment.length  === equipList.length) {
                setAllEquipmentChecked(true)
            } else if (checkedEquipment.length === 0) {
                setAllEquipmentChecked(false)
            }
        }, [equipList, checkedEquipment]
    )

    useEffect( () => {
        if (checkedAmenities.length  === amenitiesList.length) {
            setAllAmenitiesChecked(true)
        } else if (checkedAmenities.length === 0) {
            setAllAmenitiesChecked(false)
            }
        }, [amenitiesList, checkedAmenities]
    )

    useEffect( () => {
            if (checkedSports.length  === sportsList.length) {
                setAllSportsChecked(true)
            } else if (checkedSports.length === 0) {
                setAllSportsChecked(false)
            }
        }, [sportsList, checkedSports]
    )

    return (
        <>
            {/* This box contains the Accordion */}
            <Box sx={{width: 'auto'}}>

                <Divider sx={{mb: 3}} variant={'middle'}/>

                {/* DISTANCE SLIDER ACCORDION PANEL */}
                <Accordion expanded={expanded === 'panel1'}
                           onChange={handleChange('panel1')}>

                    <AccordionSummary expandIcon={<ExpandMoreIcon/>}
                                      aria-controls="panel1bh-content"
                                      id="panel1bh-header">

                        {/* PANEL LABEL- UPDATES WITH SLIDER CHANGE
                            3 components are used to ensure decimal change doesn't move miles label and cause flicker
                            ie:     2 miles -> 2.5 miles
                            thus:   2   miles -> 2.5 miles */}
                        <Typography sx={{mr: 1, flexShrink: 1, alignContent: 'left'}} variant={'h6'}>
                            Distance:
                        </Typography>
                        <Typography sx={{ml: 1, width: '15%', alignContent: 'center'}} variant={'h6'}>
                            {` ${distValue} `}
                        </Typography>
                        <Typography sx={{flexShrink: 1}} variant={'h6'}>
                            Miles
                        </Typography>
                    </AccordionSummary>

                    {/* SLIDER GOES HERE- TAKES IN UPDATE CALLBACK FUNCTION */}
                    <AccordionDetails>
                        <DistanceSlider handleValueUpdate={updateDistVal}/>
                    </AccordionDetails>
                </Accordion>

                {/* EQUIPMENT SELECTION ACCORDION PANEL */}
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header">
                        <Typography sx={{width: '33%', flexShrink: 1}} variant={'h6'}>
                            Equipment
                        </Typography>
                        <Checkbox sx={{ml: '5rem'}} edge={'start'}
                                  size={'medium'}
                                  onClick={e => e.stopPropagation()}
                                  checked={checkedEquipment.length === equipList.length}
                                  indeterminate={checkedEquipment.length > 0 && checkedEquipment.length < equipList.length} />

                    </AccordionSummary>
                    <AccordionDetails>
                        <EquipmentCheckboxList data={equipList} updateFunc={updateCheckedEquipment}/>
                    </AccordionDetails>
                </Accordion>

                {/* AMENITIES SELECTION ACCORDION PANEL */}
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header">

                        <Typography sx={{width: '33%', flexShrink: 1}} variant={'h6'}>
                            Amenities
                        </Typography>
                        <Checkbox sx={{ml: '5rem'}} edge={'start'}
                                  size={'medium'}
                                  onClick={e => e.stopPropagation()}
                                  checked={checkedAmenities.length === amenitiesList.length}
                                  indeterminate={checkedAmenities.length > 0 && checkedAmenities.length < amenitiesList.length}/>

                    </AccordionSummary>

                    <AccordionDetails>
                        <EquipmentCheckboxList data={amenitiesList}
                                               updateFunc={updateCheckedAmenities}/>
                    </AccordionDetails>
                </Accordion>

                {/* SPORTS FACILITIES SELECTION ACCORDION PANEL */}
                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header">
                        <Typography sx={{width: '33%', flexShrink: 1}} variant={'h6'}>
                            Sports
                        </Typography>
                        <Checkbox sx={{ml: '5rem'}} edge={'start'}
                                  size={'medium'}
                                  onClick={e => e.stopPropagation()}
                                  checked={checkedSports.length === sportsList.length}
                                  indeterminate={checkedSports.length > 0 && checkedSports.length < sportsList.length}/>
                    </AccordionSummary>
                    <AccordionDetails>
                        <EquipmentCheckboxList data={sportsList} updateFunc={updateCheckedSports}/>
                    </AccordionDetails>
                </Accordion>
            </Box>
        </>
    );
}