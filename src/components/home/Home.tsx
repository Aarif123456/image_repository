import { FunctionComponent } from 'react';
// import {useHomeStyles} from '.';
import { ButtonGroup } from '@material-ui/core';
import { LoginButton, SignUpButton } from '.';

export const Home: FunctionComponent = () => {
    // const classes = useHomeStyles();
    return (
        <ButtonGroup orientation='vertical' color='primary' aria-label='vertical landing page button group'>
            <LoginButton />
            <SignUpButton />
        </ButtonGroup>
    );
};
