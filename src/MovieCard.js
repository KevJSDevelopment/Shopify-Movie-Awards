import React, { useEffect } from 'react'
import { Paper, Typography, Grid} from '@material-ui/core'

const MovieCard = (props) => {
    useEffect(() => {
        console.log(props.movie)
    }, [])
    return (
        <Grid item xs={12}>
            <Paper>
                <Typography variant="overline">
                    {props.movie.Title}
                </Typography>
            </Paper>
        </Grid>
    )
}

export default MovieCard
