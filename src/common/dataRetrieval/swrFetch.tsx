import { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';
import { AXIOS_ENDPOINT } from './apiConstants';
import { AjaxType, ErrorType, ReturnType } from './useAjax';
import useSWR from 'swr';
import { MutatorCallback } from 'swr/dist/types';
interface useAjaxReturn<T, Y> extends Omit<AjaxType<T, Y>, 'ajax'> {
    mutate: MutatorCallback;
}
export const useSwrAjax = <T, Y>(endpoint: string, args?: Y): useAjaxReturn<T, Y> => {
    const fetcher = (url: string) =>
        AXIOS_ENDPOINT.get<T>(url, { params: args }).then((response: AxiosResponse<ReturnType<T>>) => response.data);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { data, error: swrError, mutate } = useSWR(endpoint, fetcher);
    const [error, setError] = useState<ErrorType>(undefined as ErrorType);
    useEffect(() => {
        if (swrError && 'message' in swrError) {
            setError({ error: (swrError as Error).message });
        } else if (data !== undefined && 'error' in data) {
            setError({ error: data.error });
        }
    }, [data, swrError]);

    return {
        data: (data as T) ?? undefined,
        isLoading: error === undefined && data === undefined,
        error,
        mutate
    };
};
