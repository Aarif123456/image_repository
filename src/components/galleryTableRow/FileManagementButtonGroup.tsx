import { FunctionComponent } from 'react';
import { TableData } from '../galleryTable';
import { useDeleteButton } from '.';
import { useIntl } from 'react-intl';
import { IconButton, ButtonGroup } from '@material-ui/core';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

export const FileManagementButtonGroup: FunctionComponent<TableData> = (rowData) => {
    const intl = useIntl();
    const { fileName, fileID } = rowData;
    const { deleted, DeleteButton } = useDeleteButton({ fileID });
    return (
        <ButtonGroup>
            <IconButton
                onClick={() => {
                    alert(`Will trigger a download of the ${fileName} file`);
                }}
                aria-label={intl.formatMessage({
                    id: 'FileManagement.download'
                })}>
                <CloudDownloadIcon />
            </IconButton>
            {!deleted && <DeleteButton />}
        </ButtonGroup>
    );
};
