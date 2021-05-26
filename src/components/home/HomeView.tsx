import { FunctionComponent } from 'react';
/* Handle error in program */
import { ErrorFallback } from '../../common/errorHandling';
import { Home, useBackgroundStyle } from '../home';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';

export const HomeView: FunctionComponent = () => {
    /* Load main background */
    const classes: ClassNameMap = useBackgroundStyle();
    return (
        <ErrorFallback>
            <div className={classes.backgroundContainer}>
                <Home />
            </div>
        </ErrorFallback>
    );
};
