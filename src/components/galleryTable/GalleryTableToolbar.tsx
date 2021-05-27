import { FunctionComponent } from 'react';
import { useToolbarStyles } from '.';
import { IconButton, Tooltip, Toolbar, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';
import clsx from 'clsx';
import { FormattedMessage } from 'react-intl';

interface GalleryTableToolbarProps {
    selected: number[];
}

/* TODO: Typography should have a formatted message child*/
export const GalleryTableToolbar: FunctionComponent<GalleryTableToolbarProps> = ({ selected }) => {
    const classes: ClassNameMap = useToolbarStyles();
    const numSelected = selected.length;

    return (
        <Toolbar
            className={clsx(classes.root, {
                [classes.highlight]: numSelected > 0
            })}>
            {numSelected > 0 ? (
                <Typography className={classes.title} color='inherit' variant='subtitle1' component='div'>
                    <FormattedMessage id='Gallery.Table.selected' values={{ numSelected }} />
                </Typography>
            ) : (
                <Typography className={classes.title} variant='h6' id='tableTitle' component='div'>
                    <FormattedMessage id='Gallery.Table.title' />
                </Typography>
            )}
            {numSelected > 0 && (
                <Tooltip title='Delete'>
                    <IconButton
                        aria-label='delete'
                        onClick={() => {
                            alert(`Will delete of the files with the following IDs: ${selected.join()} `);
                        }}>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            )}
        </Toolbar>
    );
};
