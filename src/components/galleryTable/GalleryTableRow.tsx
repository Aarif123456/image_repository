import { FunctionComponent, MouseEvent } from 'react';
import { FileManagementButtonGroup, TableData } from '.';
import { Checkbox, TableCell, TableRow } from '@material-ui/core';
import { DateTime } from 'luxon';
/* Used for the search button Icon used to go to the appropriate session timeline */

interface GalleryTableRowProps {
    handleClick: (event: MouseEvent<HTMLTableRowElement>, id: number) => void;
    isItemSelected: boolean;
    labelId: string;
    row: TableData;
}

/* Source https://web.archive.org/web/20120507054320/http://codeaid.net/javascript/convert-size-in-bytes-to-human-readable-format-(javascript)*/
function formatBytes(bytes: number, decimals = 2): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}

function dateToString(dt: DateTime) {
    return dt.toLocaleString(DateTime.DATETIME_FULL);
}
/* Create the table row  */
export const GalleryTableRow: FunctionComponent<GalleryTableRowProps> = ({ handleClick, isItemSelected, labelId, row }) => {
    return (
        <TableRow
            hover
            onClick={(event) => handleClick(event, row.fileID)}
            role='checkbox'
            aria-checked={isItemSelected}
            tabIndex={-1}
            key={row.fileID}
            selected={isItemSelected}>
            <TableCell padding='checkbox'>
                <Checkbox checked={isItemSelected} inputProps={{ 'aria-labelledby': labelId }} />
            </TableCell>
            <TableCell align='left' padding='none'>
                {row.fileName}
            </TableCell>
            <TableCell align='left' padding='none'>
                {formatBytes(row.fileSize)}
            </TableCell>
            <TableCell align='left' padding='none'>
                {row.filePath}
            </TableCell>
            <TableCell align='left' padding='none'>
                {dateToString(row.uploaded)}
            </TableCell>
            <TableCell align='left' padding='none'>
                <FileManagementButtonGroup {...row} />
            </TableCell>
        </TableRow>
    );
};
