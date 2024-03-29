import React, { useState, useEffect } from 'react'
import Grow from '@material-ui/core/Grow'
import { Grid, Paper, Typography, makeStyles, useTheme, Tooltip} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    first: {
        marginLeft: "2%",
        marginRight: "2%",
        backgroundColor: "#ffd700",
        color: theme.palette.secondary.contrastText,
        padding: "5px",
        width: "95%"
    },
    second: {
        marginLeft: "4%",
        marginRight: "4%",
        backgroundColor: "#bec2cb",
        color: theme.palette.secondary.contrastText,
        padding: "5px",
        width: "90%"
    },
    third: {
        marginLeft: "6%",
        marginRight: "6%",
        backgroundColor: "#cd7f32",
        color: theme.palette.secondary.contrastText,
        padding: "5px",
        width: "85%"
    },
    item: {
        width: "80%",
        marginLeft: "8%",
        marginRight: "8%",
        padding: "5px",
        backgroundColor: theme.palette.secondary.light,
        color: theme.palette.secondary.contrastText
    }
}))

const NominationResult = (props) => {

    const [userNominated, setUserNominated] = useState(false)
    const classes = useStyles()
    const theme = useTheme()
    const handleClass = () => {
        switch (props.index) {
            case 0:
                return classes.first
            case 1:
                return classes.second
            case 2:
                return classes.third
            default:
                return classes.item
        }
    }

    const handleTextWidth = () => {
        switch (props.index) {
            case 0:
                return 40
            case 1:
                return 35
            case 2:
                return 30
            default:
                return 30
        }
    }

    const checkIfUserNominated = (nomination) => {
        props.nominations.forEach(nom => {
            if(nom.Title === props.nomination.title){
                setUserNominated(true)
            }
        })
    }

    useEffect(() => {
        checkIfUserNominated()
    }, [])

    return (
        <Grid item xs={12}>
            <Grow 
            in={true} 
            {...(true ? { timeout: (props.index + 5) * 300 } : {})}>
                <Paper id={`nomination-paper-${props.index}`} className={handleClass()} style={{border: userNominated ? `3px solid ${theme.palette.primary.light}`: "0"}} elevation={3}>
                    <Tooltip title={`${props.nomination.title} (${props.handleYear(props.nomination.year)})`} arrow={true} placement="top">
                        <Typography variant="overline">
                            {props.nomination.title.length > handleTextWidth() ? props.handleMovieTitle(props.nomination.title, handleTextWidth()) : props.nomination.title} ({props.handleYear(props.nomination.year)}): Nominations - {props.nomination.total}
                        </Typography>
                    </Tooltip>
                </Paper>
            </Grow>
        </Grid>
    )
}

export default NominationResult
