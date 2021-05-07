import { FunctionComponent } from 'react';
import { Button } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';
import { useLoginButtonStyles } from './LoginStyle';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';

export const SubmitButton: FunctionComponent = () => {
    const classes: ClassNameMap = useLoginButtonStyles();
    return (
        <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
            <FormattedMessage id='UserManagement.login' />
        </Button>
    );
};
