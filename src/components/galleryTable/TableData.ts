import { DateTime } from 'luxon';

/* TODO: figure out how to incorporate folders as well */
export interface TableData {
    fileID: number;
    fileName: string;
    fileSize: number;
    /* When the file was first uploaded */
    uploaded: DateTime;
    /* Folder */
    filePath: string;
    /* type of file*/
    mime: string;
    accessID: number;
}

export function createData(
    fileID: number,
    fileName: string,
    fileSize: number,
    uploadedDtString: string,
    filePath: string,
    mime: string,
    accessID: number
): TableData {
    const uploaded = DateTime.fromSQL(uploadedDtString);
    return { fileID, fileName, fileSize, filePath, uploaded, mime, accessID };
}
