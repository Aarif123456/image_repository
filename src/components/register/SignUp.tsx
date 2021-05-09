import { FunctionComponent } from 'react';
import { useAjaxComponent, SimpleErrorMessage } from '../../common/dataRetrieval';
import { Link, TextField } from '../../common';
import { FormValues, getValidationSchema } from './FormStructure';
import { useSignUpStyles } from './SignUpStyle';
import { SignUpHeader } from './SignUpHeader';
import { SignupApiReturn, SignupMessage } from './SignupMessage';
import { SubmitButton } from './SignUpSubmitButton';
import { Grid } from '@material-ui/core';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';
import { useFormik } from 'formik';
import { useIntl } from 'react-intl';

/* Modified from https://github.com/mui-org/material-ui/tree/master/docs/src/pages/getting-started/templates/sign-up */

export const SignUp: FunctionComponent = () => {
    const classes: ClassNameMap = useSignUpStyles();
    const intl = useIntl();
    const validationSchema = getValidationSchema(intl);
    const formik = useFormik({
        initialValues: validationSchema.cast({
            email: '',
            password: '',
            confirmPassword: '',
            firstName: '',
            lastName: ''
        }),
        validationSchema: validationSchema,
        onSubmit: (values) => {
            ajax(values as FormValues);
        }
    });

    const { ajax, AjaxComponent } = useAjaxComponent<SignupApiReturn, FormValues>({
        endpoint: '/userManagement/addUser',
        SuccessComponent: SignupMessage,
        ErrorComponent: SimpleErrorMessage
    });

    /* Manage form data then pass it to the submit button */
    return (
        <div className={classes.paper}>
            <SignUpHeader />
            <form className={classes.form} onSubmit={formik.handleSubmit} noValidate>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            autoCompleteName='firstName'
                            name='firstName'
                            id='firstName'
                            labelTranslatorId='UserManagement.firstName'
                            autoFocus
                            helperText={formik.touched.firstName && formik.errors.firstName}
                            inputProps={{
                                value: formik.values.firstName,
                                onChange: formik.handleChange,
                                error: formik.touched.firstName && Boolean(formik.errors.firstName)
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id='lastName'
                            labelTranslatorId='UserManagement.lastName'
                            name='lastName'
                            autoCompleteName='lname'
                            helperText={formik.touched.lastName && formik.errors.lastName}
                            inputProps={{
                                value: formik.values.lastName,
                                onChange: formik.handleChange,
                                error: formik.touched.lastName && Boolean(formik.errors.lastName)
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id='email'
                            labelTranslatorId='UserManagement.email'
                            name='email'
                            type='email'
                            autoCompleteName='email'
                            helperText={formik.touched.email && formik.errors.email}
                            inputProps={{
                                value: formik.values.email,
                                onChange: formik.handleChange,
                                error: formik.touched.email && Boolean(formik.errors.email)
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            name='password'
                            labelTranslatorId='UserManagement.password'
                            type='password'
                            id='password'
                            autoCompleteName='password'
                            helperText={formik.touched.password && formik.errors.password}
                            inputProps={{
                                value: formik.values.password,
                                onChange: formik.handleChange,
                                error: formik.touched.password && Boolean(formik.errors.password)
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            name='confirmPassword'
                            labelTranslatorId='UserManagement.confirmPassword'
                            type='password'
                            id='confirmPassword'
                            autoCompleteName='confirmPassword'
                            helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                            inputProps={{
                                value: formik.values.confirmPassword,
                                onChange: formik.handleChange,
                                error: formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)
                            }}
                        />
                    </Grid>
                </Grid>
                <SubmitButton />
                <Grid container justify='flex-end'>
                    <Grid item>
                        <Link to='/login' linkProps={{ variant: 'body2' }} labelTranslatorId='UserManagement.alreadyRegistered' />
                    </Grid>
                </Grid>
                <Grid container justify='flex-start'>
                    <AjaxComponent />
                </Grid>
            </form>
        </div>
    );
};
