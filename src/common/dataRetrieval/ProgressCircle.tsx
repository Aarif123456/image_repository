import { FunctionComponent } from 'react';
import { CircularProgress } from '@material-ui/core';
import { Theme, makeStyles } from '@material-ui/core/styles';

interface Props {
    inline?: boolean;
    size?: number;
}

const useStyles = makeStyles<Theme, { inline?: boolean }>({
    progress: {
        display: ({ inline }): string => (inline ? 'default' : 'block'),
        margin: ({ inline }): string => (inline ? '0' : 'auto')
    }
});

export const ProgressCircle: FunctionComponent<Props> = ({ inline, size }) => {
    const classes = useStyles({ inline });

    return <CircularProgress className={classes.progress} size={size ? size : 40} />;
};
