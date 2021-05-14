import { FunctionComponent } from 'react';
import { useGalleryRootStyle } from '../gallery';
import { GalleryTable } from '../galleryTable';
import { GalleryControlButton } from '../galleryUpload';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';

export const Gallery: FunctionComponent = () => {
    const classes: ClassNameMap = useGalleryRootStyle();
    return (
        <div className={classes.root}>
            <GalleryTable />
            <GalleryControlButton />
        </div>
    );
};
