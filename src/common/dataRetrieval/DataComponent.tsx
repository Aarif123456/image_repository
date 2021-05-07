import { FunctionComponent, ReactNode } from 'react';
import { useIntl } from 'react-intl';
import { RetrieveErrorBox, ProgressCircle, useAjax, ErrorType } from '../dataRetrieval';
export type ErrorMessageType = { errorMessage?: string };
export type FetchComponentProps<T> = {
    data: T;
};
interface Props<T, Y> {
    SuccessReturn: FunctionComponent<FetchComponentProps<T>>;
    endpoint: string;
    isReady: boolean;
    args?: Y;
}

export function DataComponent<T, Y>(props: Props<T, Y> & { children?: ReactNode }): JSX.Element {
    const { SuccessReturn, endpoint, isReady, args } = props;
    const { data, isLoading, isError } = useAjax<T, Y>(endpoint, isReady, args);
    const intl = useIntl();
    if (!isReady) return <div />;
    if (isError && (data as ErrorType) !== undefined) {
        const errMsg = (data as ErrorType)?.error;
        return <RetrieveErrorBox errorMessage={errMsg} />;
    } else if (isLoading) {
        return <ProgressCircle />;
    } else {
        if ((data as T) === undefined) {
            return <RetrieveErrorBox errorMessage={intl.formatMessage({ id: 'Error.UNEXPECTED_DATA_FORMAT' })} />;
        }
        try {
            return <SuccessReturn data={data as T} />;
        } catch (error) {
            let errorMessage = 'Unknown error';
            if ((error as Error) !== undefined) {
                const val: ErrorMessageType = { errorMessage: (error as Error).message ?? '' };
                errorMessage = intl.formatMessage({ id: 'Error.processingError' }, val);
            }
            return <RetrieveErrorBox errorMessage={errorMessage} />;
        }
    }
}
