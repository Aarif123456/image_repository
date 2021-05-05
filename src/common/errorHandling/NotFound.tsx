import React, { FunctionComponent } from 'react';
import { Typography } from '@material-ui/core';
import { ErrorBoundary } from '../errorHandling';
import { MessageBox } from '../common';
import { SearchBar, useRootPageStyles } from '../components/search';
import { FormattedMessage } from 'react-intl';
export const NotFound: FunctionComponent = () => {
    const classes = useRootPageStyles();
    return (
        <div className={classes.root}>
            <ErrorBoundary>
                <SearchBar activeMode='transporter' />
            </ErrorBoundary>
            <ErrorBoundary>
                <MessageBox type='error'>
                    <Typography variant='h5'>
                        <FormattedMessage id='Error.404.greeting' />
                    </Typography>
                    <Typography variant='h6'>
                        <FormattedMessage id='Error.404.message' />
                    </Typography>
                    <Typography variant='body2'>
                        <FormattedMessage id='Error.404.errorBody' />
                    </Typography>
                </MessageBox>
            </ErrorBoundary>
        </div>
    );
};
