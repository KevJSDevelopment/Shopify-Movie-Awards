import React, { useEffect, useState } from 'react'
import { Paper, Typography, Grid, Slide, Button , makeStyles} from '@material-ui/core'

const NominationCard = (props) => {

    const [hover, setHover] = useState(false)

    const handleNominationTitle = () => {
        const string = props.nomination.Title.substring(0, 45) + "..."
       return string
    }

    return (
        <Grid item xs={12} style={{marginLeft:"1%", marginRight: "1%"}}>
            <Slide 
            in={true} 
            direction="up"
            {...(true ? { timeout: (props.index + 5) * 100 } : {})}>
                <Paper id={`nomination-paper-${props.index}`} elevation={!hover ? 3 : 20} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                    <Typography variant="overline" style={{overflowX: true}}>
                        {props.nomination.Title.length > 50 ? handleNominationTitle() : props.nomination.Title}
                    </Typography>
                    <Button variant="outlined" size="small" style={{float: "right" }} color="primary" onClick={() => props.handleRemoved(props.index)}>
                        Remove
                    </Button>
                </Paper>
            </Slide>
        </Grid>
    )
}

export default NominationCard
