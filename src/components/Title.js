import React from 'react'

function Title({title}) {
    console.log('Title')
    return (
        <div>
            {title}
        </div>
    )
}

export default React.memo(Title)