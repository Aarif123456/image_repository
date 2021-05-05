import { FunctionComponent } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';

export const LoginButton: FunctionComponent = (props) => {
    const history = useHistory();
    const goToLoginPage = (): void => {
        history.push('/login');
    };
    return (
        <Button onClick={goToLoginPage} {...props}>
            <FormattedMessage id='LandingPage.LoginButton' />
        </Button>
    );
};
