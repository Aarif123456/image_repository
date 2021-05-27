import { FunctionComponent } from 'react';
import { useGalleryRootStyle } from '../gallery';
import { GalleryTable } from '../galleryTable';
import { GalleryControlButton } from '../galleryUpload';
import { useAjaxComponent, useSwrAjax } from '../../common';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';

/* Arguments that the API takes */
type FileApiArguments = {
    filePath?: string;
};

export type FileData = {
    fileID: number;
    memberID: number;
    fileName: string;
    fileSize: number;
    uploaded: string;
    filePath: string;
    mime: string;
    accessID: number;
};
export type FileApiReturnData = Array<FileData>;

export const Gallery: FunctionComponent = () => {
    const classes: ClassNameMap = useGalleryRootStyle();
    /* Different folder will have different files */
    const curFolder = '';

    const { data, isLoading, error } = useSwrAjax<FileApiReturnData, FileApiArguments>('FileManagement/folderImages', {
        filePath: curFolder
    });
    const { AjaxComponent } = useAjaxComponent<FileApiReturnData>({
        SuccessComponent: GalleryTable,
        data,
        isLoading,
        error
    });
    return (
        <div className={classes.root}>
            <AjaxComponent />
            <GalleryControlButton />
        </div>
    );
};
