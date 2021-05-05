/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { FunctionComponent } from 'react';

import { MessageBox } from '../common';

export type RetrieveErrorBoxProps = { errMsg: string };
export const RetrieveErrorBox: FunctionComponent<RetrieveErrorBoxProps> = ({ errMsg }) => (
    <MessageBox type='error'>
        <b>Error</b>: We encountered an error while retrieving data:
        <i>{errMsg}</i>
        <br />
        <br />
        Try refreshing the page, and please contact our team if this issue persists.
    </MessageBox>
);
