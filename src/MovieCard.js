import React, { useEffect } from 'react'
import { Paper, Typography, Grid, Slide} from '@material-ui/core'

const MovieCard = (props) => {
    useEffect(() => {
        console.log(props.movie)
    }, [])
    return (
        <Grid item xs={12}>
            <Slide 
            in={true} 
            direction="up"
            {...(true ? { timeout: (props.count + 5) * 100 } : {})}>
                <Paper>
                    <Typography variant="overline">
                        {props.movie.Title}
                    </Typography>
                </Paper>
            </Slide>
        </Grid>
    )
}

export default MovieCard
