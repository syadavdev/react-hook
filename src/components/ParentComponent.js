import React, { useState, useCallback } from 'react'
import Button from './Button'
import Count from './Count'
import Title from './Title'

function ParentComponent() {

    const [age, setAge] = useState(25)
    const [salery, setSalery] = useState(10000)

    const incrementAge = useCallback(() => {
        setAge(age + 1)
    }, [age])

    const incrementSalery = useCallback(() => {
        setSalery(salery + 10000)
    }, [salery])

    return (
        <div>
            <Title title='Testing Text' />
            <Count count={age} />
            <Button count={age} handleClick={incrementAge}>Increment Age</Button>
            <Count count={salery} />
            <Button count={salery} handleClick={incrementSalery}>Increment Salery</Button>
        </div>
    )
}

export default ParentComponent