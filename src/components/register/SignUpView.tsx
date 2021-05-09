import { FunctionComponent } from 'react';
/* Handle error in program */
import { ErrorFallback } from '../../common';
import { Container } from '@material-ui/core';
import { SignUp } from './SignUp';

export const SignUpView: FunctionComponent = () => (
    <ErrorFallback>
        <Container component='main' maxWidth='xs'>
            <SignUp />
        </Container>
    </ErrorFallback>
);
