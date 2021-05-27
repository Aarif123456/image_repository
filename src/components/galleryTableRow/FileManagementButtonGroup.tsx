import { FunctionComponent } from 'react';
import { TableData } from '../galleryTable';
import { useDeleteButton, DownloadButton } from '.';
import { ButtonGroup } from '@material-ui/core';

export const FileManagementButtonGroup: FunctionComponent<TableData> = (rowData) => {
    const { fileID, fileName } = rowData;
    const { deleted, DeleteButton } = useDeleteButton({ fileID });
    return (
        <ButtonGroup>
            {!deleted && <DeleteButton />}
            <DownloadButton fileID={fileID} fileName={fileName} />
        </ButtonGroup>
    );
};
