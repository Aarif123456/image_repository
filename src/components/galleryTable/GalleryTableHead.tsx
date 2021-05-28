import { FunctionComponent, MouseEvent } from 'react';
import { TableData, useTableHeadStyle, OnRequestSortParameter, GalleryTableProps, HeadCell } from '.';
import { Checkbox, TableCell, TableHead, TableRow, TableSortLabel } from '@material-ui/core';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';

const headCells: HeadCell<TableData>[] = [
    { id: 'fileName', numeric: false },
    { id: 'fileSize', numeric: true },
    { id: 'filePath', numeric: false },
    { id: 'uploaded', numeric: false }
];

function createSortHandler<T>(property: keyof T, onRequestSort: OnRequestSortParameter<T>) {
    return (event: MouseEvent<HTMLButtonElement>): void => {
        onRequestSort(event, property);
    };
}
/* Handle toggling of sort button */
export const GalleryTableHead: FunctionComponent<GalleryTableProps<TableData>> = ({
    numSelected,
    onRequestSort,
    onSelectAllClick,
    order,
    orderBy,
    rowCount,
    intl
}) => {
    const classes: ClassNameMap = useTableHeadStyle();
    return (
        <TableHead>
            <TableRow>
                <TableCell padding='checkbox'>
                    <Checkbox
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{ 'aria-label': intl.formatMessage({ id: 'Gallery.Table.checkboxLabel' }) }}
                    />
                </TableCell>
                {headCells.map((headCell: HeadCell<TableData>) => (
                    <TableCell key={headCell.id} align='left' padding='none' sortDirection={orderBy === headCell.id ? order : false}>
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler<TableData>(headCell.id, onRequestSort)}>
                            {intl.formatMessage({ id: `Gallery.Table.${headCell.id}` })}
                            {orderBy === headCell.id ? (
                                <span className={classes.visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </span>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
};
