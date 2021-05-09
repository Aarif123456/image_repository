import { useState } from 'react';
import { AxiosResponse } from 'axios';
import { AXIOS_ENDPOINT } from './apiConstants';

export type ErrorType = { error: string } | undefined;
export type AjaxType<T, Y> = {
    isError: boolean;
    isLoading: boolean;
    data: T;
    ajax: (args?: Y) => void;
};
export type Setters<T> = (x: T) => void;

export function ajaxCall<T, Y>(endpoint: string, setLoading: Setters<boolean>, setData: Setters<T | ErrorType>, setError: Setters<boolean>, args?: Y): void {
    type ReturnType = T | ErrorType;
    setLoading(true);
    AXIOS_ENDPOINT.post(endpoint, args)
        .then((response: AxiosResponse<ReturnType>) => {
            const result: ReturnType = response.data;
            setLoading(false);
            setData(result);
            if (result !== undefined && 'error' in result) {
                setError(true);
            }
        })
        .catch((error): void => {
            console.log(error);
            setError(true);
            if ((error as Error) !== undefined) {
                const val: ErrorType = { error: (error as Error).message ?? 'Unknown error' };
                setData(val);
            }
        });
}

export function useAjax<T, Y>(endpoint: string): AjaxType<T | ErrorType, Y> {
    type ReturnType = T | ErrorType;
    const [isError, setError] = useState(false);
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState<ReturnType>(undefined as ReturnType);
    const ajax = (args?: Y) => ajaxCall<T, Y>(endpoint, setLoading, setData, setError, args);

    return {
        isError,
        isLoading,
        data,
        ajax
    };
}