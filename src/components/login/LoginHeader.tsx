import { FunctionComponent } from 'react';
import { useLoginHeaderStyles } from './LoginStyle';
import { Avatar, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { FormattedMessage } from 'react-intl';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';

export const LoginHeader: FunctionComponent = () => {
    const classes: ClassNameMap = useLoginHeaderStyles();
    return (
        <>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component='h1' variant='h5'>
                <FormattedMessage id='UserManagement.login' />
            </Typography>
        </>
    );
};
