import React from 'react'
import Skeleton from '@mui/material/Skeleton'

export default () => {
    const indices = [...Array(6).keys()]
    const styles = {
        display: 'flex',
        alignItems: 'center',
        height: '52px'
    }

    return (
        indices.map(index =>
            <div style={styles} key={index} >
                <Skeleton variant="circular" width={24} height={24} style={{ marginRight: 10 }} />
                <Skeleton variant="text" width={300} height={22} />
            </div>
        )
    )
}


