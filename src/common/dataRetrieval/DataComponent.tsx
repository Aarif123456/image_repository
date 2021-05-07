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
    /*If component is not ready to call then we just return a placeholder */
    if (!isReady) return <div />;
    if (isError && (data as ErrorType) !== undefined) {
        const errMsg = (data as ErrorType)?.error;
        return <RetrieveErrorBox errorMessage={errMsg} />;
    }
    if (isLoading) {
        return <ProgressCircle />;
    }
    if ((data as T) === undefined) {
        return <RetrieveErrorBox errorMessage={intl.formatMessage({ id: 'Error.UNEXPECTED_DATA_FORMAT' })} />;
    }

    /* After going through all the possible reasons we can have an error, '
     * we finally try to render the component with the information we
     * retrieved from our end point
     */
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
