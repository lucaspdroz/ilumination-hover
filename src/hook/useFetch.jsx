import { useState, useEffect } from 'react';

const useFetch = (url, method = 'GET', body = null) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(url, {
                    method,
                    body: body ? JSON.stringify(body) : null,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error('Request failed');
                }

                const responseData = await response.json();
                setData(responseData);
            } catch (error) {
                setError(error.message || 'An error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url, method, body]);

    return { data, error, loading };
};

export default useFetch;
