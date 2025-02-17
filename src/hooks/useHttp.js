import { useCallback, useEffect, useState } from "react";

async function SendHttpRequest(url, config) {
    const response = await fetch(url, config)

    const data = await response.json

    if (!response.ok) {
        throw new Error(data.message || "Failed to send request");
    }

    return data
}

export default function useHttp(url, config) {
    const [data, setData] = useState()
    const [error, setError] = useState()
    const [isLoading, setIsLoading] = useState(false)

    const sendRequest = useCallback(async function sendRequest() {
        setIsLoading(true)
        try {
            const resData = await SendHttpRequest(url, config)
            setData(resData)            
        } catch (err) {
            setError(err.message || "Something went wrong")        
        }
        setIsLoading(false)
    }, [url, config])
    
    useEffect(() => {
        if (config && config.method === 'GET') {
            sendRequest()            
        }
    }, [sendRequest, config])
    

    return {
        data,
        isLoading,
        error,
        sendRequest
    }
};
