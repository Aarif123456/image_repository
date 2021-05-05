import React, { FunctionComponent } from 'react';

import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

type MessageBoxTypes = 'warning' | 'error';

interface Props {
    className?: string;
    type: MessageBoxTypes;
}

const useStyles = makeStyles({
    default: {
        padding: '15px'
    },
    error: {
        backgroundColor: '#f2dede',
        color: '#a94442'
    },
    warning: {
        backgroundColor: '#fcf8e3',
        color: '#8a6d3b'
    }
});

const getStylesForType = (classes: ReturnType<typeof useStyles>, type: MessageBoxTypes): string => {
    switch (type) {
        case 'error':
            return classes.error;
        case 'warning':
            return classes.warning;
    }
};

export const MessageBox: FunctionComponent<Props> = ({ children, className, type }) => {
    const classes = useStyles();
    return <Paper className={clsx(classes.default, getStylesForType(classes, type), className)}>{children}</Paper>;
};
