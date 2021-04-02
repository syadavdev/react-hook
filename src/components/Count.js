import React from 'react'

function Count({count}) {
    console.log('Count')
    return (
        <div>
            {count}
        </div>
    )
}

export default React.memo(Count)
