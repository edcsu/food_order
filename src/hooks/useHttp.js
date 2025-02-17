import { useCallback, useEffect, useState } from "react";

async function SendHttpRequest(url, config) {
    const response = await fetch(url, config)

    const data = await response.json()

    if (!response.ok) {
        throw new Error(data.message || "Failed to send request");
    }

    return data
}

export default function useHttp(url, config, initialData) {
    const [data, setData] = useState(initialData)
    const [error, setError] = useState()
    const [isLoading, setIsLoading] = useState(false)

    function clearData() {
        setData(initialData)
    }

    const sendRequest = useCallback(async function sendRequest(data) {
        setIsLoading(true)
        try {
            const resData = await SendHttpRequest(url, { ...config, body: data})
            setData(resData)            
        } catch (err) {
            setError(err.message || "Something went wrong")        
        }
        setIsLoading(false)
    }, [url, config])
    
    useEffect(() => {
        if (config && (config.method === 'GET' || 
            !config.method ||
            !config
        )) {
            sendRequest()            
        }
    }, [sendRequest, config])
    

    return {
        data,
        isLoading,
        error,
        sendRequest,
        clearData
    }
};
