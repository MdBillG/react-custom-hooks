import React from 'react'
import useFetch from './useFetch'

const Fetch = () => {
    const { data, fetchData } = useFetch("https:/abs")
    const handleClick = () => {
        fetchData()
    }
    return (
        <div>
            <button onClick={() => { handleClick() }}>click</button>
        </div>
    )
}

export default Fetch
