import { FunctionComponent } from 'react';
import { TableData } from '.';
import { useIntl } from 'react-intl';
import { IconButton, ButtonGroup } from '@material-ui/core';
import CloudDownloadSharpIcon from '@material-ui/icons/CloudDownloadSharp';

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
                <CloudDownloadSharpIcon />
            </IconButton>
        </ButtonGroup>
    );
};
