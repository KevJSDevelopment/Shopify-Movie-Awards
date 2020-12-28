import React from 'react'
import { Grow, Grid, Typography, Paper } from '@material-ui/core'
import { makeStyles }from '@material-ui/core/styles'
import NominationList from './NominationList'

const useStyles = makeStyles({
    results: {
        textAlign: "center",
        marginLeft: "45%",
        marginRight: "45%",
        marginBottom: "2%"
    },
})


const CheckResults = (props) => {

    const classes = useStyles() 
    return (
        <Grow in={props.submitted} direction="left" timeout={{enter:  1000}}>
            <Grid container direction="column" alignItems="center">
                <Grid item xs={12}>
                    <Grow in={props.submitted} direction="left" timeout={{enter:  2000}}>
                        <Paper elevation={3} className={classes.results}>
                            <Typography variant="overline">
                                Results
                            </Typography>
                        </Paper>
                    </Grow>
                </Grid>
                <Grid item xs={12}>
                    <Grow in={props.submitted} direction="left" timeout={{enter:  3000}}>
                    <Grid container direction="row" spacing={3}>
                        <Grid item xs={1}>

                        </Grid>
                        <Grid item xs={5}>
                            <Grow in={props.submitted} direction="left" timeout={{enter:  4000}}>
                                <NominationList handleYear={props.handleYear} handleMovieTitle={props.handleMovieTitle}/>
                            </Grow>
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container direction="column">
                                <Grid item xs={12}>
                                    {/* <Grow in={props.submitted} direction="left" timeout={{enter:  5000}}>
                                        <TopThree />
                                    </Grow> */}
                                </Grid>
                                <Grid item xs={12}>
                                    {/* <Grow in={props.submitted} direction="left" timeout={{enter:  6000}}>

                                    </Grow> */}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    </Grow>
                </Grid>
            </Grid>
        </Grow>
    )
}

export default CheckResults
