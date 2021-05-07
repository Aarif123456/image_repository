import { FunctionComponent } from 'react';
import { MessageBox, MessageBoxTypes } from '..';
import { MessageDescriptor, FormattedMessage } from 'react-intl';

export interface InternationalizedMessageBoxProp extends MessageDescriptor {
    errorMessage?: string;
    className?: string;
    type: MessageBoxTypes;
}

/* Used to italicize and bold */
export const bolder: FunctionComponent = (chunks) => <b>{chunks}</b>;
export const emphasizer: FunctionComponent = (chunks) => <em>{chunks}</em>;

export const InternationalizedMessageBox: FunctionComponent<InternationalizedMessageBoxProp> = ({
    type,
    className,
    errorMessage,
    id,
    defaultMessage,
    description
}) => (
    <MessageBox type={type} className={className}>
        <FormattedMessage
            id={id}
            defaultMessage={defaultMessage}
            description={description}
            values={{
                breakingLine: <br />,
                b: bolder,
                em: emphasizer,
                i: emphasizer,
                errorMessage: errorMessage ?? 'Something went wrong :('
            }}
        />
    </MessageBox>
);
