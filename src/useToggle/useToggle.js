import React, { useState } from 'react'

const useToggle = (initalValue) => {
    const [value, setValue] = useState(initalValue)
    const toggle = (l) => {
        setValue(prevState => typeof l === 'boolean' ? l : !prevState)
    }
    return [value, toggle]
}

export default useToggle
