import { FunctionComponent, ReactNode } from 'react';
import { useIntl } from 'react-intl';
import { RetrieveErrorBox, ProgressCircle, useAjax, AjaxType } from '../dataRetrieval';

export type ErrorMessageType = { errorMessage?: string };
export type FetchComponentProps<T> = {
    data: T;
};

interface Props<T> {
    endpoint: string;
    SuccessComponent: FunctionComponent<FetchComponentProps<T>>;
    LoadingComponent?: FunctionComponent;
    ErrorComponent?: FunctionComponent<ErrorMessageType>;
}

interface AjaxComponentReturn<T, Y> extends AjaxType<T, Y> {
    AjaxComponent: FunctionComponent;
}

export function useAjaxComponent<T, Y>(props: Props<T> & { children?: ReactNode }): AjaxComponentReturn<T, Y> {
    const { endpoint, SuccessComponent, ErrorComponent = RetrieveErrorBox, LoadingComponent = ProgressCircle } = props;
    const { data, isLoading, error, ajax } = useAjax<T, Y>(endpoint);
    const intl = useIntl();
    const AjaxComponent: FunctionComponent = () => {
        /*If component is not ready to call then we just return a placeholder */
        if (error !== undefined && error.error !== undefined) {
            return <ErrorComponent errorMessage={error?.error} />;
        }
        if (isLoading) {
            return <LoadingComponent />;
        }
        if (data === undefined) {
            return <div />;
        }

        /* After going through all the possible reasons we can have an error, '
         * we finally try to render the component with the information we
         * retrieved from our end point
         */
        try {
            return <SuccessComponent data={data} />;
        } catch (error) {
            let errorMessage = 'Unknown error';
            if ((error as Error) !== undefined) {
                const val: ErrorMessageType = { errorMessage: (error as Error).message ?? '' };
                errorMessage = intl.formatMessage({ id: 'Error.processingError' }, val);
            }
            return <ErrorComponent errorMessage={errorMessage} />;
        }
    };

    return {
        data,
        isLoading,
        error,
        ajax,
        AjaxComponent
    };
}
