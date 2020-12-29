import React from 'react'
import { Grid, Button, Typography, makeStyles, Grow } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    reset: {
        margin: "1%"
    },
    note: {
        color: theme.palette.secondary.contrastText
    },
    button: {
        color: theme.palette.secondary.contrastText
    }
}))

const Reset = (props) => {
    const classes = useStyles()

    return (
        <Grow in={props.submitted} timeout={{enter:  2000}}>
            <Grid container direction="column" alignItems="center" className={classes.reset}>
                <Grid item xs={12}>
                    <Button variant="contained" className={classes.button} size="small" color="primary" onClick={() => props.reset()}>
                        Nominate More?
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Typography className={classes.note} variant="overline">
                        (testing purposes, would be removed in production)
                    </Typography>
                </Grid>
            </Grid>
        </Grow>
    )
}

export default Reset
