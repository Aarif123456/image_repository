import { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';
import { AXIOS_ENDPOINT } from './apiConstants';
import { AjaxType, ErrorType, ReturnType } from './useAjax';
import useSWR from 'swr';

type useAjaxReturn<T, Y> = Omit<AjaxType<T, Y>, 'ajax'>;
export const useSwrAjax = <T, Y>(endpoint: string, args?: Y): useAjaxReturn<T, Y> => {
    const fetcher = (url: string) =>
        AXIOS_ENDPOINT.get<T>(url, { params: args }).then((response: AxiosResponse<ReturnType<T>>) => response.data);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { data, error: swrError } = useSWR(endpoint, fetcher);
    const [error, setError] = useState<ErrorType>(undefined as ErrorType);
    useEffect(() => {
        if (swrError && 'message' in swrError) {
            setError({ error: true, message: (swrError as Error).message });
        } else if (data && 'error' in data && data.error) {
            setError(data as ErrorType);
        }
    }, [data, swrError]);

    return {
        data: (data as T) ?? undefined,
        isLoading: error === undefined && data === undefined,
        error
    };
};
