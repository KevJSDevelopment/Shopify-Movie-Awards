import React from 'react'
import { Grow } from '@material-ui/core'

const CurrentResults = (props) => {
    return (
        <Grow in={props.submitted} direction="left" timeout={{enter:  2000}}>
            <div>
                submitted
            </div>
        </Grow>
    )
}

export default CurrentResults
