import { FunctionComponent } from 'react';
import clsx from 'clsx';
import { useToolbarStyles } from '../gallery';
import { IconButton, Tooltip, Toolbar, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';

interface GalleryTableToolbarProps {
    numSelected: number;
}

export const GalleryTableToolbar: FunctionComponent<GalleryTableToolbarProps> = ({ numSelected }) => {
    const classes: ClassNameMap = useToolbarStyles();

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
