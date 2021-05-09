import * as yup from 'yup';
import { IntlShape } from 'react-intl';

export interface FormValues {
    email: string;
    password: string;
    remember?: boolean;
}

export function getValidationSchema(intl: IntlShape): yup.SchemaOf<FormValues> {
    return yup
        .object({
            email: yup
                .string()
                .email(intl.formatMessage({ id: 'UserManagement.validEmail' }))
                .required(intl.formatMessage({ id: 'UserManagement.requiredEmail' })),
            password: yup.string().required(intl.formatMessage({ id: 'UserManagement.requiredPassword' })),
            remember: yup.boolean()
        })
        .defined();
}
