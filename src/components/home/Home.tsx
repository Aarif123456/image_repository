import { FunctionComponent } from 'react';
import { useHomeStyles, LoginButton, SignUpButton } from '../home';
import { Grid, ButtonGroup } from '@material-ui/core';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';

export const Home: FunctionComponent = () => {
    const classes: ClassNameMap = useHomeStyles();
    return (
        <Grid container spacing={0} direction='row' alignItems='center' justify='center' className={classes.mainGrid}>
            <Grid item xs={3}>
                <ButtonGroup
                    orientation='vertical'
                    color='primary'
                    variant='contained'
                    fullWidth
                    aria-label='vertical landing page button group'
                    className={classes.mainButtons}>
                    <LoginButton />
                    <SignUpButton />
                </ButtonGroup>
            </Grid>
        </Grid>
    );
};
