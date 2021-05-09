import { FunctionComponent } from 'react';
import { Link, TextField } from '../../common';
import { FormValues, getValidationSchema } from './FormStructure';
import { useLoginStyles } from './LoginStyle';
import { SubmitButton } from './LoginSubmitButton';
import { LoginHeader } from './LoginHeader';
import { LoginApiReturn, LoginMessage } from './LoginMessage';
import { Grid, FormControlLabel, Checkbox } from '@material-ui/core';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';
import { useFormik } from 'formik';
import { useIntl } from 'react-intl';
import { useAjax, ProgressCircle } from '../../common/dataRetrieval';
import { useHistory } from 'react-router-dom';
/* Modified from https://github.com/mui-org/material-ui/tree/master/docs/src/pages/getting-started/templates/sign-in */

export const Login: FunctionComponent = () => {
    const classes: ClassNameMap = useLoginStyles();
    const intl = useIntl();
    const history = useHistory();
    const validationSchema = getValidationSchema(intl);
    const formik = useFormik({
        initialValues: validationSchema.cast({
            email: '',
            password: '',
            remember: false
        }),
        validationSchema: validationSchema,
        onSubmit: (values) => {
            ajax(values as FormValues);
        }
    });
    const { data, isLoading, error, ajax } = useAjax<LoginApiReturn, FormValues>('/userManagement/loginUser');

    if (data !== undefined) {
        const { loggedIn } = data;
        if (loggedIn) {
            history.push('/gallery');
        }
    }

    if (isLoading) {
        return <ProgressCircle />;
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
                        <Link to='/forgotPassword' linkProps={{ variant: 'body2' }} labelTranslatorId='UserManagement.forgotPassword' />
                    </Grid>
                    <Grid item>
                        <Link to='/signUp' linkProps={{ variant: 'body2' }} labelTranslatorId='UserManagement.notRegistered' />
                    </Grid>
                </Grid>
                <Grid container justify='flex-start'>
                    <LoginMessage message={data !== undefined ? data.message : error !== undefined ? error.error : ''} />
                </Grid>
            </form>
        </div>
    );
};
