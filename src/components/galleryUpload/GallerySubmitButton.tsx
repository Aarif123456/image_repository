import { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Button } from '@material-ui/core';

export const SubmitButton: FunctionComponent = () => (
    <Button variant='contained' type='submit' color='primary'>
        <FormattedMessage id='FileManagement.upload' />
    </Button>
);
