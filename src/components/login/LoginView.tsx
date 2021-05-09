import { FunctionComponent } from 'react';
/* Handle error in program */
import { ErrorFallback } from '../../common';
import { Container } from '@material-ui/core';
import { Login } from './Login';

export const LoginView: FunctionComponent = () => (
    <ErrorFallback>
        <Container component='main' maxWidth='xs'>
            <Login />
        </Container>
    </ErrorFallback>
);
