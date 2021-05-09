import { FunctionComponent } from 'react';
import { FetchComponentProps } from '../../common/dataRetrieval';
import { FormattedMessage } from 'react-intl';
export type SignupApiReturn = {
    id: string | number;
    message?: string;
};
export type SuccessProps = FetchComponentProps<SignupApiReturn>;

export const SignupMessage: FunctionComponent<SuccessProps> = ({ data }) => {
    if (data !== undefined) {
        if ('id' in data && data.id !== undefined) {
            return <FormattedMessage id='UserManagement.signupSuccess' />;
        } else if ('message' in data && data.message !== undefined) {
            return <div> {data.message} </div>;
        }
    }
    return <div />;
};
