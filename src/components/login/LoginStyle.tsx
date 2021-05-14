import { makeStyles, createStyles, StyleRules } from '@material-ui/core/styles';

export const useLoginStyles = makeStyles(
    (theme): StyleRules =>
        createStyles({
            paper: {
                marginTop: theme.spacing(8),
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            },
            form: {
                width: '100%', // Fix IE 11 issue.
                marginTop: theme.spacing(3)
            },
            backdrop: {
                zIndex: theme.zIndex.drawer + 1,
                color: '#fff'
            }
        })
);

export const useLoginHeaderStyles = makeStyles(
    (theme): StyleRules =>
        createStyles({
            avatar: {
                margin: theme.spacing(1),
                backgroundColor: theme.palette.secondary.main
            }
        })
);

export const useLoginButtonStyles = makeStyles(
    (theme): StyleRules =>
        createStyles({
            submit: {
                margin: theme.spacing(3, 0, 2)
            }
        })
);
