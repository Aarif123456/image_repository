import { FunctionComponent, useState } from 'react';
import { useLoginStyles } from './LoginStyle';
import { LoginHeader } from './LoginHeader';
import { Link, TextField } from '../../common';
import { Grid, FormControlLabel, Checkbox } from '@material-ui/core';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';
import { SubmitButton } from './LoginSubmitButton';
import { FormValues, getValidationSchema } from './FormStructure';
import { useFormik } from 'formik';
import { useIntl } from 'react-intl';
import { DataComponent, FetchComponentProps } from '../../common/dataRetrieval';
/* Modified from https://github.com/mui-org/material-ui/tree/master/docs/src/pages/getting-started/templates/sign-in */
/*TODO: replace with shape of actual api */
type LoginApiReturn = {
    message?: string;
};
type SuccessProps = FetchComponentProps<LoginApiReturn>;

export const SuccessComponent: FunctionComponent<SuccessProps> = ({ data }) => {
    console.log(data);
    return <div> Congrats you signed in... </div>;
};
export const Login: FunctionComponent = () => {
    const classes: ClassNameMap = useLoginStyles();
    const intl = useIntl();
    const validationSchema = getValidationSchema(intl);
    const [isSubmitted, setSubmitted] = useState(false);
    const formik = useFormik({
        initialValues: validationSchema.cast({
            email: '',
            password: '',
            remember: false
        }),
        validationSchema: validationSchema,
        onSubmit: (values) => {
            setSubmitted(true);
            alert(JSON.stringify(values, null, 2));
        }
    });

    const submittedElement = DataComponent<LoginApiReturn, FormValues>({
        isReady: isSubmitted,
        SuccessReturn: SuccessComponent,
        endpoint: 'login',
        args: formik.values as FormValues
    });
    if (isSubmitted) {
        return submittedElement;
    }

    /* Manage form data then pass it to the submit button */
    return (
        <div className={classes.paper}>
            <LoginHeader />
            <form className={classes.form} onSubmit={formik.handleSubmit} noValidate>
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
                <FormControlLabel
                    control={<Checkbox value={formik.values.remember} color='primary' onChange={formik.handleChange} />}
                    name='remember'
                    label={intl.formatMessage({ id: 'UserManagement.rememberMe' })}
                />
                <SubmitButton />
                <Grid container justify='flex-end'>
                    <Grid item xs>
                        <Link to='/forgotPassword' linkProps={{ variant: 'body2' }} labelTranslatorId='UserManagement.forgotPasssword' />
                    </Grid>
                    <Grid item>
                        <Link to='/signUp' linkProps={{ variant: 'body2' }} labelTranslatorId='UserManagement.notRegistered' />
                    </Grid>
                </Grid>
            </form>
        </div>
    );
};
