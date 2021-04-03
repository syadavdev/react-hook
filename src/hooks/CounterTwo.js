import React from 'react'
import useCounter from './useCounter'

function CounterTwo() {

    const[count, incrementCount, decrementCount, reset] = useCounter(20, 10)

    return (
        <div>
            <h2>Count - {count}</h2>
            <button onClick={incrementCount}>Increment</button>
            <button onClick={decrementCount}>decrement</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}

export default CounterTwo
