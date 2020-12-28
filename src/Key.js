import React from 'react'
import { Paper, Typography, Grid, makeStyles} from '@material-ui/core'

const useStyles = makeStyles({
    keys: {
        margin: "5%",
        marginLeft: "2%",
        marginRight: "2%",
        textAlign: "center"
    },
    title: {
        margin: "1%"
    },
    first: {
        backgroundColor: "#ffd700"
    },
    second: {
        backgroundColor: "#bec2cb"
    },
    third: {
        backgroundColor: "#cd7f32"
    },
    yours: {
        border: "2px solid green"
    },
    font: {
        fontSize: "8px"
    }
})

const Key = () => {

    const classes = useStyles()

    return (
        <Paper elevation={3} className={classes.keyRoot}>
            <Paper elevation={3}>
                <Grid container direction="column">
                    <Grid item xs={12} className={classes.title}>
                        <Typography variant="overline">
                            <u>Key:</u>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} className={classes.keys}>
                        <Paper elevation={3} className={classes.first}>
                            <Typography variant="overline" className={classes.font}>
                                1st
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} className={classes.keys}>
                        <Paper elevation={3} className={classes.second}>
                            <Typography variant="overline" className={classes.font}>
                                2nd
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} className={classes.keys}>
                        <Paper elevation={3} className={classes.third}>
                            <Typography variant="overline" className={classes.font}>
                                3rd
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} className={classes.keys}>
                        <Paper elevation={3} className={classes.yours}>
                            <Typography variant="overline" className={classes.font}>
                                My Nominations
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} className={classes.keys}>
                        <Paper elevation={3}>
                            <Typography variant="overline" className={classes.font}>
                                Other
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Paper>
        </Paper>
    )
}

export default Key
