import React, {useState, useEffect, useRef} from 'react'

function HookTimer() {

    const [count, setCount] = useState(0)
    const intervalRef = useRef()

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCount(count => count + 1)
        }, 1000)

        return () => {
            clearInterval(intervalRef.current)  //clear function
        }
    }, [])

    return (
        <div>
            Count - {count}
            <button onClick={() => clearInterval(intervalRef.current)}>Clear</button>
        </div>
    )
}

export default HookTimer
