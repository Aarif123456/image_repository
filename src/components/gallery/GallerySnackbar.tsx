import { SyntheticEvent, useState, FunctionComponent, useEffect } from 'react';
import { Snackbar } from '@material-ui/core';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { UploadInfo } from './GalleryControlButton';
import { FetchComponentProps } from '../../common';
import { FormattedMessage } from 'react-intl';

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant='filled' {...props} />;
}

/* The format of our end point with information about what files were uploaded*/
export type GalleryExpectedFileInfo = Array<[string, UploadInfo]>;

interface GallerySnackbarProps extends FetchComponentProps<GalleryExpectedFileInfo> {
    handleClose: (_event?: SyntheticEvent, reason?: string) => void;
    open: boolean;
}

export type GalleryHookReturn = {
    setOpen: (open: boolean) => void;
    GalleryInformation: FunctionComponent<FetchComponentProps<GalleryExpectedFileInfo>>;
};
export const GallerySnackbar: FunctionComponent<GallerySnackbarProps> = ({ open, data, handleClose }) => {
    /*NOTE: this should be used - might be better to just use a defaultFallback from FormattedMessage*/
    const fallbackError = 'of an internal server error';
    const [errorData, setErrorData] = useState<GalleryExpectedFileInfo>([]);
    const [successCount, setSuccessCount] = useState(0);
    console.log('In GallerySnackbar ');
    console.log(data);

    /* Whenever our data gets changed we change our info */
    useEffect(() => {
        setErrorData(data.filter(([_filename, uploadInfo]) => !uploadInfo.success));
        setSuccessCount(data.filter(([_filename, uploadInfo]) => uploadInfo.success).length);
    }, [data]);

    /* Don't react to empty requests. NOTE: it might make sense to use an info box to gently
     * remind the user to upload files
     */
    if (data === undefined || data.length === 0) return <div />;

    let alert: JSX.Element;

    /* Shown if all our files are rejected */
    if (successCount === 0) {
        alert = (
            <Alert severity='error'>
                <FormattedMessage id='FileManagement.uploadedFailed' />{' '}
            </Alert>
        );
    } else if (successCount === data.length) {
        /* Show if all our files are accepted */
        alert = (
            <Alert severity='success'>
                {' '}
                <FormattedMessage id='FileManagement.uploadedSuccessfully' />
            </Alert>
        );
    } else {
        /* Message if we have a mix of upload and delete */
        alert = (
            <Alert severity='warning'>
                <>
                    <h2 id='gallery-alert-title'>
                        {' '}
                        <FormattedMessage id='FileManagement.someFileFailedTitle' />{' '}
                    </h2>
                    {errorData.map(([filename, uploadInfo], index: number) => {
                        return (
                            <p key={`gallery-snackbar-description ${filename} ${index}`}>
                                <b>
                                    <FormattedMessage
                                        id='FileManagement.uploadedFailureInfo'
                                        values={{ filename, errorMessage: uploadInfo.error ?? fallbackError }}
                                    />{' '}
                                </b>
                            </p>
                        );
                    })}
                </>
            </Alert>
        );
    }

    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            {alert}
        </Snackbar>
    );
};

export function useGallerySnackbar(): GalleryHookReturn {
    const [open, setOpen] = useState(false);
    const handleClose = (_event?: SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') return;
        setOpen(false);
    };
    const GalleryInformation: FunctionComponent<FetchComponentProps<GalleryExpectedFileInfo>> = ({ data }) => (
        <GallerySnackbar handleClose={handleClose} data={data} open={open} />
    );

    return {
        setOpen,
        GalleryInformation
    };
}
