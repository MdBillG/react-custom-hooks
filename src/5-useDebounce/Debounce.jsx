import React, { useEffect, useState } from 'react'
import useDebounce from './useDebounce'

const Debounce = () => {
    const [inputValue, setinputValue] = useState('')
    const debounce = useDebounce(inputValue, 500)
    const handleChange = (e) => {
        setinputValue(e.target.value)
    }
    useEffect(() => {
        if (debounce) {
            fetch('https:/abc')
        }
    }, [debounce])

    return (
        <div>
            <input type="text"
                value={inputValue}
                onChange={handleChange} />
            {debounce}
        </div>
    )
}

export default Debounce
