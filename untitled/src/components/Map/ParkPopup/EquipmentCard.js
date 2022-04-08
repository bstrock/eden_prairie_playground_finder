import * as React from 'react';
import {Avatar, Card, CardContent, CardHeader, Divider, Fade} from "@mui/material";
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import AssetTable from "./AssetTable";
import Box from "@mui/material/Box";
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';

export default function EquipmentCard(props) {

    const {data, whichOne} = props

    const avatar = (whichOne) => {

        const avatarStore = {
            'equipment': <PlaylistAddCheckIcon/>,
            'amenities': <FamilyRestroomIcon/>,
            'sports_facilities': <SportsGymnasticsIcon/>
        }

        return (
            <Avatar sx={{bgcolor: 'green'}}>
                {avatarStore[whichOne]}
            </Avatar>
        )
    }

    console.log('equipment card')
    console.log(data)

    return (
        <Card sx={{display: 'block', height: '22em', border: 1, borderRadius: 2}} variant={'outlined'}>
            <CardHeader sx={{borderBottom: 1, borderColor: 'divider', textAlign: 'center', p: 1}}
                        title={data.site_name}
                        titleTypographyProps={{fontSize: '1.2rem'}}
                        avatar={avatar(whichOne)}/>
            <Fade in={true} timeout={700}>

                <CardContent sx={{
                    minHeight: 350,
                    maxHeight: 389,
                    p: 1,
                    pb: 0,
                    backgroundImage: 'linear-gradient(48deg, rgba(210,255,112,1) 0%, rgba(255,255,255,1) 47%, rgba(219,255,191,1) 100%)'
                }}>

                    <Box>
                        <>
                            <Divider/>
                            <AssetTable data={data[whichOne]} whichOne={whichOne}/>
                            <Divider/>
                        </>
                    </Box>

                </CardContent>
            </Fade>

        </Card>
    );
}
