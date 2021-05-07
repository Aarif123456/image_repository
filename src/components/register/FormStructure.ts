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
                .email(intl.formatMessage({ id: 'Signup.validEmail' }))
                .required(intl.formatMessage({ id: 'Signup.requiredEmail' })),
            password: yup
                .string()
                .min(8, intl.formatMessage({ id: 'Signup.validPassword' }))
                .required(intl.formatMessage({ id: 'Signup.requiredPassword' })),
            confirmPassword: yup
                .string()
                .oneOf([yup.ref('password'), null], intl.formatMessage({ id: 'Signup.validConfirmPassword' }))
                .required(intl.formatMessage({ id: 'Signup.requiredConfirmPassword' })),
            firstName: yup.string().required(intl.formatMessage({ id: 'Signup.requiredFirstName' })),
            lastName: yup.string().required(intl.formatMessage({ id: 'Signup.requiredLastName' }))
        })
        .defined();
}
