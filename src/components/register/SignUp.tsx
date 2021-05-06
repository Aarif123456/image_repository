import { FunctionComponent } from 'react';
import { useSignUpStyles } from './SignUpStyle';
import { SignUpHeader } from './SignUpHeader';
import { Link, TextField } from '../../common';
import { Button, Grid } from '@material-ui/core';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';

/* Modified from https://github.com/mui-org/material-ui/tree/master/docs/src/pages/getting-started/templates/sign-up */

export const SignUp: FunctionComponent = () => {
    const classes: ClassNameMap = useSignUpStyles();
    return (
        <div className={classes.paper}>
            <SignUpHeader />
            <form className={classes.form}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            autoCompleteName='fname'
                            name='firstName'
                            id='firstName'
                            labelTranslatorId='Signup.firstName'
                            autoFocus
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField id='lastName' labelTranslatorId='Signup.lastName' name='lastName' autoCompleteName='lname' />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id='email' labelTranslatorId='Signup.email' name='email' type='email' autoCompleteName='email' />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            name='password'
                            labelTranslatorId='Signup.password'
                            type='password'
                            id='password'
                            autoCompleteName='current-password'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            name='password'
                            labelTranslatorId='Signup.confirmPassword'
                            type='password'
                            id='confirm-password'
                            autoCompleteName='confirm-password'
                        />
                    </Grid>
                </Grid>
                <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
                    Sign Up
                </Button>
                <Grid container justify='flex-end'>
                    <Grid item>
                        <Link to='/login' linkProps={{ variant: 'body2' }} labelTranslatorId='Signup.alreadyRegistered' />
                    </Grid>
                </Grid>
            </form>
        </div>
    );
};
