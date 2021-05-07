import { FunctionComponent } from 'react';
import { InternationalizedMessageBox, InternationalizedMessageBoxProp } from '..';
export type RetrieveErrorBoxProps = Omit<InternationalizedMessageBoxProp, 'type' | 'id'>;
export const RetrieveErrorBox: FunctionComponent<RetrieveErrorBoxProps> = ({ className, errorMessage, defaultMessage, description }) => (
    <InternationalizedMessageBox
        type='error'
        id='Error.retrieveError'
        className={className}
        errorMessage={errorMessage}
        defaultMessage={defaultMessage}
        description={description}
    />
);
