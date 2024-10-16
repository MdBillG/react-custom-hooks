import React, { useEffect, useState } from 'react'

const useLocalStorage = (key) => {
    const [value, setValue] = useState()
    useEffect(() => {
        const item = localStorage.getItem(key)
        setValue(item)
    }, [key])
    return { value }
}

export default useLocalStorage
