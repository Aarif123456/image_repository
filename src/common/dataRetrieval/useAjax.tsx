import { useState } from 'react';
import { AxiosResponse } from 'axios';
import { AXIOS_ENDPOINT } from './apiConstants';

export type ErrorType = { error: boolean; message?: string } | undefined;
export type AjaxType<T, Y> = {
    error: ErrorType;
    isLoading: boolean;
    data: T | undefined;
    ajax: (args?: Y) => void;
};
export type Setters<T> = (x: T) => void;
export type ReturnType<T> = T | ErrorType;

export function ajaxCall<T, Y>(
    endpoint: string,
    setLoading: Setters<boolean>,
    setData: Setters<T>,
    setError: Setters<ErrorType>,
    args?: Y
): void {
    setLoading(true);
    AXIOS_ENDPOINT.post(endpoint, args)
        .then((response: AxiosResponse<ReturnType<T>>) => {
            const result: ReturnType<T> = response.data;
            setLoading(false);
            setData(result as T);
            if (result && 'error' in result && result.error) {
                setError(result as ErrorType);
            }
        })
        .catch((error): void => {
            if ((error as Error) !== undefined) {
                const e: ErrorType = { error: true, message: (error as Error)?.message ?? 'Unknown error' };
                setError(e);
                setLoading(false);
            }
        });
}

export function useAjax<T, Y>(endpoint: string): AjaxType<T, Y> {
    const [error, setError] = useState<ErrorType>(undefined as ErrorType);
    const [isLoading, setLoading] = useState(false);
    const [data, setData] = useState<T>();
    const ajax = (args?: Y) => ajaxCall<T, Y>(endpoint, setLoading, setData, setError, args);

    return {
        error,
        isLoading,
        data,
        ajax
    };
}
