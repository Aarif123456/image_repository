import { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Button } from '@material-ui/core';

export type ResetButtonProps = {
    resetForm: () => void;
};
export const ResetButton: FunctionComponent<ResetButtonProps> = ({ resetForm }) => (
    <Button variant='contained' color='primary' onClick={resetForm}>
        <FormattedMessage id='FileManagement.clear' />
    </Button>
);
