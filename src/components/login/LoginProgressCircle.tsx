import { FunctionComponent } from 'react';
import { Backdrop } from '@material-ui/core';
import { ProgressCircle } from '../../common';
import { useLoginLoadingStyles } from './LoginStyle';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';

export const LoginProgressCircle: FunctionComponent = () => {
    const classes: ClassNameMap = useLoginLoadingStyles();
    return (
        <Backdrop className={classes.backdrop} open={true}>
            <ProgressCircle />
        </Backdrop>
    );
};
