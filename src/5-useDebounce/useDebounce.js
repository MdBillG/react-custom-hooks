import React, { useEffect, useState } from 'react'

const useDebounce = (value, delay) => {
    console.log("vale", value)
    const [debouncedValue, setDebouncedValue] = useState(value)
    console.log("debouncedValue", debouncedValue)

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value)
        }, delay);
        return () => {
            clearTimeout(handler)
        }
    }, [value, delay])
    return debouncedValue
}

export default useDebounce
