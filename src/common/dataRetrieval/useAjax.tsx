import { useState } from 'react';
import { AxiosResponse } from 'axios';
import { AXIOS_ENDPOINT } from './apiConstants';

export type ErrorType = { error: string } | undefined;
export type AjaxType<T> = {
    isError: boolean;
    isLoading: boolean;
    data: T;
};

export function useAjax<T, Y>(endpoint: string, isReady: boolean, args?: Y): AjaxType<T | ErrorType> {
    type ReturnType = T | ErrorType;
    const [isError, setError] = useState(false);
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState<ReturnType>(undefined as ReturnType);
    if (isReady && !isError) {
        AXIOS_ENDPOINT.post(endpoint, args)
            .then((response: AxiosResponse<ReturnType>) => {
                const result: ReturnType = response.data;
                setLoading(false);
                setData(result);
                /* If the received data wasn't the expected type we set isError*/
                setError((result as T) === undefined);
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

    return {
        data,
        isLoading,
        isError
    };
}
