import { FunctionComponent } from 'react';
import { TextField as MaterialTextField, InputBaseProps as InputProps } from '@material-ui/core';
import { useIntl } from 'react-intl';

export type TextInputFieldProps = {
    id: string;
    name: string;
    autoCompleteName: string;
    labelTranslatorId: string;
    autoFocus?: boolean;
    type?: string;
    inputProps?: InputProps;
};

export const TextField: FunctionComponent<TextInputFieldProps> = ({
    id,
    name,
    autoCompleteName,
    labelTranslatorId,
    inputProps,
    autoFocus,
    type
}) => {
    const intl = useIntl();
    return (
        <>
            <MaterialTextField
                id={id}
                autoComplete={autoCompleteName}
                name={name}
                variant='outlined'
                required
                fullWidth
                label={intl.formatMessage({ id: labelTranslatorId })}
                autoFocus={autoFocus}
                type={type !== undefined ? type : 'text'}
                InputProps={{
                    ...inputProps
                }}
            />
        </>
    );
};
