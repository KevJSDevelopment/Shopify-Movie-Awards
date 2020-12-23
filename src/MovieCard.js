import React, { useEffect, useState } from 'react'
import { Paper, Typography, Grid, Slide, Button , makeStyles} from '@material-ui/core'

const useStyles = makeStyles({

})

const MovieCard = (props) => {

    const [hover, setHover] = useState(false)

    const handleMovieTitle = () => {
       const string = props.movie.Title.substring(0, 45) + "..."
       return string
    }

    return (
        <Grid item xs={12} style={{marginLeft:"1%", marginRight: "1%"}}>
            <Slide 
            in={true} 
            direction="up"
            {...(true ? { timeout: (props.index + 5) * 100 } : {})}>
                <Paper id={`movie-paper-${props.index}`} elevation={!hover ? 3 : 20} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                    <Typography variant="overline" style={{overflowX: true}}>
                        {props.movie.Title.length > 50 ? handleMovieTitle() : props.movie.Title}
                    </Typography>
                    {!props.listFull ? 
                    <Button variant="outlined" size="small" style={{float: "right" }} color="primary" onClick={() => props.handleNominated(props.movie)}>
                        Nominate
                    </Button>
                    : <Button variant="outlined" disabled style={{float: "right" }} size="small">
                        Nominate
                    </Button>}
                </Paper>
            </Slide>
        </Grid>
    )
}

export default MovieCard
