import { FunctionComponent } from 'react';
/* Handle error in program */
import { ErrorFallback } from '../../common/errorHandling';
import { Home } from './Home';

export const HomeView: FunctionComponent = () => (
    <ErrorFallback>
        <Home />
    </ErrorFallback>
);
