import { FunctionComponent } from 'react';
import { useSignUpHeaderStyles } from './SignUpStyle';
import { Avatar, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { FormattedMessage } from 'react-intl';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';

export const SignUpHeader: FunctionComponent = () => {
    const classes: ClassNameMap = useSignUpHeaderStyles();
    return (
        <>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component='h1' variant='h5'>
                <FormattedMessage id='UserManagement.signup' />
            </Typography>
        </>
    );
};
