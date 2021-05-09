import { FunctionComponent } from 'react';
import { createStyles, lighten, makeStyles, Theme } from '@material-ui/core/styles';
import clsx from 'clsx';
import { IconButton, Tooltip, Toolbar, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';

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

interface GalleryTableToolbarProps {
    numSelected: number;
}

export const GalleryTableToolbar: FunctionComponent<GalleryTableToolbarProps> = ({ numSelected }) => {
    const classes = useToolbarStyles();

    return (
        <Toolbar
            className={clsx(classes.root, {
                [classes.highlight]: numSelected > 0
            })}>
            {numSelected > 0 ? (
                <Typography className={classes.title} color='inherit' variant='subtitle1' component='div'>
                    {numSelected} selected
                </Typography>
            ) : (
                <Typography className={classes.title} variant='h6' id='tableTitle' component='div'>
                    Nutrition
                </Typography>
            )}
            {numSelected > 0 ? (
                <Tooltip title='Delete'>
                    <IconButton aria-label='delete'>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            ) : (
                <Tooltip title='Filter list'>
                    <IconButton aria-label='filter list'>
                        <FilterListIcon />
                    </IconButton>
                </Tooltip>
            )}
        </Toolbar>
    );
};
