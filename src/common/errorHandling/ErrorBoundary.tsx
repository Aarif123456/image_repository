/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { FunctionComponent } from 'react';

import ReactErrorBoundary, { FallbackProps } from 'react-error-boundary';

import { MessageBox } from '../common';

const FallbackComponent: FunctionComponent<FallbackProps> = ({ componentStack, error }) => (
    <MessageBox type='error'>
        <b>Error</b>: An error occurred while rendering a component: <i>{error!.message}</i>
        <br />
        <br />
        Try refreshing the page, and please contact our team if this issue persists.
        <br />
        <br />
        <b>ComponentStack:</b> {componentStack}
    </MessageBox>
);

export const ErrorBoundary: FunctionComponent = ({ children }) => (
    <ReactErrorBoundary FallbackComponent={FallbackComponent}>{children}</ReactErrorBoundary>
);
