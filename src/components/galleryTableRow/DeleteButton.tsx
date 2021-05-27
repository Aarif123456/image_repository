import { FunctionComponent } from 'react';
import { updateTable } from '../gallery';
import { useAjax } from '../../common';
import { useIntl } from 'react-intl';
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

export type DeleteApiReturn = {
    error: boolean;
    message?: string;
};

export type DeleteApiArguments = {
    filePath?: string;
    fileName?: string;
    fileId?: number;
};

type Props = {
    fileID: number;
};

type deleteHookReturn = {
    deleted: boolean;
    DeleteButton: FunctionComponent;
};

export const useDeleteButton = (props: Props): deleteHookReturn => {
    const intl = useIntl();
    const { fileID } = props;
    const { data, isLoading, ajax } = useAjax<DeleteApiReturn, DeleteApiArguments>(`/FileManagement/delete?fileId=${fileID}`);
    const deleteFile = (): void => {
        ajax();
        updateTable();
    };
    const DeleteButton: FunctionComponent = () => (
        <IconButton
            onClick={deleteFile}
            disabled={isLoading}
            aria-label={intl.formatMessage({
                id: 'FileManagement.delete'
            })}>
            <DeleteIcon />
        </IconButton>
    );

    return { deleted: data?.error ?? false, DeleteButton };
};
