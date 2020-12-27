import React from 'react'
import { Grow, Grid, Typography } from '@material-ui/core'
import { makeStyles }from '@material-ui/core/styles'
import NominationList from './NominationList'

const useStyles = makeStyles({
    
})


const CheckResults = (props) => {

    const classes = useStyles() 
    return (
        <Grow in={props.submitted} className={classes.resultsRoot} direction="left" timeout={{enter:  2000}}>
            <Grid container direction="column" alignItems="center">
                <Grid item xs={12}>
                    <Typography variant="overline">
                        Results
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Grid container direction="row">
                        <Grid item xs={6}>
                            <NominationList />
                        </Grid>
                        <Grid itex xs={6}>
                            <Grid container direction="column">
                                <Grid item xs={12}>

                                </Grid>
                                <Grid item xs={12}>
                                    
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
