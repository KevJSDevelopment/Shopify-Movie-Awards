import React from 'react'
import { Grow, Grid, Typography, Paper, Button } from '@material-ui/core'
import { makeStyles }from '@material-ui/core/styles'
import NominationList from './NominationList'
import MyNominations from './MyNominations'

const useStyles = makeStyles(theme => ({
    mainContainer: {
        marginLeft: "1%"
    },
    results: {
        textAlign: "center",
        marginLeft: "45%",
        marginRight: "45%",
        marginBottom: "2%",
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText
    },
    back: {
        borderRadius: "25px 5px 5px 25px",
        marginLeft: "5%",
        color: theme.palette.secondary.contrastText
    }
}))


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
                    <Button variant="contained" color="primary" size="small" className={classes.back} onClick={() => handleBack()}>
                        Back to search
                    </Button>
                    <Grow in={props.submitted} timeout={{enter:  2000}}>
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
                          
                        </Grid>
                        <Grid item xs={5}>
                            <Grow in={props.submitted} timeout={4000}>
                                <NominationList handleYear={props.handleYear} handleMovieTitle={props.handleMovieTitle}/>
                            </Grow>
                        </Grid>
                        <Grid item xs={5}>
                            <Grow in={props.submitted} timeout={5000}>
                                <MyNominations handleYear={props.handleYear} handleMovieTitle={props.handleMovieTitle} nominations={props.nominations}/>                                      
                            </Grow>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grow>
    )
}

export default CheckResults
