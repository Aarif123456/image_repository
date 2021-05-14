import { FunctionComponent } from 'react';
import { Link, TextField, useAjax, ProgressCircle } from '../../common';
import { FormValues, getValidationSchema, useLoginStyles, SubmitButton, LoginHeader, LoginApiReturn, LoginMessage } from '../login';
import { Backdrop, Checkbox, FormControlLabel, Grid } from '@material-ui/core';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';
import { useFormik } from 'formik';
import { useIntl } from 'react-intl';
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
        return (
            <Backdrop className={classes.backdrop} open={true}>
                {' '}
                <ProgressCircle />{' '}
            </Backdrop>
        );
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
