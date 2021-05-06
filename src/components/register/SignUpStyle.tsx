import { makeStyles, createStyles, StyleRules } from '@material-ui/core/styles';

export const useSignUpStyles = makeStyles(
    (theme): StyleRules =>
        createStyles({
            paper: {
                marginTop: theme.spacing(8),
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            },
            avatar: {
                margin: theme.spacing(1),
                backgroundColor: theme.palette.secondary.main
            },
            form: {
                width: '100%', // Fix IE 11 issue.
                marginTop: theme.spacing(3)
            },
            submit: {
                margin: theme.spacing(3, 0, 2)
            }
        })
);

export const useSignUpHeaderStyles = makeStyles(
    (theme): StyleRules =>
        createStyles({
            avatar: {
                margin: theme.spacing(1),
                backgroundColor: theme.palette.secondary.main
            }
        })
);
