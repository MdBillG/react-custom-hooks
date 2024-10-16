import React from 'react'
import useLocalStorage from './useLocalStorage'

const LocalStorage = () => {
    const { value } = useLocalStorage('loglevel')
    return (
        <div>
            {value}
        </div>
    )
}

export default LocalStorage
