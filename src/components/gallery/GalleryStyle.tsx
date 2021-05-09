import { makeStyles, createStyles, Theme, lighten } from '@material-ui/core/styles';

export const useGalleryRootStyle = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1)
            }
        }
    })
);

/* Style for the control button */
export const useGalleryButtonStyle = makeStyles(() =>
    createStyles({
        input: {
            display: 'none'
        }
    })
);

export const useTableHeadStyle = makeStyles(() =>
    createStyles({
        visuallyHidden: {
            border: 0,
            clip: 'rect(0 0 0 0)',
            height: 1,
            margin: -1,
            overflow: 'hidden',
            padding: 0,
            position: 'absolute',
            top: 20,
            width: 1
        }
    })
);
export const useGalleryTableStyle = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%'
        },
        paper: {
            width: '100%',
            marginBottom: theme.spacing(2)
        },
        table: {
            minWidth: 750
        }
    })
);

export const useToolbarStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(1)
        },
        highlight:
            theme.palette.type === 'light'
                ? {
                      color: theme.palette.secondary.main,
                      backgroundColor: lighten(theme.palette.secondary.light, 0.85)
                  }
                : {
                      color: theme.palette.text.primary,
                      backgroundColor: theme.palette.secondary.dark
                  },
        title: {
            flex: '1 1 100%'
        }
    })
);
