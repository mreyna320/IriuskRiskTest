//  "message": "ok",
//  "total_records": 60,
//  "total_pages": 6,
//  "previous": null,
//  "next": "https://swapi.tech/api/planets?page=2&limit=10",
//  "results": []

import { useCallback, useState, useEffect } from "react";

export const PAGE_LIMIT = 12;

export const usePaginatedResource = (resource) => {

    const [paginatedData, setPaginatedData] = useState();
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false)

    const fetchFunction = useCallback((uri) => {
        setLoading(true);
        fetch(uri)
            .then(res => res.json())
            .then(data => setPaginatedData(data))
            .catch(err => alert("ERROR", err))
            .finally(() => setLoading(false))
    }, [setPaginatedData, setLoading])

    useEffect(() => {
        fetchFunction(`https://www.swapi.tech/api/${resource}/?page=1&limit=${PAGE_LIMIT}`);
    }, [resource, fetchFunction])


    return {
        loading,
        page,
        data: paginatedData,
        nextPage: () => {
            setPage(prev => prev + 1);
            fetchFunction(paginatedData.next)
        },
        previousPage: () => {
            setPage(prev => prev - 1);
            fetchFunction(paginatedData.previous)
        },
    };
}