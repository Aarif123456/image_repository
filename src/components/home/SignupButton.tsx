import { FunctionComponent } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';

export const SignUpButton: FunctionComponent = (props) => {
    const history = useHistory();
    const goToSignupPage = (): void => {
        history.push('/signup');
    };
    return (
        <Button onClick={goToSignupPage} {...props}>
            {' '}
            <FormattedMessage id='UserManagement.signup' />
        </Button>
    );
};
