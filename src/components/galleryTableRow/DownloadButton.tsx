import { FunctionComponent } from 'react';
import { API } from '../../common';
import { useIntl } from 'react-intl';
import { IconButton } from '@material-ui/core';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

export type DownloadApiArguments = {
    filePath?: string;
    fileName?: string;
    fileId?: number;
};

type Props = {
    fileID: number;
    fileName: string;
};

export const DownloadButton: FunctionComponent<Props> = ({ fileID, fileName }) => {
    const intl = useIntl();
    const downloadFile = (): void => {
        const a = document.createElement('a');
        a.href = `${API}/FileManagement/image?download=true&fileId=${fileID}`;
        a.setAttribute('download', fileName);
        a.click();
    };
    return (
        <IconButton
            onClick={downloadFile}
            aria-label={intl.formatMessage({
                id: 'FileManagement.download'
            })}>
            <CloudDownloadIcon />
        </IconButton>
    );
};
