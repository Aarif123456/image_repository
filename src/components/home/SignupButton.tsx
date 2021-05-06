import { FunctionComponent } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';

/*TODO: use ButtonbaseProps to set props */
export const SignUpButton: FunctionComponent = (props) => {
    const history = useHistory();
    const goToLoginPage = (): void => {
        history.push('/signup');
    };
    return (
        <Button onClick={goToLoginPage} {...props}>
            {' '}
            <FormattedMessage id='UserManagement.signup' />
        </Button>
    );
};
