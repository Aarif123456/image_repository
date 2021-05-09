import { useState } from 'react';
import { AxiosResponse } from 'axios';
import { AXIOS_ENDPOINT } from './apiConstants';

export type ErrorType = { error: string } | undefined;
export type AjaxType<T, Y> = {
    error: ErrorType;
    isLoading: boolean;
    data: T | undefined;
    ajax: (args?: Y) => void;
};
export type Setters<T> = (x: T) => void;

export function ajaxCall<T, Y>(
    endpoint: string,
    setLoading: Setters<boolean>,
    setData: Setters<T>,
    setError: Setters<ErrorType>,
    args?: Y
): void {
    type ReturnType = T | ErrorType;
    setLoading(true);
    AXIOS_ENDPOINT.post(endpoint, args)
        .then((response: AxiosResponse<ReturnType>) => {
            const result: ReturnType = response.data;
            setLoading(false);
            setData(result as T);
            if (result !== undefined && 'error' in result) {
                setError({ error: result.error });
            }
        })
        .catch((error): void => {
            if ((error as Error) !== undefined) {
                const e: ErrorType = { error: (error as Error).message ?? 'Unknown error' };
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
