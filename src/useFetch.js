import { useState } from 'react'

// set delay
const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

const API_URL = 'http://localhost:3004'

const useFetch = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null) // 통신 성공에 대한 데이터
    const [error, setError] = useState(null) // 통신 실패에 대한 데이터, 메세지

    // GET
    const getWorks = async () => {
        setLoading(true)
        try {
            const response = await fetch(API_URL + '/works')
            const initialData = await response.json()
            await sleep(1500)
            setData(initialData)
        } catch (e) {
            setError(e)
        } finally {
            setLoading(false)
        }
    }

    // POST
    const addWork = async (title) => {
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: title, status: 'todo' }) 
        }
        
        setLoading(true)
        try {
            const response = await fetch(API_URL + '/works', options)
            const responseData = await response.json()
            await sleep(800)
            setData(responseData)
        } catch (e) {
            setError(e)
            
        } finally {
            setLoading(false)
        }
    }

    return { loading, data, error, getWorks, addWork }
}

export default useFetch