import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState('')

    const fetchData = async () => {
        const response = await fetch(url)
        const result = await response.json()
        setData(result)
    }

    return { data, fetchData }

}

export default useFetch
