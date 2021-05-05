import { FunctionComponent } from 'react';
import { Typography } from '@material-ui/core';
import { ErrorFallback } from './ErrorFallback';
import { MessageBox } from '..';
import { SearchBar, useRootPageStyles } from '../../components/search';
import { FormattedMessage } from 'react-intl';

export const NotFound: FunctionComponent = () => {
    const classes = useRootPageStyles();
    return (
        <div className={classes.root}>
            <ErrorFallback>
                <SearchBar activeMode='transporter' />
            </ErrorFallback>
            <ErrorFallback>
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
            </ErrorFallback>
        </div>
    );
};
