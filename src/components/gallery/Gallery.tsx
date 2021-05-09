import { FunctionComponent } from 'react';
import { GalleryTable, GalleryControlButton, useGalleryRootStyle } from '../gallery';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';

export const Gallery: FunctionComponent = () => {
    const classes: ClassNameMap = useGalleryRootStyle();
    return (
        <div className={classes.root}>
            <GalleryControlButton />
            <GalleryTable />
        </div>
    );
};
