import { FunctionComponent } from 'react';

import { ErrorBoundary, FallbackProps } from 'react-error-boundary';

import { MessageBox } from '..';

const FallbackComponent: FunctionComponent<FallbackProps> = ({ error }) => (
    <MessageBox type='error'>
        <b>Error</b>: An error occurred while rendering a component: <i>{error.message}</i>
        <br />
        <br />
        Try refreshing the page, and please contact our team if this issue persists.
    </MessageBox>
);

const myErrorHandler = (_error: Error, info: { componentStack: string }) => {
    console.error(`ComponentStack:${info.componentStack}`);
};

export const ErrorFallback: FunctionComponent = ({ children }) => (
    <ErrorBoundary FallbackComponent={FallbackComponent} onError={myErrorHandler}>
        {children}
    </ErrorBoundary>
);
