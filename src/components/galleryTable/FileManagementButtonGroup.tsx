import { FunctionComponent } from 'react';
import { TableData } from '.';
import { useIntl } from 'react-intl';
import { IconButton, ButtonGroup } from '@material-ui/core';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import DeleteIcon from '@material-ui/icons/Delete';

export const FileManagementButtonGroup: FunctionComponent<TableData> = ({ fileName }) => {
    /* TODO: make button call endpoint that triggers a download*/
    const intl = useIntl();
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
            <IconButton
                onClick={() => {
                    alert(`Will delete the ${fileName} file`);
                }}
                aria-label={intl.formatMessage({
                    id: 'FileManagement.delete'
                })}>
                <DeleteIcon />
            </IconButton>
        </ButtonGroup>
    );
};
