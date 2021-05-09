import * as yup from 'yup';
import { IntlShape } from 'react-intl';

export interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export function getValidationSchema(intl: IntlShape): yup.SchemaOf<FormValues> {
    return yup
        .object({
            email: yup
                .string()
                .email(intl.formatMessage({ id: 'UserManagement.validEmail' }))
                .required(intl.formatMessage({ id: 'UserManagement.requiredEmail' })),
            password: yup
                .string()
                .min(8, intl.formatMessage({ id: 'UserManagement.validPassword' }))
                .required(intl.formatMessage({ id: 'UserManagement.requiredPassword' })),
            confirmPassword: yup
                .string()
                .oneOf([yup.ref('password'), null], intl.formatMessage({ id: 'UserManagement.validConfirmPassword' }))
                .required(intl.formatMessage({ id: 'UserManagement.requiredConfirmPassword' })),
            firstName: yup.string().required(intl.formatMessage({ id: 'UserManagement.requiredFirstName' })),
            lastName: yup.string().required(intl.formatMessage({ id: 'UserManagement.requiredLastName' }))
        })
        .defined();
}
