import React from 'react'
import useCounter from './useCounter'

function CounterOne() {
    
    const[count, incrementCount, decrementCount, reset] = useCounter()

    return (
        <div>
            <h2>Count - {count}</h2>
            <button onClick={incrementCount}>Increment</button>
            <button onClick={decrementCount}>decrement</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}

export default CounterOne
