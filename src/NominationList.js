import React, { useEffect, useState } from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import NominationResult from './NominationResult'

const NominationList = () => {

    const [allNominations, setAllNominations] = useState([])

    const getAllNominations = async () => {
        const res = await fetch(`http://localhost:3000/nominations`)
            
        const data = await res.json()

        setAllNominations(data.nominations)

    }

    useEffect(() => {
        getAllNominations()
    }, [])
    return (
        <Paper variant="elevation" elevation={3}>
            <Grid container direction="column">
                <Grid item xs={12}>

                </Grid>
                <Grid item xs={12}>
                    {allNominations.map(nomination => {
                        return <NominationResult nomination={nomination} />
                    })}
                </Grid>
            </Grid>   
        </Paper>
    )
}

export default NominationList
