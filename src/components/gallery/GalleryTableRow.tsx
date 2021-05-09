import { FunctionComponent } from 'react';
import { Checkbox, TableCell, TableRow } from '@material-ui/core';
import { TableData } from '.';
/* Used for the search button Icon used to go to the appropriate session timeline */

interface GalleryTableRowProps {
    handleClick: (event: React.MouseEvent<HTMLTableRowElement>, name: string) => void;
    isItemSelected: boolean;
    labelId: string;
    row: TableData;
}

/* Create the table row  */
export const GalleryTableRow: FunctionComponent<GalleryTableRowProps> = ({ handleClick, isItemSelected, labelId, row }) => {
    return (
        <TableRow
            hover
            onClick={(event) => handleClick(event, row.name)}
            role='checkbox'
            aria-checked={isItemSelected}
            tabIndex={-1}
            key={row.name}
            selected={isItemSelected}>
            <TableCell padding='checkbox'>
                <Checkbox checked={isItemSelected} inputProps={{ 'aria-labelledby': labelId }} />
            </TableCell>
            <TableCell component='th' id={labelId} scope='row' padding='none'>
                {row.name}
            </TableCell>
            <TableCell align='right'>{row.calories}</TableCell>
            <TableCell align='right'>{row.fat}</TableCell>
            <TableCell align='right'>{row.carbs}</TableCell>
            <TableCell align='right'>{row.protein}</TableCell>
        </TableRow>
    );
};
