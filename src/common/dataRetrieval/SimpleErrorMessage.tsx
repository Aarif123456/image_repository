import { FunctionComponent } from 'react';
import { ErrorMessageType } from './AjaxComponent';

export const SimpleErrorMessage: FunctionComponent<ErrorMessageType> = ({ errorMessage }) => {
    if (errorMessage !== undefined) {
        return <div> {errorMessage} </div>;
    }
    return <div />;
};
