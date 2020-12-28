import React from 'react'
import { Grow, Grid, Typography, Paper, Button } from '@material-ui/core'
import { makeStyles }from '@material-ui/core/styles'
import NominationList from './NominationList'
import Key from './Key'
import MyNominations from './MyNominations'

const useStyles = makeStyles({
    mainContainer: {
        marginLeft: "1%"
    },
    results: {
        textAlign: "center",
        marginLeft: "45%",
        marginRight: "45%",
        marginBottom: "2%"
    },
    back: {
        borderRadius: "25px 5px 5px 25px",
        marginLeft: "5%"
    }
})


const CheckResults = (props) => {

    const classes = useStyles() 

    const handleBack = () => {
        props.setResultsPage(false)
        props.setTransitioning(false)
    }

    return (
        <Grow in={props.submitted} direction="left" timeout={{enter:  1000}}>
            <Grid container direction="column" alignItems="center" className={classes.mainContainer}>
                <Grid item xs={12}>
                    <Button variant="contained" size="small" color="primary" className={classes.back} onClick={() => handleBack()}>
                        Back to search
                    </Button>
                    <Grow in={props.submitted} direction="left" timeout={{enter:  2000}}>
                        <Paper elevation={3} className={classes.results}>
                            <Typography variant="overline">
                                Results
                            </Typography>
                        </Paper>
                    </Grow>
                </Grid>
                <Grid item xs={12}>
                    <Grid container direction="row" spacing={3}>
                        <Grid item xs={1}>
                            {/* <Grow in={props.submitted} direction="left" timeout={{enter:  6000}}>
                                <Key />
                            </Grow> */}
                        </Grid>
                        <Grid item xs={5}>
                            <Grow in={props.submitted} direction="left" timeout={{enter:  4000}}>
                                <NominationList handleYear={props.handleYear} handleMovieTitle={props.handleMovieTitle}/>
                            </Grow>
                        </Grid>
                        <Grid item xs={5}>
                            <Grid container direction="column">
                                <Grid item xs={12}>
                                    <Grow in={props.submitted} direction="left" timeout={{enter:  5000}}>
                                        <MyNominations nominations={props.nominations}/>                                      
                                    </Grow>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grow>
    )
}

export default CheckResults
